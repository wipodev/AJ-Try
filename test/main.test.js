const main = require("../lib/main.js");

describe("main", () => {
  it("should return a string", () => {
    expect(main).toBe("0.0.1");
  });
});
