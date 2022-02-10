import { createApp } from "vue";
import App from "./app.vue";

import Argon from "./plugins/argon-kit";

createApp(App).use(Argon).mount("#app");
