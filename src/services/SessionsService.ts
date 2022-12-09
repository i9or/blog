import { Database } from "sqlite";
import { nanoid } from "nanoid";

import { BaseService } from "../framework/BaseService";
import { Session } from "../models/Session";
import { oneDayFromNowInUnix } from "../utilities/dates";

export class SessionsService extends BaseService {
  constructor(db: Database) {
    super(db);
  }

  createByUserId = async (userId: number) => {
    const token = nanoid();
    const expiresAt = oneDayFromNowInUnix();

    await this.db.run(
      `INSERT INTO sessions (userId, expiresAt, token)
         VALUES (?, ?, ?)`,
      [userId, expiresAt, token]
    );

    return new Session({ userId, expiresAt, token });
  };

  removeByToken = async (token: string) => {
    await this.db.run("DELETE FROM sessions WHERE token = ?", token);
  };

  getByToken = async (token: string) => {
    return await this.db.get<Session>(
      "SELECT * FROM sessions WHERE token = ?",
      token
    );
  };

  refreshByToken = async (token: string) => {
    const newExpiresAt = oneDayFromNowInUnix();

    await this.db.run("UPDATE sessions SET expiresAt = ? WHERE token = ?", [
      newExpiresAt,
      token,
    ]);

    return newExpiresAt;
  };
}
