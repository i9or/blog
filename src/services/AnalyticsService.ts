import { Database } from "sqlite";

import { Analytics } from "../models/Analytics";
import { todayInUnix } from "../utilities/dates";

export class AnalyticsService {
  readonly db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  getToday = async (): Promise<Analytics | undefined> => {
    await this.db.run(
      "INSERT OR IGNORE INTO analytics(date) VALUES(?)",
      todayInUnix()
    );

    return await this.db.get<Analytics>(
      "SELECT * FROM analytics WHERE date = ?",
      todayInUnix()
    );
  };

  getAll = async (): Promise<Analytics[] | undefined> => {
    return await this.db.all<Analytics[]>("SELECT * from analytics");
  };

  incrementToday = async (): Promise<Analytics | undefined> => {
    const analyticsToday = await this.getToday();

    if (analyticsToday) {
      const { hits, date } = analyticsToday;
      const analyticsUpdated = new Analytics(date, hits + 1);

      await this.db.run("UPDATE analytics SET hits = ? WHERE date = ?", [
        analyticsUpdated.hits,
        analyticsUpdated.date,
      ]);

      return analyticsUpdated;
    }
  };
}
