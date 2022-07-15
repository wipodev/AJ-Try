const ajtry = require("../lib/main.js");
let main = "0.0.0";

ajtry.test("prueba1", () => {
  ajtry.equal("0.0.1", main, "main1 mala should return a string");
});

ajtry.test("prueba2", () => {
  ajtry.equal("0.0.0", main, "main2 buena should return a string");
});

ajtry.test("prueba3", () => {
  ajtry.equal("1.0.0", main, "main3 mala should return a string");
  ajtry.equal("1.0.0", main, "main3 mala should return a string");
});

ajtry.test("prueba4", () => {
  ajtry.equal("0.0.0", main, "main4 buena should return a string");
  ajtry.equal("0.0.0", main, "main4 buena should return a string");
});

ajtry.test("prueba5", () => {
  ajtry.equal("1.0.0", main, "main5 mala should return a string");
  ajtry.equal("0.0.0", main, "main5 buena should return a string");
});

ajtry.printTest();
