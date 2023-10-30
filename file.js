const data = [
  { name: "a", type: "a" },
  { name: "b", type: "a" },
  { name: "c", type: "b" },
];

const result = Object.groupBy(data, ({ type }) => type);

console.log(Object.assign({ c: 3 }, { a: 1, b: 2 }));
