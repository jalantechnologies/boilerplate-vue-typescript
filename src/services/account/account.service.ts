import { Account } from "@/models";
import { CreateAccountParam } from "@/types";
import { ServiceResponse } from "../api";

export interface AccountService {
  create: (payload: CreateAccountParam) => Promise<ServiceResponse<Account>>;
}
