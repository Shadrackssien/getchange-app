import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AuthPage from "../pages/AuthPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import EmployeesPage from "../pages/EmployeesPage.vue";
import cardsPage from "../pages/CardsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
      meta: { layout: "AuthLayout" },
    },
    {
      path: "/register",
      name: "auth",
      component: AuthPage,
      meta: { layout: "AuthLayout" },
    },
    {
      path: "/dashboard",
      name: "HomePage",
      component: HomePage,
      meta: { layout: "DashboardLayout" },
    },
    {
      path: "/dashboard/employees",
      name: "EmployeesPage",
      component: EmployeesPage,
      meta: { layout: "DashboardLayout" },
    },
    {
      path: "/dashboard/cards",
      name: "cards",
      component: cardsPage,
      meta: { layout: "DashboardLayout" },
    },
  ],
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("userData"); // Check if user data exists in local storage

  if (to.path === "/" && isLoggedIn) {
    next("/dashboard");
  } else if (to.path === "/dashboard" && !isLoggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
