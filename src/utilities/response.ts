import { di } from "../di";

export type Locals = Partial<{
  hits: number;
}>;

export const setLocalsValueByKey = <K extends keyof Locals>(
  locals: Readonly<Locals | undefined>,
  key: K,
  value: Locals[K]
): Locals => ({
  ...(locals ?? {}),
  [key]: value,
});

export const getLocalsValueByKey = <K extends keyof Locals>(
  locals: Readonly<Locals | undefined>,
  key: K
): Locals[K] => {
  const result = locals?.[key];

  if (!result) {
    di.logger.warn(`Key "${key}" does not exist on the response locals object`);
  }

  return result;
};
