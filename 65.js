/*
문제 65 : 변형된 리스트

a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

const result = (a, b) => {
  if (a.length != b.length) return -1;
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push([a[i], b[i]]);
  }
  return arr;
};

console.log(result(a, b));
