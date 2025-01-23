import { Client } from "pg"
import { cloneElement } from "react";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    //prop database, ela diz que é opcional, mas que quando não é passada o pg busca pela variável PGDATABASE e caso não encontre nada vai usar o mesmo valor defino para a prop user
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD,
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