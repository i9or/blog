import { BLOG_DOMAIN, MORE_SECURE } from "~/configuration";

export const COMMON_COOKIE_OPTIONS = {
  domain: BLOG_DOMAIN,
  httpOnly: true,
  secure: true,
  ...(MORE_SECURE && { sameSite: "Strict" }),
};
