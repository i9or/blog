import { Database } from "sqlite";

import { Post } from "~/models/Post";
import { BaseService } from "~/framework/BaseService";
import { PostMeta } from "~/models/PostMeta";

export class PostsService extends BaseService {
  constructor(db: Database) {
    super(db);
  }

  getTheLastOne = async (): Promise<Post | undefined> => {
    return await this.db.get<Post>(
      "SELECT * FROM posts ORDER BY createdAt DESC LIMIT 1"
    );
  };

  getNextByCreatedAt = async (
    createdAt: number
  ): Promise<PostMeta | undefined> => {
    return await this.db.get<PostMeta>(
      "SELECT title, slug FROM posts WHERE createdAt > ? ORDER BY createdAt ASC LIMIT 1",
      createdAt
    );
  };

  getPreviousByCreatedAt = async (
    createdAt: number
  ): Promise<PostMeta | undefined> => {
    return await this.db.get<PostMeta>(
      "SELECT title, slug FROM posts WHERE createdAt < ? ORDER BY createdAt DESC LIMIT 1",
      createdAt
    );
  };

  getFiveRecent = async (): Promise<PostMeta[] | undefined> => {
    return await this.db.all<PostMeta[]>(
      "SELECT title, slug FROM posts ORDER BY createdAt DESC LIMIT 5"
    );
  };

  getById(id: number): Post {
    throw new Error("Method 'PostsService#getById' is not implemented");
  }

  getBySlug = async (slug: string): Promise<Post | undefined> => {
    return await this.db.get<Post>("SELECT * FROM posts WHERE slug = ?", slug);
  };

  updateById(id: number): number {
    throw new Error("Method 'PostsService#updateById' is not implemented");
  }
}
