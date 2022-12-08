import { Database } from "sqlite";

import { Post } from "../models/Post";
import { BaseService } from "../framework/BaseService";

export class PostsService extends BaseService {
  constructor(db: Database) {
    super(db);
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
