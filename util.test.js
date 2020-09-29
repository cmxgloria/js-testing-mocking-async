// first run printTitle is failed because async not promise to resolve the data, so we need to run test of loadTitle first

// jest.mock("./__mocks__/http.js");
// dont need to use above cause for mocks files, jest use them global then everywhere can access it
const { loadTitle } = require("./util");

test("should print an uppercase text ", () => {
  loadTitle().then((title) => {
    expected(title).toBe("DELECTUS AUT AUTEM");
  });
});
