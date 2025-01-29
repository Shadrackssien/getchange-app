import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import modules from "./store";
import { createStore } from "vuex";

const app = createApp(App);

const store = createStore({
  modules,
});

app.use(store);
app.use(router);

app.use(VueAxios, axios);

app.mount("#app");
