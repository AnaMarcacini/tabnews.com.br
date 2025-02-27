import migrationRunner from "node-pg-migrate"
import { join } from "node:path";

export default async function migrations(request, response) {
  console.log(request.method)
  if (request.method == "GET") {
    console.log("entrou no get")

    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: true,
      // dir: "infra/migrations"// cada Sist Opera lê de maneira diferente
      dir: join("infra", "migrations"),// cada Sist Opera lê de maneira diferente
      direction: "up", // roda as migrations na ordem crescente (criando) pode ser down -> desfazendo os comandos feitos
      verbose: true,
      migrationsTable: "pgmigrations" //default do comando na linha de comando é pgmigrations e na api programatica que estamos usando para rodar o migrations na api em JS é undefined -> para normalisar as duas setamos o valor da tabela para o mesmo valor do default 
    })
    return response.status(200).json(migrations)
  }
  if (request.method == "POST") {
    console.log("entrou no post")

    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dryRun: false,
      // dir: "infra/migrations"// cada Sist Opera lê de maneira diferente
      dir: join("infra", "migrations"),// cada Sist Opera lê de maneira diferente
      direction: "up", // roda as migrations na ordem crescente (criando) pode ser down -> desfazendo os comandos feitos
      verbose: true,
      migrationsTable: "pgmigrations" //default do comando na linha de comando é pgmigrations e na api programatica que estamos usando para rodar o migrations na api em JS é undefined -> para normalisar as duas setamos o valor da tabela para o mesmo valor do default 
    })
    return response.status(200).json(migrations)
  }
  return response.status(405)
  // 404 - > not found
  // 405 - > method not allowed
}

