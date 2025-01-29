<script setup>
import officeIcon from "../assets/icons/office.png";
import mapIcon from "../assets/icons/map.png";
import phoneIcon from "../assets/icons/phone.png";
</script>
<template>
  <div class="space-y-6 text-secondary">
    <div class="space-y-1">
      <p>Busines Name</p>
      <div class="relative">
        <input
          class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
          type="text"
        />
        <img
          class="absolute z-20 top-1 right-2 bb-white"
          :src="officeIcon"
          alt="user icon"
        />
      </div>
    </div>

    <div>
      <p class="space-y-1">Business Address</p>
      <div class="relative">
        <input
          class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
          type="text"
        />
        <img
          class="absolute z-20 top-1 right-2 bb-white"
          :src="mapIcon"
          alt="user icon"
        />
      </div>
    </div>

    <div>
      <p class="space-y-1">Phone Number</p>
      <div class="relative">
        <input
          class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
          type="password"
        />
        <img
          class="absolute z-20 top-1 right-2 bb-white"
          :src="phoneIcon"
          alt="user icon"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <button
        type="submit"
        class="mt-8 mb-4 bg-primary text-base font-semibold rounded-[4px] text-white py-2 px-16"
      >
        Finish
      </button>
    </div>
  </div>
</template>
