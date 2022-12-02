import { expect, test } from "vitest";

import { todayInUnix } from "../dates";

test("todayInUnix should return correct number of milliseconds for today", () => {
  const today = new Date();
  const expected = new Date(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate()
  ).valueOf();

  expect(todayInUnix()).toBe(expected);
});
