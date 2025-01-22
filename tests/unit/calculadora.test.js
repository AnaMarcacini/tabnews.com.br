// os testes são uteis como documentação de sw mal documentados
// os testes mostram as funções os parametros e o retorno esperado (como uma documentação faria)

// tem uma tecnica de fazer o inverso (primeiro atira a flexa e depois coloca o alvo se chama)
// Ou seja elaborar primeiro os testes e depois implementar na função
// TDD -> Test Driven Development (desenvolvimento orientado a testes)

const calculadora = require("../../models/calculadora.js")

test("2+2=4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4)
})

test("132+222=354", () => {
  const resultado = calculadora.somar(132, 222);
  expect(resultado).toBe(354)
})

test("'banana'+2='Erro'", () => {
  const resultado = calculadora.somar("banana", 2);
  expect(resultado).toBe("Erro")
})