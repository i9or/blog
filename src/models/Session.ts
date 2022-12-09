import { isExpired, unixSecondsAsDate } from "../utilities/dates";

type SessionConstructor = {
  id?: number;
  userId: number;
  expiresAt: number;
  token: string;
};

export class Session {
  readonly id: number;
  readonly userId: number;
  readonly expiresAt: number;
  readonly token: string;

  constructor({ id = -1, userId, expiresAt, token }: SessionConstructor) {
    this.id = id;
    this.userId = userId;
    this.expiresAt = expiresAt;
    this.token = token;
  }

  get expiresAtAsDate() {
    return unixSecondsAsDate(this.expiresAt);
  }

  get isExpired() {
    return isExpired(this.expiresAt);
  }
}
