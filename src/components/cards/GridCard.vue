<!-- <script>
import { ArrowRightUpIcon } from "../../components/icons/index.js";
import { mapGetters } from "vuex";

export default {
  components: {
    ArrowRightUpIcon,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("product", ["isInCart", "getItemQuantity"]),
    productInCart() {
      return this.isInCart(this.product?.id);
    },
    quantity() {
      return this.getItemQuantity(this.product?.id);
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
  <div
    class="overflow-hidden mx-auto border border-1-[#E0E0E0] rounded-lg bg-white flex flex-col gap-4 w-96 md:w-full h-[450px] shadow-lg text-black no-underline"
  >
    <img
      class="w-auto h-1/2 object-cover object-center rounded-t-lg transition-all duration-300 ease-in-out hover:scale-[1.02]"
      :src="product.imageSrc"
      :alt="product.title"
    />
    <div
      class="mx-4 text-[16px] font-bold leading-[18.75px] mt-1 text-ellipsis line-clamp-2"
    >
      {{ product.title }}
    </div>
    <div class="mx-4 text-[14px] font-medium leading-[16.41px] mb-2">
      {{ product.price }}
    </div>
    <div
      class="mx-4 mb-3 text-[14px] font-normal leading-[16.41px] text-ellipsis line-clamp-3 overflow-hidden"
    >
      {{ product.description }}
    </div>
    <div class="flex flex-col space-x-4">
      <div class="mx-4 flex flex-row items-center justify-center gap-1 mb-3">
        <router-link
          class="text-primary text-[14px] leading-[16.41px] font-semibold"
          :to="product.link"
          >View details
        </router-link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="size-4 text-primary"
        >
          <path
            fill-rule="evenodd"
            d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- Quantity controls when in cart -->
      <div
        v-if="productInCart"
        class="flex items-center justify-center gap-2 w-full"
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
</template>
