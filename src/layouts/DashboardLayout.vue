<script>
import menu from "../assets/icons/menu.png";
import users from "../assets/icons/users.png";
import cards from "../assets/icons/cards.png";
import Delete from "../assets/icons/delete.png";
import logoutIcon from "../assets/icons/sign-out.png";

import GetchangeWidget from "../components/GetchangeWidget.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    GetchangeWidget,
    Navbar,
  },
  data() {
    return {
      menu,
      users,
      cards,
      Delete,
      logoutIcon,
      user: null,
    };
  },
  created() {
    const userData = localStorage.getItem("userData");
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("userData");
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <div class="flex justify-between w-full h-[91vh]">
      <!-- Left sidebar -->
      <div
        class="flex flex-col items-center justify-between w-[82px] border-r-2 border-r-[#6A7E8A1A] px-2 pt-20 pb-8"
      >
        <div class="flex flex-col space-y-16">
          <img class="w-6 h-5" :src="menu" alt="menu icon" />
          <img class="w-6 h-5" :src="users" alt="menu icon" />
          <img class="w-6 h-5" :src="cards" alt="menu icon" />
        </div>
        <button @click="logout" class="border-t-2 border-t-[#6A7E8A1A]">
          <div class="flex flex-col items-center space-x-2">
            <p class="text-center">Logout</p>
            <img class="w-6 h-6" :src="logoutIcon" alt="logout icon" />
          </div>
        </button>
      </div>

      <!-- MainPage -->
      <div class="w-full flex flex-col bg-slate-50 h-full px-16 py-12">
        <div class="flex-1">
          <slot />
        </div>
      </div>

      <!-- Right sidebar -->
      <div class="w-[395px] shadow-lg shadow-[#EAEEE9]">
        <!-- getchange widget -->
        <GetchangeWidget />
      </div>
    </div>
  </div>
</template>
