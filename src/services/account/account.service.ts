import { Account } from "@/models";
import { LoginUserDetail, User } from "@/types";
import { ServiceResponse } from "../api";

export interface AccountService {
  create: (payload: User) => Promise<ServiceResponse<Account>>;
  login: (payload: LoginUserDetail) => Promise<ServiceResponse<Account>>;
}
