/*
문제 70 : 행렬 곱하기

행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.
*/
const a = [
  [1, 2, 3],
  [2, 4, 5],
];

const b = [
  [1, 0],
  [0, 3],
  [0, 5],
];

const result = (a, b) => {
  if (a[0].length != b.length) return -1;
  const results = [];
  for (let i = 0; i < a.length; i++) {
    const item = [];
    for (let j = 0; j < b.length; j++) {
      item.push(a[i][0] * b[j][0] + a[i][1] * b[j][1]);
    }
    results.push(item);
  }
  return results;
};

console.log(result(a, b));
