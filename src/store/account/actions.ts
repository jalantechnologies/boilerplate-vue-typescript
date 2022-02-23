import { AccountService, AccountServiceImpl } from "@/services";
import { ServiceResponse } from "@/services/api";
import { User } from "@/types";
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types";
import { Account } from "@/models";
import { Commit } from "vuex";

export const register = async (
  { commit }: { commit: Commit },
  user: User
): Promise<ServiceResponse<Account>> => {
  commit(REGISTER_REQUEST, user);
  const accountService: AccountService = new AccountServiceImpl();
  const res = await accountService.create(user);
  if (res.hasData()) {
    // Todo: route to login page router.push("/login");
    commit(REGISTER_SUCCESS, res.data);
  } else if (res.hasError()) {
    commit(REGISTER_FAILURE, res.error);
  }
  return res;
};
