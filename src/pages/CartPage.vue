<!-- <script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("product", ["selectedProducts"]),
    ...mapGetters("product", ["cartTotal"]),
  },
  methods: {
    updateQuantity(productId, quantity) {
      this.$store.commit("product/updateQuantity", { productId, quantity });
    },
  },
};
</script> -->

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const selectedProducts = computed(
  () => store.state["product"].selectedProducts
);

const cartTotal = computed(() => store.getters["product/cartTotal"]);

const updateQuantity = (productId, quantity) => {
  store.commit("product/updateQuantity", { productId, quantity });
};
</script>

<template>
  <div class="p-8">
    <div class="mb-8">
      <h1 class="text-3xl font-semibold">Shopping Cart</h1>
      <p class="text-gray-600 mt-8" v-if="selectedProducts.length === 0">
        Your cart is empty. Start shopping!
      </p>
    </div>

    <div v-if="selectedProducts.length > 0" class="space-y-6">
      <!-- Cart Items -->
      <div class="bg-white rounded-lg shadow-lg">
        <div
          class="grid grid-cols-5 gap-6 p-4 bg-gray-50 rounded-t-lg font-semibold"
        >
          <div class="col-span-2">Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>

        <div class="divide-y">
          <div
            v-for="item in selectedProducts"
            :key="item.product.id"
            class="grid grid-cols-5 gap-6 p-4 items-center"
          >
            <!-- Product Info -->
            <div class="col-span-2 flex items-center space-x-4">
              <img
                :src="item.product.imageSrc"
                :alt="item.product.title"
                class="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 class="font-medium">{{ item.product.title }}</h3>
                <p class="text-sm text-gray-500">{{ item.product.category }}</p>
              </div>
            </div>

            <!-- Price -->
            <div>${{ item.product.price.toFixed(2) }}</div>

            <!-- Quantity Controls -->
            <div class="flex items-center space-x-2">
              <button
                @click="updateQuantity(item.product.id, item.quantity - 1)"
                class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                -
              </button>
              <span class="w-8 text-center">{{ item.quantity }}</span>
              <button
                @click="updateQuantity(item.product.id, item.quantity + 1)"
                class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                +
              </button>
            </div>

            <!-- Total -->
            <div>${{ (item.product.price * item.quantity).toFixed(2) }}</div>
          </div>
        </div>
      </div>

      <!-- Cart Summary -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">Cart Total</h2>
          <p class="text-2xl font-bold">${{ cartTotal.toFixed(2) }}</p>
        </div>
        <div class="mt-6 flex justify-end">
          <button
            class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
