import { Account } from "@/models/account.model";
import { APIServiceImpl, ServiceError, ServiceResponse } from "../api";
import { AccountService } from "./account.service";
import { CreateAccountParam } from "@/types";

export class AccountServiceImpl
  extends APIServiceImpl
  implements AccountService {
  static readonly CREATE = "/accounts";

  async create(payload: CreateAccountParam): Promise<ServiceResponse<Account>> {
    try {
      const { data: res } = await this.post(AccountServiceImpl.CREATE, payload);
      const account = new Account(res);
      return new ServiceResponse<Account>(account);
    } catch (e) {
      // Todo: Adding logger.
      const error = new ServiceError(e);
      return new ServiceResponse<Account>(undefined, error);
    }
  }
}
