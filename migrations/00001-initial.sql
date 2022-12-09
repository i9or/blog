--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS users
(
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  login           TEXT NOT NULL UNIQUE,
  hashed_password TEXT NOT NULL
);

INSERT INTO users (login, hashed_password)
VALUES ('to_be_changed', 'to_be_changed');

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE IF EXISTS users;
