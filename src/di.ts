import MarkdownIt from "markdown-it";
import { getHighlighter } from "shiki";
import implicitFigures from "markdown-it-image-figures";
import blockquoteAttribution from "markdown-it-attribution";
import footNote from "markdown-it-footnote";
import attrs from "markdown-it-attrs";

export const initMd = async () => {
  const highlighter = await getHighlighter({
    theme: "material-theme-palenight",
  });

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
  })
    .use(attrs)
    .use(implicitFigures, {
      dataType: true,
      figcaption: true,
      lazy: true,
      async: true,
    })
    .use(blockquoteAttribution, {
      classNameContainer: "blockquote",
      classNameAttribution: "blockquote__attribution",
      removeMarker: false,
    })
    .use(footNote);
};

export const di = {} as { md: MarkdownIt };
