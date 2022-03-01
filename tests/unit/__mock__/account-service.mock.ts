import { ServiceError, ServiceResponse } from "../../../src/services/api";
import { CreateAccountParam } from "@/types";
import { Account } from "../../../src/models"

export const mockCreate = (user: CreateAccountParam): Promise<ServiceResponse<Account>> => {
  return new Promise(function (resolve) {
    if (user.confirmPassword == "asdasd" && user.password == "asdasd" && user.username == "test@test.com") {
      const error: ServiceError = new ServiceError({
        response: {
          data:
          {
            "message": "Account cannot be created, please check the params validity.",
            "code": "ACCOUNT_ERR_04",
            "failures": [{ "field": "password", "message": "Add another word or two. Uncommon words are better." }],
            "httpStatusCode": 400
          },
          status: 400,
          statusText: "Bad Request",
        }
      })
      resolve(new ServiceResponse<Account>(undefined, error));
    }
    if (user.username == 'test@test.com' && user.password == 'asdkdk@12394!!md' && user.confirmPassword == 'asdkdk@12394!!md') {
      resolve(new ServiceResponse<Account>({ username: "test@test.com", id: '1' }));
    }
  });
}
