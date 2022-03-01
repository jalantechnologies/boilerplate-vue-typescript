import { Account } from "@/models";
import { AccountStateType } from "./state";

const mutations = {
  REGISTER_SUCCESS(state: AccountStateType, account: Account): void {
    state.isLoggedIn = true;
    state.account = account;
  },
  REGISTER_FAILURE(state: AccountStateType): void {
    state.isLoggedIn = false;
    state.account = new Account({})
  },
};
export default mutations;
