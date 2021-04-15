-- Create table statement with 4 fields
CREATE TABLE movies (
  id serial PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(50),
  release_date DATE NOT NULL
);