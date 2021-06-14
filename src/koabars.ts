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
  templateExtension?: string;
  layoutExtension?: string;
};

const defaultSettings: KoabarsSettings = {
  viewsRoot: "views",
  caching: false,
  layout: "layout",
  templateExtension: "hbs",
  layoutExtension: "html",
};

export const Koabars = (
  app: Koa<DefaultState, Context>,
  settings: KoabarsSettings
) => {
  const settingsWithDefaults: KoabarsSettings = {
    ...defaultSettings,
    ...settings,
  };

  const viewsRoot = path.resolve(process.cwd(), settingsWithDefaults.viewsRoot);

  // TODO: implement cache
  // const cache = Object.create(null);

  const render = async (viewFileName: string, locals?: TemplateLocals) => {
    const viewPath = path.join(viewsRoot, viewFileName);

    const templateSource = await readFile(viewPath, { encoding: "utf8" });

    const templateFn = Handlebars.compile(templateSource);

    return templateFn(locals);
  };

  const renderTemplate = async (template: string, locals?: TemplateLocals) => {
    const templateFileName = `${template}.${settingsWithDefaults.templateExtension}`;
    const result = await render(templateFileName, locals);

    return result;
  };

  const renderLayout = async (layout: string, locals?: TemplateLocals) => {
    const layoutFileName = `${layout}.${settingsWithDefaults.layoutExtension}`;
    const result = await render(layoutFileName, locals);

    return result;
  };

  app.context.render = async function (view, locals) {
    const ctx = this;
    const context = { ...ctx.state, ...locals };
    let html = await renderTemplate(view, context);

    const layout =
      context.layout === false
        ? false
        : context.layout || settingsWithDefaults.layout;
    if (layout) {
      context.outlet = html;
      html = await renderLayout(layout, context);
    }

    ctx.type = "html";
    ctx.body = html;
  };
};

export { Handlebars };
