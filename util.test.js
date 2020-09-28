const { printTitle } = require("./util");

test("should print an uppercase text ", () => {
  expected(printTitle()).toBe("DELECTUS AUT AUTEM");
});
