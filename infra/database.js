import { Client } from "pg"
import { cloneElement } from "react";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    database: "postgres",
    password: "local_password",
    port: "5435",
  }
  );
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}
export default {
  query: query,
}