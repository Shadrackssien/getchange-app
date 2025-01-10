import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AuthPage from "../pages/AuthPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import EmployeesPage from "../pages/EmployeesPage.vue";
import cardsPage from "../pages/CardsPage.vue";
import WalletHistory from "../pages/WalletHistory.vue";
import Settings from "../pages/Settings.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
import Password from "../pages/settings/Password.vue";
import StoreInformation from "../pages/settings/StoreInformation.vue";
import BillingInformation from "../pages/settings/BillingInformation.vue";
import InvoiceHistory from "../pages/settings/InvoiceHistory.vue";

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
      path: "/auth/register",
      name: "auth",
      component: AuthPage,
      meta: { layout: "AuthLayout" },
    },
    {
      path: "/auth/forgot-password",
      name: "password",
      component: ForgotPassword,
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
    {
      path: "/dashboard/wallet-history",
      name: "wallet",
      component: WalletHistory,
      meta: { layout: "ProfileLayout" },
    },
    {
      path: "/dashboard/settings/profile",
      name: "settings",
      component: Settings,
      meta: { layout: "ProfileLayout" },
    },
    {
      path: "/dashboard/settings/password",
      name: "password",
      component: Password,
      meta: { layout: "ProfileLayout" },
    },
    {
      path: "/dashboard/settings/store-information",
      name: "store",
      component: StoreInformation,
      meta: { layout: "ProfileLayout" },
    },
    {
      path: "/dashboard/settings/billing-information",
      name: "billing",
      component: BillingInformation,
      meta: { layout: "ProfileLayout" },
    },
    {
      path: "/dashboard/settings/invoice-history",
      name: "invoice",
      component: InvoiceHistory,
      meta: { layout: "ProfileLayout" },
    },
  ],
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("userData");

  if (to.path === "/" && isLoggedIn) {
    next("/dashboard");
  } else if (to.path === "/dashboard" && !isLoggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
