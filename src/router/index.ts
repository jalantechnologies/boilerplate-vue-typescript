import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/index.vue";
import SignUp from "../views/sign-up/index.vue";
import { Routes } from "./routes";

export const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.HOME,
    name: "Home",
    component: Home,
  },
  {
    path: Routes.SIGN_UP,
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
