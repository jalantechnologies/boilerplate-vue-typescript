import { Account, ValidationFailure } from "@/models";
import { ScreenState } from "@/types";

export type AccountStateType = {
  isLoggedIn: boolean;
  account: Account;
  status: ScreenState;
  error?: string;
  validationFailures?: ValidationFailure[];
};

const account = new Account({});

const state: AccountStateType = account
  ? { isLoggedIn: true, account, status: ScreenState.DEFAULT, error: '', validationFailures: [new ValidationFailure({})] }
  : {
    isLoggedIn: false,
    account: new Account({}),
    status: ScreenState.DEFAULT,
    error: '',
    validationFailures: [new ValidationFailure({})]
  };
export default state;
