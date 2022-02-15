import { Account } from "@/models";
import { User } from "@/types";
import { ServiceResponse } from "../api";

export interface AccountService {
  create: (payload: User) => Promise<ServiceResponse<Account>>;
}
