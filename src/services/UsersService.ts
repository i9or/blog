import { Database } from "sqlite";
import bcrypt from "bcrypt";

import { BaseService } from "../framework/BaseService";
import { User } from "../models/User";
import { di } from "../di";

type AuthenticationStatus = "success" | "failure" | "initial";

export class UsersService extends BaseService {
  constructor(db: Database) {
    super(db);
  }

  #getTheOnlyUser = async () => {
    return await this.db.get<User>("SELECT * FROM users LIMIT 1");
  };

  authenticate = async (
    login: string,
    password: string
  ): Promise<AuthenticationStatus> => {
    di.logger.debug({ login, password });

    const user = await this.#getTheOnlyUser();
    di.logger.debug(`${JSON.stringify(user)}`);

    if (user) {
      if (user.hashedPassword === "to_be_changed") {
        return password === user.hashedPassword ? "initial" : "failure";
      } else {
        if (await bcrypt.compare(password, user.hashedPassword)) {
          throw new Error("Not Implemented");
        }
      }
    }

    return "failure";
  };

  update = async (login: string, password: string) => {
    di.logger.debug({ login, password });
  };
}
