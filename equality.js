// 6. compare two arrays by value
const hasSameElements = (a, b) => {
  // return a.length === b.length && a.every((v, i) => v === b[i]);
  return JSON.stringify(a)=== JSON.stringify(b);
};

console.log(hasSameElements([1, 2], [1, 2]));
