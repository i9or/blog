import { NextFunction, Request, Response } from "@tinyhttp/app";

import { di } from "../../../di";
import { SESSION_TOKEN } from "../../../constants";
import { unixSecondsAsDate } from "../../../utilities/dates";

export const restrict = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  di.logger.debug("### RESTRICTED AREA ###");

  const sessionToken: Optional<string> = req.signedCookies.sessionToken;

  if (!sessionToken) {
    return res.sendStatus(401);
  }

  try {
    const session = await di.sessionsService.getByToken(sessionToken);

    if (session) {
      const newExpiresAt = await di.sessionsService.refreshByToken(
        session.token
      );

      res.cookie(SESSION_TOKEN, session.token, {
        expires: unixSecondsAsDate(newExpiresAt),
        httpOnly: true,
        signed: true,
      });

      return next();
    } else {
      res.clearCookie(SESSION_TOKEN, { httpOnly: true });
    }
  } catch (err: any) {
    return next(err);
  }

  res.sendStatus(401);
};
