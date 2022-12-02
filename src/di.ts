import type { Logger } from "pino";
import type MarkdownIt from "markdown-it";

import { PostsService } from "./services/PostsService";
import { AnalyticsService } from "./services/AnalyticsService";

export const di = {} as {
  analyticsService: AnalyticsService;
  postsService: PostsService;
  logger: Logger;
  md: MarkdownIt;
};
