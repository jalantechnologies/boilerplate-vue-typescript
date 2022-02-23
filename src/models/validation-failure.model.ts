import { LooseObject } from "@/types";

/** 
 * This is generic model, that can used to record the failure reponses in api service. 
 */
export class ValidationFailure {
  field: string;
  message: string;

  constructor(json: LooseObject) {
    this.field = json.field;
    this.message = json.message;
  }
}
