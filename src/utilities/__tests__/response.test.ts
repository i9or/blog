import { test, expect, vi } from "vitest";

import { setLocalsValueByKey, getLocalsValueByKey, Locals } from "../response";
import { di } from "../../di";

vi.mock("../../di", () => {
  return {
    di: {
      logger: {
        warn: vi.fn(),
      },
    },
  };
});

test("setLocalsValueByKey should set the value by key", () => {
  const expected = setLocalsValueByKey({}, "hits", 100);

  expect(expected.hits).toBe(100);
});

test("setLocalsValueByKey should initialize object if it's undefined", () => {
  const mockLocals = undefined;

  const expected = setLocalsValueByKey(mockLocals, "hits", 100);

  expect(expected).not.toBeUndefined();
});

test("setLocalsValueByKey should persist values set before", () => {
  const mockLocals = {
    other: "hello",
  } as unknown as Locals;

  const expected = setLocalsValueByKey(mockLocals, "hits", 100);

  expect(expected).toStrictEqual({
    hits: 100,
    other: "hello",
  });
});

test("getLocalsValueByKey should return value set before", () => {
  const mockLocals: Locals = {
    hits: 100,
  };

  const expected = getLocalsValueByKey(mockLocals, "hits");

  expect(expected).toBe(100);
});

test("getLocalsValueByKey should log a warning if there's no value set by specified key", () => {
  const expected = getLocalsValueByKey({}, "hits");

  expect(expected).toBeUndefined();
  expect(di.logger.warn).toBeCalled();
});
