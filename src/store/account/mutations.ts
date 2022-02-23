import { Account, ValidationFailure } from "@/models";
import { ServiceError } from "@/services/api";
import { ScreenState } from "@/types";
import { AccountStateType } from "./state";

const mutations = {
  REGISTER_REQUEST(state: AccountStateType): void {
    state.status = ScreenState.LOADING;
  },
  REGISTER_SUCCESS(state: AccountStateType, account: Account): void {
    state.isLoggedIn = true;
    state.account = account;
    state.status = ScreenState.LOADED;
  },
  REGISTER_FAILURE(state: AccountStateType, error: ServiceError): void {
    state.isLoggedIn = false;
    state.status = ScreenState.ERROR;
    state.error = error.error;
    state.validationFailures = error.validationFailures;
  },
};
export default mutations;
