import { htmlEscape } from "../html";

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

test.todo("html tagged literal should return properly formatted string");

test.todo("html tagged literal should support escaping");

test.todo(
  "html tagged literal should support array of strings as substitution"
);
