export class Account {
  username: string;
  id: string;

  constructor(json: any) {
    this.username = json.username;
    this.id = json.id;
  }
}
