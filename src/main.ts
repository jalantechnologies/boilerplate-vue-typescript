import { createApp } from "vue";
import App from "./app.vue";
import { store } from "./store";
import router from "./router";

createApp(App).use(router).use(store).mount("#app");
