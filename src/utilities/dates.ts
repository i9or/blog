import dayjs from "dayjs";

export const todayInUnix = () => {
  return dayjs().startOf("day").valueOf();
};
