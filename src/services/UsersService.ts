import { Database } from "sqlite";
import bcrypt from "bcrypt";

import { BaseService } from "~/framework/BaseService";
import { User } from "~/models/User";
import { SALT_ROUNDS } from "~/configuration";
import { INITIAL_PASSWORD } from "~/constants";

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

  #hashAndUpdate = async (id: number, login: string, newPassword: string) => {
    const hash = await bcrypt.hash(newPassword, SALT_ROUNDS);
    await this.#updateById(id, login, hash);
  };

  getTheOnlyUser = async () => {
    return await this.db.get<User>("SELECT * FROM users LIMIT 1");
  };

  authenticate = async (
    login: string,
    password: string
  ): Promise<AuthenticationStatus> => {
    const user = await this.getTheOnlyUser();

    if (user) {
      if (user.hashedPassword === INITIAL_PASSWORD) {
        return password === INITIAL_PASSWORD ? "initial" : "failure";
      }

      if (await bcrypt.compare(password, user.hashedPassword)) {
        return "success";
      }
    }

    return "failure";
  };

  update = async (login: string, password: string, newPassword: string) => {
    const user = await this.getTheOnlyUser();

    if (!user) {
      throw new Error("User is a lie");
    }

    if (
      user.hashedPassword === INITIAL_PASSWORD &&
      password === INITIAL_PASSWORD
    ) {
      await this.#hashAndUpdate(user.id, login, newPassword);
      return;
    }

    if (await bcrypt.compare(password, user.hashedPassword)) {
      await this.#hashAndUpdate(user.id, login, newPassword);
      return;
    }

    throw new Error("Hold on, the password is wrong!");
  };
}
