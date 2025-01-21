<script>
import { routerKey } from "vue-router";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="space-y-4">
    <!-- Product -->
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
          <div></div>
        </div>
        <!-- Reviews -->
        <div class="mt-4">4 stars</div>
        <!-- Price -->
        <p class="mt-4">$ {{ product.price }}</p>
        <!-- Add to Cart -->
        <div class="flex flex-col gap-2 justify-center mx-4">
          <button
            @click="$emit('addToCart', product)"
            class="bg-[#2BDA53] w-full py-2 text-white rounded-lg"
          >
            Add to Cart
          </button>
          <router-link
            :to="product.link"
            class="w-full py-2 border border-[#2BDA53] text-gray-600 rounded-lg"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
