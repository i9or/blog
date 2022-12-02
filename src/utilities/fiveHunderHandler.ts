import { Request, Response } from "@tinyhttp/app";

import { di } from "../di";

export const fiveHunderHandler = (err: any, _: Request, res: Response) => {
  di.logger.error(err);
  // TODO: design proper 500 page
  res.status(500).send(`Something bad happened`);
};
