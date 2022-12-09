export class User {
  readonly id: number;
  readonly login: string;
  readonly hashedPassword: string;

  constructor(id: number, login: string, hashedPassword: string) {
    this.id = id;
    this.login = login;
    this.hashedPassword = hashedPassword;
  }

  get isPasswordNeedsToBeChanged() {
    return this.hashedPassword === "to_be_changed";
  }
}
