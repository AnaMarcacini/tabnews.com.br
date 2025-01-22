function status(request, response) {
  // response.status(200).send("olá") // fica zoado pq não especifica o charset (character set) o tipo de teclado utilizado
  response.status(200).json({ chave: "valor" }) // padrão charset = utf-8
}

export default status