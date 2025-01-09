<script>
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import AuthLayout from "../src/layouts/AuthLayout.vue";
import DashboardLayout from "../src/layouts/DashboardLayout.vue";
import { computed } from "vue";

export default {
  components: {
    AuthLayout,
    RouterView,
    DashboardLayout,
  },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "AuthLayout");

    return {
      layout,
    };
  },
};
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
