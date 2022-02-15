import { createStore } from "vuex";
import account from "./account";

export const store = createStore({
  modules: {
    account,
  },
});
