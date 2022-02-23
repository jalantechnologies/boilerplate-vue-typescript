import { Account } from "@/models";

export type AccountStateType = {
  isLoggedIn: boolean;
  account: Account;
};

const account = new Account({});

const state: AccountStateType = account
  ? { isLoggedIn: true, account }
  : {
    isLoggedIn: false,
    account: new Account({}),
  };
export default state;
