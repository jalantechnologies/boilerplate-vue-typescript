/** 
 * This is generic model, that can used to record the failure reponses in api service. 
 */
export class ValidationFailure {
  field: string;
  message: string;

  constructor(json: any) {
    this.field = json.field;
    this.message = json.message;
  }
}
