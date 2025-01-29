<!-- <script>
import GridCard from "../components/cards/GridCard.vue";
import ListCard from "../components/cards/ListCard.vue";

import { mapState, mapGetters, mapActions } from "vuex";

import {
  ListIcon,
  GridIcon,
  CartFullIcon,
  CartEmptyIcon,
} from "../components/icons/index.js";

export default {
  components: {
    ListIcon,
    GridIcon,
    CartFullIcon,
    CartEmptyIcon,
    ListCard,
    GridCard,
  },

  computed: {
    ...mapState("product", [
      "isListView",
      "selectedProducts",
      "itemsPerPage",
      "currentPage",
    ]),
    ...mapGetters("product", ["totalPages", "displayedProducts"]),
  },
  methods: {
    ...mapActions("product", [
      "fetchProducts",
      "goToNextPage",
      "goToPreviousPage",
    ]),
    toggleView(view) {
      this.$store.commit("product/toggleView", view);
    },
    addToCart(product) {
      this.$store.commit("product/addToCart", product);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script> -->

<script setup>
import { computed, onMounted } from "vue";
import GridCard from "../components/cards/GridCard.vue";
import ListCard from "../components/cards/ListCard.vue";
import { useStore } from "vuex";

import {
  ListIcon,
  GridIcon,
  CartFullIcon,
  CartEmptyIcon,
} from "../components/icons/index.js";

const store = useStore();

const isListView = computed(() => store.state["product"].isListView);
const itemsPerPage = computed(() => store.state["product"].itemsPerPage);
const currentPage = computed(() => store.state["product"].currentPage);

const totalPages = computed(() => store.getters["product/totalPages"]);
const displayedProducts = computed(
  () => store.getters["product/displayedProducts"]
);

const fetchProducts = () => {
  store.dispatch("product/fetchProducts");
};

const goToNextPage = () => {
  store.dispatch("product/goToNextPage");
};

const goToPreviousPage = () => {
  store.dispatch("product/goToPreviousPage");
};

const toggleView = (view) => {
  store.commit("product/toggleView", view);
};

const addToCart = (product) => {
  store.commit("product/addToCart", product);
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="h-full w-full">
    <div class="w-60 text-center space-y-2 mx-auto my-4">
      <h1 class="text-3xl font-semibold">Yuppy's Products</h1>
      <p class="text-base italic font-normal text-gray-800">
        ~ Affordable prices you can get ~
      </p>
    </div>
    <div
      class="flex justify-between items-center px-8 py-4 bg-slate-100 shadow-lg"
    >
      <!-- List and Grid View Icons -->
      <div class="flex gap-2">
        <button
          @click="toggleView('list')"
          class="flex items-center space-x-1 h-max cursor-pointer hover:text-green-600 transition-all duration-300"
        >
          <div class="w-4 h-4 text-green-800">
            <ListIcon />
          </div>
          <p class="text-lg">List View</p>
        </button>

        <div
          class="w-0.5 h-6 bg-gray-200 flex items-center justify-center"
        ></div>

        <button
          @click="toggleView('grid')"
          class="flex items-center space-x-1 h-max cursor-pointer hover:text-green-600 transition-all duration-300"
        >
          <div class="w-4 h-4 text-green-800">
            <GridIcon />
          </div>
          <p class="text-lg">Grid View</p>
        </button>
      </div>
    </div>

    <!-- Dropdown for Items Per Page -->
    <div class="flex justify-between items-center px-8 py-4">
      <div>
        <label for="itemsPerPage" class="text-lg font-semibold mr-2"
          >Products per page:</label
        >
        <select
          id="itemsPerPage"
          :value="itemsPerPage"
          @change="
            $store.commit('product/setItemsPerPage', $event.target.value)
          "
          class="border rounded-lg px-4 py-2"
        >
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="15">15</option>
          <option :value="20">20</option>
        </select>
      </div>
    </div>

    <div class="w-full h-[87%] py-4">
      <!-- List View -->
      <div v-if="isListView" class="space-y-4">
        <div
          class="grid grid-cols-7 gap-4 text-sm font-semibold"
          style="grid-template-columns: 1fr 1fr 3fr 1fr 1fr 1fr 1fr"
        >
          <p class="mx-8">Image</p>
          <p class="">Name</p>
          <p>Description</p>
          <p>Category</p>
          <p>Reviews</p>
          <p>Price</p>
          <p class="flex justify-center">Add to Cart</p>
        </div>

        <!-- Products -->
        <div v-if="!displayedProducts.length">
          <p>Loading products...</p>
        </div>
        <div class="space-y-4">
          <ListCard
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
            :imageSrc="product.imageSrc"
            :title="product.title"
            :price="'$ ' + product.price"
            :description="product.description"
            :link="product.link"
            :category="product.category"
          />
        </div>
      </div>

      <!-- Grid View -->
      <div v-else class="space-y-4 mt-4">
        <div class="grid grid-cols-5 gap-4">
          <GridCard
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
            :imageSrc="product.imageSrc"
            :title="product.title"
            :price="'$ ' + product.price"
            :description="product.description"
            :link="product.link"
          />
        </div>
      </div>
      <!-- Next and previous -->
      <div class="flex justify-end space-x-4 mt-4">
        <span class="text-sm mt-4">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <button
          @click="goToPreviousPage"
          :disabled="currentPage === 1"
          class="border-2 shadow-xl py-2 px-4 rounded-lg"
        >
          Previous
        </button>
        <button
          @click="goToNextPage"
          :disabled="currentPage >= totalPages"
          class="border-2 shadow-xl py-2 px-4 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
