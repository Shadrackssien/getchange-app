<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const selectedImage = ref("banner1.png");
const images = ref(["banner1.png", "banner2.png"]);
const intervalId = ref(null);

const startImageSlider = () => {
  intervalId.value = setInterval(() => {
    const currentIndex = images.value.indexOf(selectedImage.value);
    const nextIndex = (currentIndex + 1) % images.value.length;
    selectedImage.value = images.value[nextIndex];
  }, 5000);
};
const stopImageSlider = () => {
  clearInterval(intervalId.value);
};

onMounted(() => {
  startImageSlider();
});
onBeforeUnmount(() => {
  stopImageSlider();
});
</script>

<template>
  <div class="flex w-screen h-screen">
    <!-- Left Section -->
    <div class="w-2/5 relative">
      <img
        :src="`/src/assets/${selectedImage}`"
        class="w-full h-full object-cover"
        alt="banner image"
      />
      <div class="absolute inset-0 z-20">
        <div
          class="flex flex-col justify-end items-center h-full w-full pb-20 text-white"
        >
          <div class="text-xl font-semibold">No Hazzles</div>
          <div class="w-2/3 text-center my-4 text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </div>
          <div class="flex flex-row items-center justify-center space-x-2">
            <div
              v-for="image in images"
              :class="
                selectedImage === image
                  ? 'border-gray-400'
                  : 'border-transparent'
              "
              :key="image"
              class="size-5 flex items-center justify-center border rounded-full"
            >
              <button
                :class="
                  selectedImage === image ? 'bg-green-500' : 'bg-gray-200'
                "
                @click="selectedImage = image"
                class="size-2.5 rounded-full border"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="w-3/5 flex flex-col h-full py-6 px-8">
      <!-- Dynamic Pages -->
      <div class="flex-1 py-12 px-16">
        <slot />
      </div>

      <!-- Copyright (c) and Terms and Privacy Policy -->
      <div
        class="flex items-center justify-between text-gray-600 text-sm font-light"
      >
        <div>
          By siging up, you agree to our
          <a href="#" class="text-green-500 font-semibold">Terms</a> and
          <a href="#" class="text-green-500 font-semibold">Privacy Policy</a>
        </div>
        <div>© 2019 Tinylabs. All rights reserved.</div>
      </div>
    </div>
  </div>
</template>
