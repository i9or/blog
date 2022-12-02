import { Database } from "sqlite";

import { Post } from "../models/Post";

export class PostsService {
  readonly db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  first(): Post {
    throw new Error("Method 'first' is not implemented");
  }

  getAll(): Post[] {
    throw new Error("Method 'getAll' is not implemented");
  }

  getById(id: number): Post {
    throw new Error("Method 'getById' is not implemented");
  }

  updateById(id: number): number {
    throw new Error("Method 'updateById' is not implemented");
  }
}
