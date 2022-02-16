import { AxiosRequestConfig } from "axios";
import { Account } from "@/models/account.model";
import { APIServiceImpl, ServiceResponse } from "../api";
import { AccountService } from "./account.service";
import { LoginUserDetail, User } from "@/types";

export class AccountServiceImpl
  extends APIServiceImpl
  implements AccountService
{
  static readonly CREATE = "/account";
  static readonly LOGIN = "/account/access_token";

  constructor() {
    super();
    this.service.interceptors.request.use(
      async (request): Promise<AxiosRequestConfig> => {
        // const auth = await AccountAuthDetails.get();
        // if (auth?.token) {
        //   request.headers.Authorization = `Bearer ${auth.token}`;
        // }
        return request;
      }
    );
  }

  async create(payload: User): Promise<ServiceResponse<Account>> {
    try {
      const { data: res } = await this.post(AccountServiceImpl.CREATE, payload);
      console.log(res);
      const account = new Account(res);
      return new ServiceResponse<Account>(account);
    } catch (e) {
      console.log(e);
      const error =
        e.response?.data?.message || e.message || e.response?.status;
      // Todo: Adding logger.
      return new ServiceResponse<Account>(undefined, error);
    }
  }

  async login(payload: LoginUserDetail): Promise<ServiceResponse<Account>> {
    try {
      const { data: res } = await this.post(AccountServiceImpl.LOGIN, payload);
      console.log(res);
      const account = new Account(res);
      return new ServiceResponse<Account>(account);
    } catch (e) {
      console.log(e);
      const error =
        e.response?.data?.message || e.message || e.response?.status;
      // Todo: Adding logger.
      return new ServiceResponse<Account>(undefined, error);
    }
  }
}
