import { Request, Response } from "@tinyhttp/app";

import { di } from "../di";
import { ErrorPage } from "../templates/ErrorPage";

export const fiveHundredHandler = (err: any, req: Request, res: Response) => {
  di.logger.error(err);

  res.status(500).format({
    html: () => res.send(ErrorPage("500")),
    json: () =>
      res.json({
        error: err.message,
      }),
  });
};
