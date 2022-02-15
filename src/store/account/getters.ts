import { AccountStateType } from "@/store/account/state";
import { Account } from "@/models";
import { ScreenState } from "@/types";

const getters = {
  account: (state: AccountStateType): Account => {
    return state.account;
  },
  isLoggedIn: (state: AccountStateType): boolean => state.isLoggedIn,
  status: (state: AccountStateType): ScreenState => state.status,
};
export default getters;
