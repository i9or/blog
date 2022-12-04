import { Request, Response } from "@tinyhttp/app";

import { di } from "../di";
import { ErrorPage } from "../templates/ErrorPage";

export const fourOFourHandler = (req: Request, res: Response) => {
  di.logger.error(`404 Not Found ${req.url}`);
  res.status(404).send(ErrorPage("404"));
};
