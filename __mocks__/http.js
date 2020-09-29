// after mocks data to use, also we need to "Promise.resolve"  data successful

const fetchData = () => {
  return Promise.resolve({ title: "delectus aut autem" });
};

exports.fetchData = fetchData;
