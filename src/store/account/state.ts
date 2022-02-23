import { Account, ValidationFailure } from "@/models";
import { RequestState } from "@/types";

export type AccountStateType = {
  isLoggedIn: boolean;
  account: Account;
  status: RequestState;
  error?: string;
  validationFailures?: ValidationFailure[];
};

const account = new Account({});

const state: AccountStateType = account
  ? { isLoggedIn: true, account, status: RequestState.DEFAULT, error: '', validationFailures: [new ValidationFailure({})] }
  : {
    isLoggedIn: false,
    account: new Account({}),
    status: RequestState.DEFAULT,
    error: '',
    validationFailures: [new ValidationFailure({})]
  };
export default state;
