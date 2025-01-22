// test("GET to /api/v1/status should return 200 hahahaha", () => {
//   // const response = fetch("http://localhost:3000/api/v1/status")
//   console.log(response) //Promise { <pending> } -> promessa que eu vou fazer no futuro
//   // Assim dá erro no codigo já que a variavel response se torna undefined
// })


test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status")
  expect(response.status).toBe(200)
})

