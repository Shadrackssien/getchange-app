<script>
import getchange from "../assets/icons/getchange.png";
import arrowdown from "../assets/icons/arrow-down.png";
import logoutIcon from "../assets/icons/log-out.png";
import settings from "../assets/icons/settings.png";
import timeIcon from "../assets/icons/time.png";
export default {
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
</template>
