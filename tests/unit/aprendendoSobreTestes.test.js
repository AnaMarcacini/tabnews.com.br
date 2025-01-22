test("nome do teste", CallbackFunction)
test("nome do teste", function () {
  console.log("funcionei tb")
});
test("nome do teste", () => {
  console.log("com Arrow function eu funcionei tb")
});

function CallbackFunction() {
  console.log("fui chamada eeeee")
};

test("Espero 1 que Seja 1", () => {
  expect(1).toBe(1)

});
// test("Espero 1 que Seja 2", () => {
//   expect(1).toBe(2)
//   // Expected: 2
//   // Received: 1
// });
test("Espero ana que Seja ana", () => {
  expect("ana").toBe("ana")
  // Expected: 2
  // Received: 1
});