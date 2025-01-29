<script setup>
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import AuthLayout from "./layouts/AuthLayout.vue";
import DashboardLayout from "./layouts/DashboardLayout.vue";
import ProfileLayout from "./layouts/ProfileLayout.vue";

const layouts = { AuthLayout, ProfileLayout, DashboardLayout };

const route = useRoute();
const layout = computed(() => layouts[route.meta.layout || "AuthLayout"]);
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
