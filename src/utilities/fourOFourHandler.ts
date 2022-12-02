import { Request, Response } from "@tinyhttp/app";

import { di } from "../di";

export const fourOFourHandler = (req: Request, res: Response) => {
  di.logger.error(`404 Not Found ${req.url}`);
  // TODO: design proper 404 page
  res.status(404).send("Oops, resource cannot be found");
};
