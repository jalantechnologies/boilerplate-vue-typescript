import { AccountStateType } from "@/store/account/state";
import { Account, ValidationFailure } from "@/models";
import { RequestState } from "@/types";

const getters = {
  account: (state: AccountStateType): Account => {
    return state.account;
  },
  isLoggedIn: (state: AccountStateType): boolean => state.isLoggedIn,
  status: (state: AccountStateType): RequestState => state.status,
  error: (state: AccountStateType): string | undefined => state.error,
  validationFailures: (state: AccountStateType): ValidationFailure[] | undefined => state.validationFailures
};
export default getters;
