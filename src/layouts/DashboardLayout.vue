<script>
import menu from "../assets/icons/menu.svg";
import users from "../assets/icons/users.svg";
import cards from "../assets/icons/cards.svg";
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
      icons: [
        { name: "menu", src: menu, route: "/dashboard" },
        { name: "users", src: users, route: "/dashboard/employees" },
        { name: "cards", src: cards, route: "/dashboard/cards" },
      ],
      logoutIcon,
      user: null,
      showGetchangeWidget: true,
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

    updateWidgetVisibility(route) {
      if (route === "/dashboard/cards" || route === "/dashboard/employees") {
        this.showGetchangeWidget = false;
      } else {
        this.showGetchangeWidget = true;
      }
    },
  },
  computed: {
    activeRoute() {
      return this.$route.path;
    },
  },
  watch: {
    "$route.path"(newRoute) {
      this.updateWidgetVisibility(newRoute);
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
        class="flex flex-col justify-between w-[82px] border-r-2 border-r-[#6A7E8A1A] pt-20 pb-8"
      >
        <div class="flex flex-col space-y-12">
          <div
            v-for="icon in icons"
            :key="icon.name"
            :class="{
              'border-l-4 border-l-[#2BDA53]': activeRoute === icon.route,
              'border-l-4 border-l-transparent': activeRoute !== icon.route,
            }"
            class="h-12 flex items-center px-4"
          >
            <router-link :to="icon.route">
              <img
                :class="{
                  'bg-green-100': activeRoute === icon.route,
                  'hover:bg-gray-100 hover:scale-110 transition-all duration-300 ease-in-out':
                    activeRoute !== icon.route,
                }"
                class="w-6 h-5"
                :src="icon.src"
                :alt="`${icon.name} icon`"
              />
            </router-link>
          </div>
        </div>
        <button
          @click="logout"
          class="border-t-2 border-t-[#6A7E8A1A] px-2 hover:bg-gray-100 hover:scale-110 transition-all duration-300 ease-in-out"
        >
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
      <div
        v-if="showGetchangeWidget"
        class="w-[395px] shadow-lg shadow-[#EAEEE9]"
      >
        <!-- getchange widget -->
        <GetchangeWidget />
      </div>
    </div>
  </div>
</template>
