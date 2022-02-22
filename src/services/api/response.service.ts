import { ValidationFailure } from '@/models';
import * as _ from 'lodash';

/**
 * Every function in service class returns response
 * data is set if data is available otherwise error will be set
 * status contains the status of the operation
 */
export class ServiceResponse<T> {
  data?: T;
  validationFailures?: ValidationFailure[];
  error?: string;

  constructor(data?: T, error?: string, validationFailures?: ValidationFailure[]) {
    this.data = data;
    this.error = error;
    this.validationFailures = validationFailures;
  }

  hasData(): boolean {
    return !_.isNil(this.data);
  }

  hasError(): boolean {
    return !_.isNil(this.error || this.validationFailures);
  }
}
