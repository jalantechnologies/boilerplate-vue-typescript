
import * as _ from 'lodash';
import { ServiceError } from './error.service';

/**
 * Every function in service class returns response
 * data is set if data is available otherwise error will be set
 * status contains the status of the operation
 */
export class ServiceResponse<T> {
  data?: T;
  error?: ServiceError;

  constructor(data?: T, error?: ServiceError) {
    this.data = data;
    this.error = error;
  }

  hasData(): boolean {
    return !_.isNil(this.data);
  }

  hasError(): boolean {
    return !_.isNil(this.error);
  }
}
