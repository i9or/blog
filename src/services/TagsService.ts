import { Database } from "sqlite";

import { Tag } from "~/models/Tag";
import { BaseService } from "~/framework/BaseService";

export class TagsService extends BaseService {
  constructor(db: Database) {
    super(db);
  }

  // getToday = async (): Promise<Analytics | undefined> => {
  //   await this.db.run(
  //     "INSERT OR IGNORE INTO analytics(date) VALUES(?)",
  //     todayInUnix()
  //   );
  //
  //   return await this.db.get<Analytics>(
  //     "SELECT * FROM analytics WHERE date = ?",
  //     todayInUnix()
  //   );
  // };

  getAll = async (): Promise<Tag[] | undefined> => {
    return await this.db.all<Tag[]>(
      "SELECT DISTINCT tag, slug FROM tags GROUP BY tag"
    );
  };

  getByPostId = async (postId: number): Promise<Tag[] | undefined> => {
    return await this.db.all<Tag[]>(
      "SELECT * FROM tags WHERE postId = ?",
      postId
    );
  };
}
