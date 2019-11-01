DROP TABLE IF EXISTS "clients" CASCADE;

CREATE TABLE "clients"(
  "client_id" SERIAL PRIMARY KEY,
  "name" VARCHAR (50) NOT NULL,
  "email" CHAR (11) UNIQUE NOT NULL
);