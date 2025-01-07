<script>
import { RouterView } from "vue-router";
import AuthLayout from "../src/layouts/AuthLayout.vue";

export default {
  components: {
    AuthLayout,
    RouterView,
  },
};
</script>

<template>
  <auth-layout>
    <router-view />
  </auth-layout>
</template>
