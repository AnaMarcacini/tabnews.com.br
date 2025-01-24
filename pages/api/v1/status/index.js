import database from "infra/database.js";


// async function status(request, response) {
//   // response.status(200).send("olá") // fica zoado pq não especifica o charset (character set) o tipo de teclado utilizado
//   const result = await database.query("SELECT 1 + 1;")
//   // console.log(result)
//   console.log(result.rows)
//   response.status(200).json({ chave: "valor" }) // padrão charset = utf-8
// }

// export default status

async function status(request, response) {
  // const updateAt = Date.now();
  // console.log(updateAt) // Unix Timestamp -> numero de sgundos que se passaram desde 01/jan/1970
  const updateAt = new Date().toISOString(); //ISO8601
  // const databaseVersionResult = await database.query("SELECT version();")
  const databaseVersionResult = await database.query("SHOW server_version;")
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query("SHOW max_connections;")
  const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;

  // const databaseOpenConnectionsResult = await database.query("Select * from pg_stat_activity WHERE datname = 'local_db';")
  // const databaseOpenConnectionsValue = databaseOpenConnectionsResult.rows.length;

  const databaseName = process.env.POSTGRES_DB
  const databaseOpenConnectionsResult = await database.query({
    text: "Select count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName]
  }// esse metodo de fazer querys evita de SQL Injection

    // "Select count(*)::int from pg_stat_activity WHERE datname = '" + databaseName + "'"
  ) //fazer o database fzer o calculos necessários e me mandar a resposta
  const databaseOpenConnectionsValue = databaseOpenConnectionsResult.rows[0].count;
  response.status(200).json({
    updated_at: updateAt,
    dependecies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenConnectionsValue
      }
    },
  }) // padrão charset = utf-8
}

export default status