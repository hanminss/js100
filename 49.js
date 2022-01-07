/*
문제 49 : 최댓값 구하기

순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라
*/

const result = (str) => {
  const arr = str.split(" ").map((v, i, arr) => {
    return v * 1;
  });
  const max = arr.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
  }, 0);
  return max;
};

console.log(result("10 9 8 7 6 5 4 3 2 1 100"));

// sort로 뽑는게 더 쉬운것 같다.
let numbers = prompt("10개의 숫자를 입력하세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers[0]);
