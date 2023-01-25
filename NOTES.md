# Some Notes

Just some development notes.

## Using Shiki highlighter

```ts
{
  highlight: (str, lang, attrs) => {
    if (attrs?.length > 0) {
      const attributes = JSON.parse(attrs);
      for (const [key, value] of Object.entries(attributes)) {
        di.logger.debug(`Key: "${key}" Value: "${value}"`);
      }
    }
    try {
      // const tokens = highlighter.codeToThemedTokens(str, lang);
      // return JSON.stringify(tokens);

      return highlighter.codeToHtml(str, { lang });
    } catch (err) {
      di.logger.error(err);
      return "";
    }
  };
}
```
