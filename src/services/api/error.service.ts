import { ValidationFailure } from '@/models';
import { HTTP_STATUS_CODE, LooseObject } from '@/types';

export class ServiceError {
  error: string;
  validationFailures: ValidationFailure[];
  httpErrorCode: HTTP_STATUS_CODE;

  constructor(error: LooseObject) {
    this.validationFailures = [];
    // Todo: Handle network error
    if (error.response.status == HTTP_STATUS_CODE.BAD_REQUEST || error.response.status == HTTP_STATUS_CODE.CONFLICT_REQUEST) {
      error.response?.data?.failures.forEach((element: LooseObject) => {
        this.validationFailures.push(new ValidationFailure(element))
      }
      );
    }

    this.error = error.response?.data?.message || error.message || error.response?.status;
    this.httpErrorCode = error.response.status;
  }
}
