import { Pool } from "pg";

export function ConnectToSQL() {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "logs",
    password: "8436",
    port: 5432,
  });
  return pool;
}
