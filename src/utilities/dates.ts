import dayjs from "dayjs";

export const todayInUnix = () => {
  // FIXME: use seconds instead of milliseconds
  return dayjs().startOf("day").valueOf();
};

export const oneDayFromNowInUnix = () => {
  return dayjs().add(1, "day").unix();
};

export const unixSecondsAsDate = (seconds: number) => {
  return dayjs.unix(seconds).toDate();
};

export const MONTH_YEAR_DATE_FORMAT = "MMMM YYYY";
