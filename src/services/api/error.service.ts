import { ValidationFailure } from '@/models';
import { HTTP_STATUS_CODE } from '@/types';
import * as _ from 'lodash';

export class ServiceError {
  error?: string;
  validationFailures?: ValidationFailure[];
  httpErrorCode?: HTTP_STATUS_CODE;

  constructor(error?: any) {
    if (error.response.status == HTTP_STATUS_CODE.BAD_REQUEST || error.response.status == HTTP_STATUS_CODE.CONFLICT_REQUEST) {
      error.response?.data?.failures.forEach((element: any) =>
        this.validationFailures?.push(new ValidationFailure(element))
      );
    } else {
      this.error =
        error.response?.data?.message || error.message || error.response?.status;
    }
    this.httpErrorCode = error.response.status;
  }
}
