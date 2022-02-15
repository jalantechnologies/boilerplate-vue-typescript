import { Account } from "@/models";
import { ScreenState } from "@/types";

export type AccountStateType = {
  isLoggedIn: boolean;
  account: Account;
  status: ScreenState;
};

const account = new Account({});

const state: AccountStateType = account
  ? { isLoggedIn: true, account, status: ScreenState.DEFAULT }
  : {
      isLoggedIn: false,
      account: new Account({}),
      status: ScreenState.DEFAULT,
    };

export default state;
