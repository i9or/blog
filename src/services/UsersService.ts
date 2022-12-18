import { Database } from "sqlite";
import bcrypt from "bcrypt";

import { BaseService } from "~/framework/BaseService";
import { User } from "~/models/User";
import { di } from "~/di";
import { SALT_ROUNDS } from "~/configuration";

type AuthenticationStatus = "success" | "failure" | "initial";

export class UsersService extends BaseService {
  constructor(db: Database) {
    super(db);
  }

  #updateById = async (id: number, login: string, hashedPassword: string) => {
    await this.db.run(
      `UPDATE users SET login = ?, hashedPassword = ?
           WHERE id = ? 
           AND EXISTS (SELECT 1 FROM users WHERE id = ?)`,
      [login, hashedPassword, id, id]
    );
  };

  getTheOnlyUser = async () => {
    return await this.db.get<User>("SELECT * FROM users LIMIT 1");
  };

  authenticate = async (
    login: string,
    password: string
  ): Promise<AuthenticationStatus> => {
    di.logger.debug({ login, password });

    const user = await this.getTheOnlyUser();
    di.logger.debug(`${JSON.stringify(user)}`);

    if (user) {
      if (user.hashedPassword === "to_be_changed") {
        return password === user.hashedPassword ? "initial" : "failure";
      }

      if (await bcrypt.compare(password, user.hashedPassword)) {
        return "success";
      }
    }

    return "failure";
  };

  update = async (login: string, password: string) => {
    di.logger.debug({ login, password });

    const user = await this.getTheOnlyUser();

    if (user) {
      const hash = await bcrypt.hash(password, SALT_ROUNDS);
      await this.#updateById(user.id, login, hash);
      return;
    }

    throw new Error("User is a lie");
  };
}
