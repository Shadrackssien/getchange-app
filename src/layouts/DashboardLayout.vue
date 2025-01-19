<script>
// import menu from "../assets/icons/menu.svg";
// import users from "../assets/icons/users.svg";
// import cards from "../assets/icons/cards.svg";
import logoutIcon from "../assets/icons/sign-out.png";

import GetchangeWidget from "../components/GetchangeWidget.vue";
import { HomeIcon, ContactIcon, CardIcon } from "../components/icons/index.js";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    GetchangeWidget,
    Navbar,
    HomeIcon,
    ContactIcon,
    CardIcon,
  },
  data() {
    return {
      icons: [
        { name: "home", component: HomeIcon, route: "/dashboard" },
        {
          name: "employees",
          component: ContactIcon,
          route: "/dashboard/employees",
        },
        { name: "cards", component: CardIcon, route: "/dashboard/cards" },
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
    goToRoute(route) {
      this.$router.push(route);
    },

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
  <div class="">
    <!-- Navbar -->
    <div class="fixed z-50 top-0 w-full">
      <Navbar />
    </div>

    <div class="flex justify-between w-full h-full">
      <!-- Left sidebar -->
      <div
        class="flex bg-white fixed flex-col justify-between w-[82px] h-full border-r-2 border-r-[#6A7E8A1A] pt-20 pb-4"
      >
        <div class="flex flex-col space-y-12">
          <div
            v-for="icon in icons"
            :key="icon.name"
            :class="{
              ' border-l-[#2BDA53]': activeRoute === icon.route,
              ' border-l-transparent': activeRoute !== icon.route,
            }"
            class="h-12 flex items-center px-4 border-l-[5px]"
          >
            <button
              @click="goToRoute(icon.route)"
              :class="{ 'text-[#2BDA53]': activeRoute === icon.route }"
              class="w-5 h-5"
            >
              <component :is="icon.component" />
            </button>
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
      <div
        class="w-full flex flex-col items-center justify-center h-full px-12 mt-16 ml-12"
      >
        <slot />
      </div>

      <!-- Right sidebar -->
      <div
        v-if="$route.path === '/dashboard'"
        class="fixed right-0 h-full shadow-lg mt-16 shadow-[#EAEEE9]"
      >
        <!-- getchange widget -->
        <GetchangeWidget />
      </div>
    </div>
  </div>
</template>
