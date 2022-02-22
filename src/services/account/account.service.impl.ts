import { AxiosRequestConfig } from "axios";
import { Account } from "@/models/account.model";
import { APIServiceImpl, ServiceResponse } from "../api";
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
      const account = new Account(res);
      return new ServiceResponse<Account>(account);
    } catch (e) {
      // Todo: Adding logger.
      const validationFailures: ValidationFailure[] = [];
      let error = '';
      if (e.response.status == HTTP_STATUS_CODE.BAD_REQUEST || e.response.status == HTTP_STATUS_CODE.CONFLICT_REQUEST) {
        e.response?.data?.failures.forEach((element: any) =>
          validationFailures.push(new ValidationFailure(element))
        );
      } else {
        error =
          e.response?.data?.message || e.message || e.response?.status;
      }
      return new ServiceResponse<Account>(undefined, error, validationFailures);
    }
  }
}
