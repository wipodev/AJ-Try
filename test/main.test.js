const ajtry = require("../lib/main.js");

test("Test should return a object", () => {
  let main = "0.0.0";

  ajtry.test("prueba1", () => {
    ajtry.equal("0.0.1", main, "main1 mala should return a string");
  });

  expect(ajtry.getTests()).toEqual(
    expect.arrayContaining([
      {
        name: "prueba1",
        tests: [
          {
            expected: "0.0.1",
            message: "main1 mala should return a string",
            passed: false,
            received: "0.0.0",
          },
        ],
      },
    ])
  );
});
