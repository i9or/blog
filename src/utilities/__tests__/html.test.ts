import { expect, test } from "vitest";

import { html, htmlEscape } from "../html";

test("escapeHtml should escape special symbols", () => {
  expect(htmlEscape("&")).toBe("&amp;");
  expect(htmlEscape(">")).toBe("&gt;");
  expect(htmlEscape("<")).toBe("&lt;");
  expect(htmlEscape("'")).toBe("&#39;");
  expect(htmlEscape('"')).toBe("&quot;");
  expect(htmlEscape("`")).toBe("&#96;");
});

test("escapeHtml should properly escape supplied string", () => {
  const stringToEscape =
    "<script>const a = `Value:${eval(true && console.log('Hello', \"Hello\"))}`; alert(a);</script>";

  expect(htmlEscape(stringToEscape)).toBe(
    "&lt;script&gt;const a = &#96;Value:${eval(true &amp;&amp; console.log(&#39;Hello&#39;, &quot;Hello&quot;))}&#96;; alert(a);&lt;/script&gt;"
  );
});

test("html tagged literal should return properly formatted string", () => {
  const testParagraph = "This is a test.";
  const expected = html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Test Page</title>
      </head>
      <body>
        <h1>Hello!</h1>
        <p>${testParagraph}</p>
      </body>
    </html>`;

  expect(expected).toMatchInlineSnapshot(`
    "<!DOCTYPE html>
        <html lang=\\"en\\">
          <head>
            <title>Test Page</title>
          </head>
          <body>
            <h1>Hello!</h1>
            <p>This is a test.</p>
          </body>
        </html>"
  `);
});

test("html tagged literal should support escaping", () => {
  const testExpressionToEscape = "<script>alert(`Hello!`)</script>";
  const expected = html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Test Page</title>
      </head>
      <body>
        <h1>Hello!</h1>
        $${testExpressionToEscape}
      </body>
    </html>`;

  expect(expected).toMatchInlineSnapshot(`
    "<!DOCTYPE html>
        <html lang=\\"en\\">
          <head>
            <title>Test Page</title>
          </head>
          <body>
            <h1>Hello!</h1>
            &lt;script&gt;alert(&#96;Hello!&#96;)&lt;/script&gt;
          </body>
        </html>"
  `);
});

test("html tagged literal should support array of strings as substitution", () => {
  const testParagraph = "This is a test.";
  const testSidebar = ["This is a sidebar", " ", "and this is either", "."];
  const expected = html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Test Page</title>
      </head>
      <body>
        <h1>Hello!</h1>
        <p>${testParagraph}</p>
        <aside>${testSidebar}</aside>
      </body>
    </html>`;

  expect(expected).toMatchInlineSnapshot(`
    "<!DOCTYPE html>
        <html lang=\\"en\\">
          <head>
            <title>Test Page</title>
          </head>
          <body>
            <h1>Hello!</h1>
            <p>This is a test.</p>
            <aside>This is a sidebar and this is either.</aside>
          </body>
        </html>"
  `);
});
