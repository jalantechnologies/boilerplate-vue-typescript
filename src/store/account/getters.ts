import { AccountStateType } from "@/store/account/state";
import { Account } from "@/models";

const getters = {
  account: (state: AccountStateType): Account => {
    return state.account;
  },
  isLoggedIn: (state: AccountStateType): boolean => state.isLoggedIn,
};
export default getters;
