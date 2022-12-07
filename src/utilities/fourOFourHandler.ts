import { Request, Response } from "@tinyhttp/app";

import { di } from "../di";
import { ErrorPage } from "../templates/ErrorPage";

export const fourOFourHandler = (req: Request, res: Response) => {
  di.logger.error(`404 Not Found: ${req.method} ${req.path}`);

  res.status(404).format({
    html: () => res.send(ErrorPage("404")),
    json: () =>
      res.json({
        message: "resource not found",
      }),
  });
};
