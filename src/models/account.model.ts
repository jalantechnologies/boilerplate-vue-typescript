import { LooseObject } from "@/types";

export class Account {
  id: string;
  username: string;

  constructor(json: LooseObject) {
    this.id = json.id;
    this.username = json.username;
  }
}
