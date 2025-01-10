<script>
import userIcon from "../assets/icons/user.png";
import atIcon from "../assets/icons/at.png";
import eyeIcon from "../assets/icons/eye.png";

import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      userIcon,
      atIcon,
      eyeIcon,
      formData: {
        username: "",
        password: "",
        passwordConfirm: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      if (
        !this.formData.username ||
        !this.formData.email ||
        !this.formData.password
      ) {
        this.errorMessage = "Please fill in all fields.";
        return;
      }
      this.errorMessage = "";

      localStorage.setItem("userData", JSON.stringify(this.formData));

      this.$router.push("/dashboard");
    },
  },
};
</script>
<template>
  <div>
    <div class="space-y-2">
      <p class="text-[#013C61] font-semibold text-3xl leading-10">Welcome</p>
      <p class="text-[#013C61]">
        Don't have an account?
        <router-link to="/auth/register">
          <span class="text-green-500 font-medium"> Sign up</span>
        </router-link>
      </p>
    </div>

    <div class="mt-12 px-10 py-6 shadow-xl shadow-[#EAEEE9]">
      <!-- Personal Form -->
      <div>
        <form @submit.prevent="handleLogin">
          <div class="space-y-6 text-secondary">
            <div class="space-y-1">
              <label for="username">Username</label>
              <div class="relative">
                <input
                  class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
                  type="text"
                  id="username"
                  v-model="formData.username"
                />
                <img
                  class="absolute z-20 top-1 right-2 bb-white"
                  :src="userIcon"
                  alt="user icon"
                />
              </div>
            </div>
            <div class="space-y-1">
              <label for="email">Email</label>
              <div class="relative">
                <input
                  class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
                  type="email"
                  id="email"
                  v-model="formData.email"
                />
                <img
                  class="absolute z-20 top-1 right-2 bb-white"
                  :src="atIcon"
                  alt="user icon"
                />
              </div>
            </div>
            <div>
              <label for="password" class="space-y-1">Password</label>
              <div class="relative">
                <input
                  class="w-full outline-none text-[#013C61] pr-8 text-lg font-normal border-b border-b-#E6E7EB"
                  type="password"
                  id="password"
                  v-model="formData.password"
                />
                <img
                  class="absolute z-20 top-1 right-2 bb-white"
                  :src="eyeIcon"
                  alt="user icon"
                />
              </div>
            </div>
          </div>
          <div
            v-if="errorMessage"
            class="text-red-500 italic font-extralight mt-2 text-center text-base"
          >
            {{ errorMessage }}
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="mt-12 bg-primary text-base font-semibold rounded-[4px] text-white py-2 px-12"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
