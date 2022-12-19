import { NextFunction, Request, Response } from "@tinyhttp/app";

import { di } from "~/di";
import { SESSION_TOKEN } from "~/constants";
import { unixSecondsAsDate } from "~/utilities/dates";

import { COMMON_COOKIE_OPTIONS } from "./cookie";

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
      if (session.isExpired) {
        await di.sessionsService.removeByToken(session.token);
        res.clearCookie(SESSION_TOKEN, { ...COMMON_COOKIE_OPTIONS });

        return res.sendStatus(401);
      }

      const newExpiresAt = await di.sessionsService.refreshByToken(
        session.token
      );

      res.cookie(SESSION_TOKEN, session.token, {
        expires: unixSecondsAsDate(newExpiresAt),
        signed: true,
        ...COMMON_COOKIE_OPTIONS,
      });

      return next();
    } else {
      res.clearCookie(SESSION_TOKEN, { ...COMMON_COOKIE_OPTIONS });
    }
  } catch (err: any) {
    return next(err);
  }

  res.sendStatus(401);
};
