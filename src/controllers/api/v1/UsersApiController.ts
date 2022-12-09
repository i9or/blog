import { NextFunction, Request, Response } from "@tinyhttp/app";

import { BaseController } from "../../../framework/BaseController";
import { di } from "../../../di";
import { UserDTO, userDtoSchema } from "../../../dto/UserDTO";
import dayjs from "dayjs";
import { restrict } from "../utilities/restrict";
import { SESSION_TOKEN } from "../../../constants";

export class UsersApiController extends BaseController {
  constructor() {
    super();

    this.router.post("/break-in", this.login);
    this.router.get("/reinvigorate", restrict, this.refresh);
    this.router.delete("/decamp", restrict, this.logout);
    this.router.put("/reform", restrict, this.update);
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    if (await userDtoSchema.isValid(req.body)) {
      const userDto: UserDTO = req.body;

      const status = await di.usersService.authenticate(
        userDto.login,
        userDto.password
      );

      if (status !== "failure") {
        const user = await di.usersService.getTheOnlyUser();

        if (user) {
          try {
            const session = await di.sessionsService.createByUserId(user.id);
            di.logger.debug(session);

            res.cookie(SESSION_TOKEN, session.token, {
              expires: session.expiresAtAsDate,
              httpOnly: true,
              signed: true,
            });

            return res.json({
              status,
              message: "Welcome, my friend!",
            });
          } catch (err: any) {
            return next(err);
          }
        }
      }
    }

    res.status(401).json({
      error: "You shall not pass!",
    });
  };

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    di.logger.debug("UsersApiController#refresh — not implemented");
    res.sendStatus(204);
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: remove before merge
    di.logger.debug("=== LOGOUT ===");
    di.logger.debug(req.signedCookies);

    const sessionToken: Optional<string> = req.signedCookies.sessionToken;

    if (sessionToken) {
      try {
        await di.sessionsService.removeByToken(sessionToken);
        res.clearCookie(SESSION_TOKEN, { httpOnly: true });

        return res.sendStatus(204);
      } catch (err: any) {
        return next(err);
      }
    }

    res.sendStatus(401);
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    if (await userDtoSchema.isValid(req.body)) {
      const updatedUser: UserDTO = req.body;

      try {
        await di.usersService.update(updatedUser.login, updatedUser.password);
      } catch (err: any) {
        return next(err);
      }

      return res.sendStatus(204);
    }

    res.sendStatus(400);
  };

  static get path() {
    return "/ministry";
  }
}