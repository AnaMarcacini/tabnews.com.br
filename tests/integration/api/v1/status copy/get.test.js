
// test("GET to /api/v1/status should return 200 hahahaha", () => {
//   // const response = fetch("http://localhost:3000/api/v1/status")
//   console.log(response) //Promise { <pending> } -> promessa que eu vou fazer no futuro
//   // Assim dá erro no codigo já que a variavel response se torna undefined
// })


test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status")
  expect(response.status).toBe(200)

  const responseBody = await response.json();
  console.log(responseBody)
  expect(responseBody.updated_at).toBeDefined() //precisa sere um valor definido (não pode ser indefinido) mas no caso pode ser qualquer coisa (int, string, lista e até null) //após a escrita dos demais testes a baixo ela se torna meio redundante

  const parsedUpdateDate = new Date(responseBody.updated_at).toISOString(); // garante que o dado está em formato de data porem caso o valor seja nulo ou outra data ele aceita
  expect(responseBody.updated_at).toEqual(parsedUpdateDate)
  expect(responseBody.dependecies.database.version).toEqual("16.0")
  expect(responseBody.dependecies.database.max_connections).toEqual(100)
  expect(responseBody.dependecies.database.opened_connections).toEqual(1)
})
