import { NextFunction, Request, Response } from "@tinyhttp/app";

import { BaseController } from "../../../framework/BaseController";
import { di } from "../../../di";
import { UserDTO, userDtoSchema } from "../../../dto/UserDTO";

export class UsersApiController extends BaseController {
  constructor() {
    super();

    this.router.post("/break-in", this.login);
    this.router.delete("/decamp", this.logout);
    this.router.put("/reform", this.update);
  }

  login = async (req: Request, res: Response) => {
    if (await userDtoSchema.isValid(req.body)) {
      const userDto: UserDTO = req.body;

      const status = await di.usersService.authenticate(
        userDto.login,
        userDto.password
      );

      if (status !== "failure") {
        return res.json({
          status,
        });
      }
    }

    res.status(401).json({
      error: "You shall not pass!",
    });
  };

  logout = (req: Request, res: Response) => {
    res.sendStatus(204);
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    if (await userDtoSchema.isValid(req.body)) {
      const updatedUser: UserDTO = req.body;

      await di.usersService.update(updatedUser.login, updatedUser.password);
      return res.sendStatus(204);
    }

    res.sendStatus(400);
  };

  static get path() {
    return "/ministry";
  }
}
