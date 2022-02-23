import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import { store } from "./store";

createApp(App).use(router).use(store).mount("#app");
