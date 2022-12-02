import dayjs from "dayjs";

export class Analytics {
  readonly date: number;
  hits: number;

  constructor(date: number, hits: number) {
    this.date = date;
    this.hits = hits;
  }

  get parsedDate() {
    return dayjs(this.date);
  }
}
