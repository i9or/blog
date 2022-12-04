import dayjs from "dayjs";

export const todayInUnix = () => {
  return dayjs().startOf("day").valueOf();
};

export const MONTH_YEAR_DATE_FORMAT = "MMMM YYYY";
