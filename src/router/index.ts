import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SignUp from "../views/sign-up/index.vue";
import Login from "../views/login/index.vue";
import { Routes } from "./routes";

export const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.SIGNUP,
    name: "Signup",
    component: SignUp,
  },
  {
    path: Routes.LOGIN,
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
