export class Account {
  email: string;
  firstName: string;
  id: string;
  lastName: string;

  constructor(json: any) {
    this.email = json.email;
    this.firstName = json.firstName;
    this.id = json.id;
    this.lastName = json.lastName;
  }
}
