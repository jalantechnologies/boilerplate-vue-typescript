import { AxiosRequestConfig } from "axios";
import { Account } from "@/models/account.model";
import { APIServiceImpl, ServiceError, ServiceResponse } from "../api";
import { AccountService } from "./account.service";
import { HTTP_STATUS_CODE, User } from "@/types";
import { ValidationFailure } from "@/models/validation-failure.model";

export class AccountServiceImpl
  extends APIServiceImpl
  implements AccountService {
  static readonly CREATE = "/accounts";

  constructor() {
    super();
    this.service.interceptors.request.use(
      async (request): Promise<AxiosRequestConfig> => {
        return request;
      }
    );
  }

  async create(payload: User): Promise<ServiceResponse<Account>> {
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
