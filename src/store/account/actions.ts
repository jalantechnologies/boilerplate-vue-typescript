import { AccountService, AccountServiceImpl } from "@/services";
import { ServiceResponse } from "@/services/api";
import { CreateAccountParam } from "@/types";
import { REGISTER_FAILURE, REGISTER_SUCCESS } from "./types";
import { Account } from "@/models";
import { Commit } from "vuex";

export const register = async (
  { commit }: { commit: Commit },
  user: CreateAccountParam
): Promise<ServiceResponse<Account>> => {
  const accountService: AccountService = new AccountServiceImpl();
  const res = await accountService.create(user);
  if (res.hasData()) {
    commit(REGISTER_SUCCESS, res.data);
  } else if (res.hasError()) {
    commit(REGISTER_FAILURE);
  }
  return res;
};
