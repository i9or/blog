import type { Logger } from "pino";
import type MarkdownIt from "markdown-it";

export const di = {} as {
  logger: Logger;
  md: MarkdownIt;
};
