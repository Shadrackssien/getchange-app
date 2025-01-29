<!-- <script>
import getchange from "../assets/icons/getchange.png";
import arrowdown from "../assets/icons/arrow-down.png";
import logoutIcon from "../assets/icons/log-out.png";
import settings from "../assets/icons/settings.png";
import timeIcon from "../assets/icons/time.png";
import { CartEmptyIcon } from "../components/icons/index.js";

import { mapState } from "vuex";

export default {
  components: {
    CartEmptyIcon,
  },
  data() {
    return {
      getchange,
      arrowdown,
      user: null,
      isDropdownVisible: false,
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
        { src: logoutIcon, label: "Logout", route: "/" },
      ],
    };
  },
  computed: {
    ...mapState("product", ["selectedProducts"]),
  },
  created() {
    const userData = localStorage.getItem("userData");
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    logout() {
      localStorage.removeItem("userData");
      this.$router.push("/");
    },
  },
};
</script> -->

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import getchange from "../assets/icons/getchange.png";
import arrowdown from "../assets/icons/arrow-down.png";
import logoutIcon from "../assets/icons/log-out.png";
import settings from "../assets/icons/settings.png";
import timeIcon from "../assets/icons/time.png";
import { CartEmptyIcon } from "../components/icons/index.js";

const store = useStore();
const router = useRouter();

const user = ref({
  firstName: "",
  lastName: "",
  email: "",
});
const isDropdownVisible = ref(false);

// Dropdown items
const dropdowns = [
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
  {
    src: logoutIcon,
    label: "Logout",
    route: "/",
  },
];

const selectedProducts = computed(() => store.state.product.selectedProducts);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const logout = () => {
  localStorage.removeItem("userData");
  router.push("/");
};

onMounted(() => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    user.value = JSON.parse(userData);
  }
});
</script>

<template>
  <div
    class="flex justify-between w-full text-[#013C61] h-max bg-white border-b-2 border-b-[#6A7E8A1A] p-2"
  >
    <div
      class="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
    >
      <img :src="getchange" alt="logo" />
    </div>
    <div class="flex px-10 gap-4">
      <div
        @click="toggleDropdown"
        class="cursor-pointer flex items-center space-x-2"
      >
        <div class="size-7 bg-[#6A7E8A] rounded-full"></div>
        <div class="flex items-center space-x-2">
          <p>Hi, {{ user.username }}</p>
          <img :src="arrowdown" alt="arrow icon" />
        </div>
      </div>
      <!-- Cart -->
      <div>
        <router-link
          to="/dashboard/product/cart"
          class="relative flex items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <button class="w-10 h-10 mt-2 text-green-800">
            <cart-empty-icon />
          </button>
          <p
            v-if="selectedProducts.length"
            class="absolute inset-0 text-sm font-bold text-red-600 pl-5"
          >
            {{ selectedProducts.length }}
          </p>
        </router-link>
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
</template>
