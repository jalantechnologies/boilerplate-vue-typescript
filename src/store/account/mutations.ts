import { Account, ValidationFailure } from "@/models";
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
  REGISTER_FAILURE(state: AccountStateType, { error, validationFailures }: { error?: string, validationFailures?: ValidationFailure[] }): void {
    state.isLoggedIn = false;
    state.status = ScreenState.ERROR;
    state.error = error;
    state.validationFailures = validationFailures?.map((Element: ValidationFailure) => new ValidationFailure(Element));
  },
};
export default mutations;
