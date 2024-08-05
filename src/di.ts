import MarkdownIt from "markdown-it";
import { createHighlighter } from "shiki";
import implicitFigures from "markdown-it-image-figures";
import blockquoteAttribution from "markdown-it-attribution";
import footNote from "markdown-it-footnote";
import attrs from "markdown-it-attrs";
import { transformerNotationDiff } from "@shikijs/transformers";

export const initMd = async () => {
  const highlighter = await createHighlighter({
    langs: ["cpp", "sh", "cmake"],
    themes: ["houston"],
  });

  return new MarkdownIt({
    html: true,
    highlight: (str, lang, _attrs) => {
      try {
        return highlighter.codeToHtml(str, {
          lang,
          theme: "houston",
          transformers: [transformerNotationDiff()],
        });
      } catch (err) {
        console.error(err);
        return "Syntax highlighter failed...";
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
