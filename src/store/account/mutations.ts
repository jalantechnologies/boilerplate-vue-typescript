import { Account } from "@/models";
import { ScreenState } from "@/types";
import { AccountStateType } from "./state";

const mutations = {
  REGISTER_REQUEST(state: AccountStateType) {
    state.status = ScreenState.LOADING;
  },
  REGISTER_SUCCESS(state: AccountStateType, account: Account) {
    state.isLoggedIn = true;
    state.account = account;
    state.status = ScreenState.LOADED;
  },
  REGISTER_FAILURE(state: AccountStateType) {
    state.isLoggedIn = false;
    state.status = ScreenState.ERROR;
  },
};
export default mutations;
