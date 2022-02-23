import { Account } from "@/models";
import { ServiceError } from "@/services/api";
import { RequestState } from "@/types";
import { AccountStateType } from "./state";

const mutations = {
  REGISTER_REQUEST(state: AccountStateType): void {
    state.status = RequestState.IN_PROGRESS;
  },
  REGISTER_SUCCESS(state: AccountStateType, account: Account): void {
    state.isLoggedIn = true;
    state.account = account;
    state.status = RequestState.FINISHED_SUCCESSFULLY;
  },
  REGISTER_FAILURE(state: AccountStateType, error: ServiceError): void {
    state.isLoggedIn = false;
    state.status = RequestState.FAILED;
    state.error = error.error;
    state.validationFailures = error.validationFailures;
  },
};
export default mutations;
