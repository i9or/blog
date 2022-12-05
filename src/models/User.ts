export class User {
  readonly id: number;
  login: string;
  readonly hashedPassword: string;

  constructor(id: number, login: string, hashedPassword: string) {
    this.id = id;
    this.login = login;
    this.hashedPassword = hashedPassword;
  }
}