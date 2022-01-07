/*
문제48 : 대소문자 바꿔서 출력하기
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
*/

const result = (str) => {
  let change = "";
  str.split("").map((item, idx) => {
    if (item.toUpperCase() === item) {
      change += item.toLowerCase();
    } else {
      change += item.toUpperCase();
    }
  });
  return change;
};

console.log(result("AAABBBcccddd"));
