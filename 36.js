/*
문제 36: 구구단 출력하기

1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.
*/

const result = (n) => {
  let output = "";
  for (let i = 1; i < 10; i++) {
    output = output + n * i + " ";
  }
  return output;
};

console.log(result(2));
