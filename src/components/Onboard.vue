<script>
import arrowIcon from "../assets/icons/arrow.png";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      arrowIcon,
    };
  },
};
</script>
<template>
  <div class="space-y-8 flex flex-col items-center justify-center text-center">
    <p class="text-3xl text-[#013C61] font-semibold">
      Great to have you onboard
    </p>
    <p class="text-[#6A7E8A] w-96">
      We just mailed you a confirmation link to josh.bakery@gmail.com. Complete
      registration by following the link.
    </p>

    <div class="pb-12 pt-4">
      <RouterLink to="/home">
        <button
          type="submit"
          class="flex items-center gap-2 bg-primary text-base font-semibold rounded-[4px] text-white py-2 px-12"
        >
          <p>Dashboard</p>
          <img :src="arrowIcon" alt="arrow icon" />
        </button>
      </RouterLink>
    </div>
  </div>
</template>
