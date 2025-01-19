<script>
import GridCard from "../components/cards/GridCard.vue";
import ListCard from "../components/cards/ListCard.vue";
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
  data() {
    return {
      isListView: true,
      currentPage: 1,
      itemsPerPage: 5,
      products: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
      })),
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    displayedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
  },
  methods: {
    toggleView(view) {
      this.isListView = view === "list";
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    goToPreviousPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>

<template>
  <div class="h-full w-full">
    <div class="w-60 text-center space-y-2 mx-auto my-4">
      <h1 class="text-3xl font-semibold">Yuppy's Products</h1>
      <p class="text-base italic font-normal text-gray-800">
        ~ Affordable prices you can get ~
      </p>
    </div>
    <div class="flex justify-between items-center px-8 bg-slate-100 shadow-lg">
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

      <!-- Cart Icon -->
      <div>
        <div
          class="relative flex items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <button class="w-10 h-10 mt-2 text-green-800">
            <cart-empty-icon />
          </button>
          <p class="absolute inset-0 text-sm font-bold text-red-600 pl-5">1</p>
        </div>
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
          v-model="itemsPerPage"
          class="border rounded-lg px-4 py-2"
        >
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="15">15</option>
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
        <div class="space-y-4">
          <ListCard v-for="product in displayedProducts" :key="product.id" />
        </div>
      </div>

      <!-- Grid View -->
      <div v-else class="space-y-4 mt-4">
        <div class="grid grid-cols-5 gap-4">
          <GridCard v-for="product in displayedProducts" :key="product.id" />
        </div>
      </div>
      <!-- Next and previous -->
      <div class="flex justify-end space-x-4 mt-4">
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
