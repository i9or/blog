import { Request, Response } from "@tinyhttp/app";

import { di } from "../di";
import { ErrorPage } from "../templates/ErrorPage";

export const fiveHundredHandler = (err: any, _: Request, res: Response) => {
  di.logger.error(err);
  res.status(500).send(ErrorPage("500"));
};
