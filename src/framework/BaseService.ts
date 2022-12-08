import { Database } from "sqlite";

export abstract class BaseService {
  private readonly _db: Database;

  constructor(db: Database) {
    this._db = db;
  }

  get db() {
    return this._db;
  }
}
