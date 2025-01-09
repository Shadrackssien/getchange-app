<script>
import getchange from "../assets/icons/getchange.png";
import arrowdown from "../assets/icons/arrow-down.png";
export default {
  data() {
    return {
      getchange,
      arrowdown,
      user: null,
    };
  },
  created() {
    const userData = localStorage.getItem("userData");
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
};
</script>
<template>
  <div
    class="flex justify-between w-full h-max bg-white border-b-2 border-b-[#6A7E8A1A] p-2"
  >
    <div>
      <img :src="getchange" alt="logo" />
    </div>
    <div class="flex items-center space-x-2 px-6">
      <div class="size-7 bg-[#6A7E8A] rounded-full"></div>
      <div class="flex items-center space-x-2">
        <p>Hi, {{ user.username }}</p>
        <img :src="arrowdown" alt="arrow icon" />
      </div>
    </div>
  </div>
</template>
