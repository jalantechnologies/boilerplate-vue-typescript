import { Account } from "@/models";
import { ScreenState } from "@/types";
import { AccountStateType } from "./state";

const mutations = {
  LOGIN_REQUEST(state: AccountStateType) {
    state.status = ScreenState.LOADING;
  },
  LOGIN_SUCCESS(state: AccountStateType, account: Account) {
    state.isLoggedIn = true;
    state.account = account;
    state.status = ScreenState.LOADED;
  },
  LOGIN_FAILURE(state: AccountStateType) {
    state.isLoggedIn = false;
    state.status = ScreenState.ERROR;
  },
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
