import Handlebars from "handlebars";
import Koa, { DefaultState, Context } from "koa";
import * as path from "path";
import { readFile } from "fs/promises";
import { debuglog as debuglogFactory } from "util";

const debuglog = debuglogFactory("koabars");

type TemplateLocals = {
  [key: string]: Object;
};

declare module "koa" {
  interface Context {
    render(view: string, locals?: TemplateLocals): Promise<void>;
  }
}

type KoabarsSettings = {
  viewsRoot: string;
  caching?: boolean;
  layout?: string;
};

const defaultSettings: KoabarsSettings = {
  viewsRoot: "views",
  caching: false,
  layout: "layout",
};

export const Koabars = (
  app: Koa<DefaultState, Context>,
  settings: KoabarsSettings
) => {
  const settingsWithDefaults: KoabarsSettings = {
    ...defaultSettings,
    ...settings,
  };

  // TODO: implement cache
  // const cache = Object.create(null);

  const render = async (view: string, locals?: TemplateLocals) => {
    const viewFileName = `${view}.hbs`;
    const viewsRoot = path.resolve(
      process.cwd(),
      settingsWithDefaults.viewsRoot
    );
    const viewPath = path.join(viewsRoot, viewFileName);
    debuglog(viewPath);

    const templateSource = await readFile(viewPath, { encoding: "utf8" });
    // debuglog(templateSource);

    const templateFn = Handlebars.compile(templateSource);

    return templateFn(locals);
  };

  app.context.render = async function (view, locals) {
    const ctx = this;
    const context = { ...ctx.state, ...locals };
    let html = await render(view, context);

    const layout =
      context.layout === false
        ? false
        : context.layout || settingsWithDefaults.layout;
    if (layout) {
      context.outlet = html;
      html = await render(layout, context);
    }

    ctx.type = "html";
    ctx.body = html;
  };
};

export { Handlebars };
