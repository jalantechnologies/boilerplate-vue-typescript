import { AccountService, AccountServiceImpl } from "@/services";
import { ServiceResponse } from "@/services/api";
import { LoginUserDetail, User } from "@/types";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./types";
import { Account } from "@/models";

export const register = async (
  { commit }: any,
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

export const login = async (
  { commit }: any,
  user: LoginUserDetail
): Promise<ServiceResponse<Account>> => {
  commit(LOGIN_REQUEST, user);
  const accountService: AccountService = new AccountServiceImpl();
  const res = await accountService.login(user);
  if (res.hasData()) {
    // Todo: route to login page router.push("/login");
    commit(LOGIN_SUCCESS, res.data);
  } else if (res.hasError()) {
    commit(LOGIN_FAILURE, res.error);
  }
  return res;
};
