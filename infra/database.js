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
    ssl: getSSLValues(),
  }
  );
  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  }
  catch (error) {
    console.error(error)
    throw error;
  }
  finally {
    await client.end();

  }


  function getSSLValues() {
    if (process.env.POSTGRES_CA) {//caso o banco de dados tenha um certificado proprio salve na variavel POSTGRES_CA que irá passar pelo if e passar o sertificado de parametro.... Importante o certificado estar no env em apenas uma linha para ser considerado uma variavel assim troque os enters por \n
      return {
        ca: process.env.POSTGRES_CA,
      };
    }
    return process.env.NODE_ENV !== "development" //error: connection is insecure (try using `sslmode=require`) process.env.NODE_ENV -> variavel padrão
  };

}
export default {
  query: query,
}