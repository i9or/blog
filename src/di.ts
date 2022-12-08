import type { Logger } from "pino";
import type MarkdownIt from "markdown-it";

import { PostsService } from "./services/PostsService";
import { AnalyticsService } from "./services/AnalyticsService";
import { UsersService } from "./services/UsersService";

export const di = {} as {
  analyticsService: AnalyticsService;
  postsService: PostsService;
  usersService: UsersService;
  logger: Logger;
  md: MarkdownIt;
};
