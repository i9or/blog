import type { Logger } from "pino";
import type MarkdownIt from "markdown-it";

import { PostsService } from "./services/PostsService";
import { AnalyticsService } from "./services/AnalyticsService";
import { UsersService } from "./services/UsersService";
import { SessionsService } from "./services/SessionsService";
import { TagsService } from "~/services/TagsService";

export const di = {} as {
  analyticsService: AnalyticsService;
  postsService: PostsService;
  usersService: UsersService;
  sessionsService: SessionsService;
  tagsService: TagsService;
  logger: Logger;
  md: MarkdownIt;
};
