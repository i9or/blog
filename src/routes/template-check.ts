import Router from "koa-router";
import { DefaultState, Context } from "koa";

const router = new Router<DefaultState, Context>();

router.get("/hello", async (ctx) => {
  try {
    await ctx.render("test", {
      username: "Anonymous",
      postTitle: "First post",
      postContent: "Just testing, nothing here yet...",
    });
  } catch (e) {
    console.error(e);
  }
});

export { router };
