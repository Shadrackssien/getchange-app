<!-- <script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("product", [
      "getProduct",
      "isLoading",
      "isInCart",
      "getCartItem",
      "getItemQuantity",
    ]),
    quantity() {
      return this.getItemQuantity(this.getProduct?.id);
    },

    productInCart() {
      return this.isInCart(this.getProduct?.id);
    },
  },
  methods: {
    updateQuantity(newQuantity) {
      if (this.getProduct) {
        this.$store.commit("product/updateQuantity", {
          productId: this.getProduct.id,
          quantity: newQuantity,
        });
      }
    },
    addToCart() {
      if (this.getProduct) {
        this.$store.commit("product/addToCart", this.getProduct);
      }
    },
  },
  mounted() {
    const productId = this.$route.params.id;
    this.$store.dispatch("product/fetchProduct", productId);
  },
};
</script> -->

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";

const store = useStore();
const route = useRoute();

const getProduct = computed(() => store.getters["product/getProduct"]);
const isLoading = computed(() => store.getters["product/isLoading"]);
const isInCart = computed(() => store.getters["product/isInCart"]);
const getItemQuantity = computed(
  () => store.getters["product/getItemQuantity"]
);

const quantity = computed(() => {
  return getItemQuantity.value(getProduct.value?.id);
});

const productInCart = computed(() => {
  return isInCart.value(getProduct.value?.id);
});

const updateQuantity = (newQuantity) => {
  if (getProduct.value) {
    store.commit("product/updateQuantity", {
      productId: getProduct.value.id,
      quantity: newQuantity,
    });
  }
};

const addToCart = () => {
  if (getProduct.value) {
    store.commit("product/addToCart", getProduct.value);
  }
};

onMounted(() => {
  const productId = route.params.id;
  store.dispatch("product/fetchProduct", productId);
});
</script>

<template>
  <div class="product">
    <div v-if="isLoading" class="text-center mt-8">Loading product...</div>
    <div v-else-if="!getProduct" class="text-center mt-8">
      Product not found.
    </div>
    <!-- image -->
    <div v-else>
      <div class="mx-4 md:mx-8 lg:mx-16 mt-8 mb-[60px] rounded-lg">
        <img
          class="w-[100%] h-[480px] object-cover object-center border border-gray-300 rounded-[20px]"
          :src="getProduct.image"
          :alt="getProduct.title"
        />
      </div>

      <!-- Main content -->
      <div
        class="flex flex-col lg:flex-row justify-between lg:mx-16 gap-4 mb-10"
      >
        <!-- Product content -->
        <div>
          <!-- title -->
          <div class="mx-4 md:mx-8 lg:mx-16 flex flex-col gap-2">
            <h1
              class="text-[20px] md:text-[24px] leading-[28.13px] mb-8 md:mb-0 font-bold w-96 md:w-[650px] h-[30px]"
            >
              {{ getProduct.title }}
            </h1>

            <!-- details -->
            <div class="flex flex-col gap-[8px]">
              <div class="flex flex-row gap-2">
                <p class="mt-8">{{ "Price: $ " + getProduct.price }}</p>
              </div>
              <div class="flex flex-row gap-2">
                <p>
                  {{ "Category: " + getProduct.category }}
                </p>
              </div>
              <div class="flex flex-row gap-2">
                <p>
                  {{
                    "Rating: " +
                    getProduct.rating.rate +
                    " " +
                    getProduct.rating.count +
                    " reviews"
                  }}
                </p>
              </div>
            </div>

            <!-- description -->
            <div class="mt-8">
              <p class="font-bold text-[16px] leading-[18.75px] mb-4">
                Product description
              </p>
              <p class="w-[95%] lg:w-[875px] text-[16px] leading-[18.75px]">
                {{ getProduct.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Controls -->
      <div class="flex flex-col gap-2 justify-center mx-4 mb-16">
        <!-- Quantity controls when in cart -->
        <div
          v-if="productInCart"
          class="flex items-center justify-center gap-2"
        >
          <button
            @click="updateQuantity(quantity - 1)"
            class="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            -
          </button>
          <span class="w-8 text-center text-gray-700">{{ quantity }}</span>
          <button
            @click="updateQuantity(quantity + 1)"
            class="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            +
          </button>
        </div>
        <!-- Add to Cart button when not in cart -->
        <button
          v-else
          @click="addToCart"
          class="bg-[#2BDA53] w-full py-2 text-white rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
