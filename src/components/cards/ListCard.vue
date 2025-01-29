<!-- <script>
import { mapGetters } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("product", ["isInCart", "getItemQuantity"]),
    productInCart() {
      return this.isInCart(this.product.id);
    },
    quantity() {
      return this.getItemQuantity(this.product.id);
    },
  },
  methods: {
    updateQuantity(newQuantity) {
      this.$store.commit("product/updateQuantity", {
        productId: this.product.id,
        quantity: newQuantity,
      });
    },
    addToCart() {
      this.$store.commit("product/addToCart", this.product);
    },
  },
};
</script> -->

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

//  props
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

//  store
const store = useStore();

// Computed
const productInCart = computed(() => {
  return store.getters["product/isInCart"](props.product?.id);
});

const quantity = computed(() => {
  return store.getters["product/getItemQuantity"](props.product?.id);
});

// Methods
const updateQuantity = (newQuantity) => {
  store.commit("product/updateQuantity", {
    productId: props.product.id,
    quantity: newQuantity,
  });
};

const addToCart = () => {
  store.commit("product/addToCart", props.product);
};
</script>

<template>
  <div class="space-y-4">
    <div class="w-full h-28 bg-violet-50">
      <div
        class="w-full h-full grid grid-cols-7 gap-4"
        style="grid-template-columns: 1fr 1fr 3fr 1fr 1fr 1fr 1fr"
      >
        <!-- Image -->
        <div class="">
          <img
            class="w-full h-28 object-cover object-center rounded-xl"
            :src="product.imageSrc"
            :alt="product.title"
          />
        </div>
        <!-- Name -->
        <p class="font-semibold text-sm my-4 line-clamp-3 h-16">
          {{ product.title }}
        </p>
        <!-- Description -->
        <p class="text-gray-600 my-4 text-sm line-clamp-3 h-16">
          {{ product.description }}
        </p>
        <!-- Category -->
        <div class="mt-4">
          <p
            class="border-2 shadow-2xl text-gray-600 py-1 px-2 w-max rounded-md"
          >
            {{ product.category }}
          </p>
        </div>
        <!-- Reviews -->
        <div class="mt-4">4 stars</div>
        <!-- Price -->
        <p class="mt-4">$ {{ product.price }}</p>

        <!-- Cart Controls -->
        <div class="flex flex-col gap-2 justify-center mx-4">
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
            @click="$emit('addToCart', product)"
            class="bg-[#2BDA53] w-full py-2 text-white rounded-lg"
          >
            Add to Cart
          </button>

          <RouterLink
            :to="product.link"
            class="w-full text-center py-2 border border-[#2BDA53] text-gray-600 rounded-lg"
          >
            View Details
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
