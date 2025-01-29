<script setup>
import BusinessForm from "./BusinessForm.vue";
import Onboard from "./Onboard.vue";

import userIcon from "../assets/icons/user.png";
import atIcon from "../assets/icons/at.png";
import eyeIcon from "../assets/icons/eye.png";

import { ref } from "vue";

const currentStep = ref(1);

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};
</script>
<template>
  <div
    :class="{
      hidden: currentStep === 3,
    }"
    class="space-y-2"
  >
    <p class="text-[#013C61] font-semibold text-3xl leading-10">
      Create your free account
    </p>
    <p class="text-[#013C61]">
      Already registered?
      <router-link to="/">
        <span class="text-green-500 font-medium"> Sign in</span>
      </router-link>
    </p>
  </div>
  <div class="mt-12 px-10 py-6 shadow-xl shadow-[#EAEEE9]">
    <!-- Personal Form/First Step -->
    <div v-if="currentStep === 1">
      <form @submit.prevent="nextStep">
        <div class="space-y-6 text-secondary">
          <div class="flex space-x-8">
            <div class="w-1/2 space-y-1">
              <p>First Name</p>
              <div class="relative">
                <input
                  class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
                  type="text"
                />
                <img
                  class="absolute z-20 top-1 right-2 bb-white"
                  :src="userIcon"
                  alt="user icon"
                />
              </div>
            </div>
            <div class="w-1/2 space-y-1">
              <p>Last Name</p>
              <div class="relative">
                <input
                  class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
                  type="text"
                />
                <img
                  class="absolute z-20 top-1 right-2 bb-white"
                  :src="userIcon"
                  alt="user icon"
                />
              </div>
            </div>
          </div>
          <div class="space-y-1">
            <p>Email</p>
            <div class="relative">
              <input
                class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
                type="email"
              />
              <img
                class="absolute z-20 top-1 right-2 bb-white"
                :src="atIcon"
                alt="user icon"
              />
            </div>
          </div>
          <div>
            <p class="space-y-1">Password</p>
            <div class="relative">
              <input
                class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
                type="password"
              />
              <img
                class="absolute z-20 top-1 right-2 bb-white"
                :src="eyeIcon"
                alt="user icon"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="mt-12 bg-primary text-base font-semibold rounded-[4px] text-white py-2 px-12"
          >
            Continue
          </button>
        </div>
      </form>
    </div>

    <!-- Business Form/Step 2 -->
    <div v-if="currentStep === 2">
      <form @submit.prevent="nextStep">
        <BusinessForm />
      </form>
    </div>

    <!-- Onboard Message -->
    <div v-if="currentStep === 3">
      <form @submit.prevent="nextStep">
        <Onboard />
      </form>
    </div>
  </div>
</template>
