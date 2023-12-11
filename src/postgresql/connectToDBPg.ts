import { Pool } from "pg";

export const pool = new Pool({
  connectionString: "postgres://users_nr8k_user:wgvX6UsZb83ufDbYpl5Sp0LYxvLjzWuP@dpg-clqnr0ie9h4c73ao5u90-a.singapore-postgres.render.com/users_nr8k",
  ssl: {
    rejectUnauthorized: false,
  }
});