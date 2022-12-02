import { expect, test } from "vitest";

import { Analytics } from "../Analytics";
import { todayInUnix } from "../../utilities/dates";

test("Analytics constructor", () => {
  const a = new Analytics(1000, 123);

  expect(a.date).toBe(1000);
  expect(a.hits).toBe(123);
});

test("Analytics#parsedDate", () => {
  const a = new Analytics(todayInUnix(), 123);

  const expectedYear = new Date().getUTCFullYear();
  const expectedMonth = `${new Date().getUTCMonth() + 1}`.padStart(2, "0");
  const expectedDay = `${new Date().getUTCDate()}`.padStart(2, "0");
  const expectedDate = `${expectedYear}-${expectedMonth}-${expectedDay}T00:00:00.000Z`;

  expect(a.parsedDate.toISOString()).toBe(expectedDate);
});
