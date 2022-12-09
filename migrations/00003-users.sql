--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users
(
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  login          TEXT NOT NULL UNIQUE,
  hashedPassword TEXT NOT NULL
);

INSERT INTO users (login, hashedPassword)
VALUES ('to_be_changed', 'to_be_changed');

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE IF EXISTS users;
