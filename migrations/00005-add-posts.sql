--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS posts
(
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  title     TEXT    NOT NULL,
  slug      TEXT    NOT NULL UNIQUE,
  content   TEXT    NOT NULL,
  createdAt INTEGER NOT NULL,
  updatedAt INTEGER NOT NULL
);

CREATE INDEX createAt_index ON posts (createdAt);

CREATE TABLE IF NOT EXISTS tags
(
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  postId INTEGER NOT NULL,
  tag    TEXT    NOT NULL,
  slug   TEXT    NOT NULL,
  FOREIGN KEY (postId) REFERENCES posts (id)
);

CREATE INDEX tags_index ON tags (tag);
CREATE INDEX slugs_index ON tags (slug);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP INDEX IF EXISTS slugs_index;
DROP INDEX IF EXISTS tags_index;
DROP TABLE IF EXISTS tags;
DROP INDEX IF EXISTS createAt_index;
DROP TABLE IF EXISTS posts;
