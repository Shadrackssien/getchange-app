<!-- <script>
import menu from "../assets/icons/menu.svg";
import users from "../assets/icons/users.svg";
import cards from "../assets/icons/cards.svg";
import logoutIcon from "../assets/icons/sign-out.png";

import getchange from "../assets/icons/getchange.png";
import arrowdown from "../assets/icons/arrow-down.png";
import logoutIcon2 from "../assets/icons/log-out.png";
import settings from "../assets/icons/settings.png";
import timeIcon from "../assets/icons/time.png";

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
      items: [
        {
          id: 1,
          title: "Profile",
          route: "/dashboard/settings/profile",
        },
        {
          id: 2,
          title: "Password",
          route: "/dashboard/settings/password",
        },
        {
          id: 3,
          title: "Store Information",
          route: "/dashboard/settings/store-information",
        },
        {
          id: 4,
          title: "Billing Information",
          route: "/dashboard/settings/billing-information",
        },
        {
          id: 5,
          title: "Invoice History",
          route: "/dashboard/settings/invoice-history",
        },
      ],
      dropdowns: [
        {
          src: timeIcon,
          label: "Wallet History",
          route: "/dashboard/wallet-history",
        },
        {
          src: settings,
          label: "Settings",
          route: "/dashboard/settings/profile",
        },
        { src: logoutIcon2, label: "Logout", route: "/" },
      ],
      logoutIcon,
      user: null,
      getchange,
      arrowdown,
      isDropdownVisible: false,
      showGetchangeWidget: true,
      showMainPage: true,
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
    updateMainPageVisibility(route) {
      if (route === "/dashboard/wallet-history") {
        this.showMainPage = false;
      } else {
        this.showMainPage = true;
      }
    },

    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
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
      this.updateMainPageVisibility(newRoute);
    },
  },
};
</script> -->

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

// Icon imports
import menu from "../assets/icons/menu.svg";
import users from "../assets/icons/users.svg";
import cards from "../assets/icons/cards.svg";
import logoutIcon from "../assets/icons/sign-out.png";
import getchange from "../assets/icons/getchange.png";
import arrowdown from "../assets/icons/arrow-down.png";
import logoutIcon2 from "../assets/icons/log-out.png";
import settings from "../assets/icons/settings.png";
import timeIcon from "../assets/icons/time.png";

const router = useRouter();
const route = useRoute();

// Reactive state
const user = ref({
  firstName: "",
  lastName: "",
  email: "",
});
const isDropdownVisible = ref(false);
const showMainPage = ref(true);

// Icons configuration
const icons = [
  { name: "menu", src: menu, route: "/dashboard" },
  { name: "users", src: users, route: "/dashboard/employees" },
  { name: "cards", src: cards, route: "/dashboard/cards" },
];

// Navigation items
const items = [
  { id: 1, title: "Profile", route: "/dashboard/settings/profile" },
  { id: 2, title: "Password", route: "/dashboard/settings/password" },
  {
    id: 3,
    title: "Store Information",
    route: "/dashboard/settings/store-information",
  },
  {
    id: 4,
    title: "Billing Information",
    route: "/dashboard/settings/billing-information",
  },
  {
    id: 5,
    title: "Invoice History",
    route: "/dashboard/settings/invoice-history",
  },
];

// Dropdown items
const dropdowns = [
  {
    src: timeIcon,
    label: "Wallet History",
    route: "/dashboard/wallet-history",
  },
  { src: settings, label: "Settings", route: "/dashboard/settings/profile" },
  { src: logoutIcon2, label: "Logout", route: "/" },
];

// Computed
const activeRoute = computed(() => route.path);

// Methods
const logout = () => {
  localStorage.removeItem("userData");
  router.push("/");
};

const updateMainPageVisibility = (route) => {
  if (route === "/dashboard/wallet-history") {
    showMainPage.value = false;
  } else {
    showMainPage.value = true;
  }
};

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

// Watch route changes
watch(
  () => route.path,
  (newRoute) => {
    updateMainPageVisibility(newRoute);
  }
);

// Lifecycle hook
onMounted(() => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    user.value = JSON.parse(userData);
  } else {
    router.push("/");
  }
});
</script>

<template>
  <div>
    <!-- Navbar -->
    <div>
      <div
        class="flex justify-between w-full text-[#013C61] h-max bg-white border-b-2 border-b-[#6A7E8A1A] p-2"
      >
        <div
          class="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <img :src="getchange" alt="logo" />
        </div>
        <div
          @click="toggleDropdown"
          class="cursor-pointer flex items-center space-x-2 px-10"
        >
          <div class="size-7 bg-[#6A7E8A] rounded-full"></div>
          <div class="flex items-center space-x-2">
            <p>Hi, {{ user.username }}</p>
            <img :src="arrowdown" alt="arrow icon" />
          </div>
        </div>

        <!-- Dropdown menu -->
        <div
          v-if="isDropdownVisible"
          class="absolute bg-white shadow-lg w-44 right-6 top-[60px] py-6 border border-gray-200"
        >
          <ul
            v-for="dropdown in dropdowns"
            :key="dropdown.label"
            class="space-y-2.5"
          >
            <li
              v-if="dropdown.label === 'Logout'"
              @click="logout"
              class="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 cursor-pointer"
            >
              <img :src="dropdown.src" alt="logout icon" />
              <p>{{ dropdown.label }}</p>
            </li>

            <router-link v-else :to="dropdown.route">
              <li
                class="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 cursor-pointer"
              >
                <img :src="dropdown.src" alt="time icon" />
                <p>{{ dropdown.label }}</p>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>

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
          <div class="mx-48 h-full bg-white">
            <div v-if="showMainPage" class="py-8 px-20">
              <ul
                class="flex text-[#013C61] gap-16 border-b-2 border-b-[#013C611A]"
              >
                <li v-for="item in items" :key="item.id">
                  <router-link :to="item.route">
                    <div
                      :class="{
                        'font-bold': activeRoute === item.route,
                        'font-normal hover:text-[#6A7E8A] hover:scale-110 transition-all duration-300 ease-in-out':
                          activeRoute !== item.route,
                      }"
                      class="flex flex-col cursor-pointer items-center"
                    >
                      <p>{{ item.title }}</p>
                      <p
                        :class="{
                          'border-b-4 border-b-[#2BDA53] w-8 mx-2':
                            activeRoute === item.route,
                        }"
                        class=""
                      ></p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Profile Pages -->
            <div>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
