import database from "infra/database.js";




async function status(request, response) {
  // response.status(200).send("olá") // fica zoado pq não especifica o charset (character set) o tipo de teclado utilizado
  const result = await database.query("SELECT 1 + 1;")
  // console.log(result)
  console.log(result.rows)
  response.status(200).json({ chave: "valor" }) // padrão charset = utf-8
}

export default status