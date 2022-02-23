export class Account {
  id: string;
  username: string;

  constructor(json: any) {
    this.id = json.id;
    this.username = json.username;
  }
}
