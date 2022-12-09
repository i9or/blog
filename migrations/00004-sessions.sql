--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS sessions
(
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  userId    INTEGER NOT NULL,
  expiresAt INTEGER NOT NULL,
  token     TEXT    NOT NULL UNIQUE,
  FOREIGN KEY (userId) REFERENCES users (id)
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE IF EXISTS sessions;
