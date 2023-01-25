import MarkdownIt from "markdown-it";
import { getHighlighter } from "shiki";
import implicitFigures from "markdown-it-image-figures";

export const initMd = async () => {
  const highlighter = await getHighlighter({ theme: "material-palenight" });

  return new MarkdownIt({
    html: true,
    highlight: (str, lang, _attrs) => {
      try {
        return highlighter.codeToHtml(str, { lang });
      } catch (err) {
        console.error(err);
        return "";
      }
    },
  }).use(implicitFigures, {
    dataType: true,
    figcaption: true,
    lazy: true,
    async: true,
  });
};

export const di = {} as { md: MarkdownIt };
