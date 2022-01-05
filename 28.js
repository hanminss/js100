/*
문제28 : 2-gram
2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
입력으로 문자열이 주어지면 **2-gram**으로 출력하는 프로그램을 작성해 주세요.
*/

const result = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    console.log(str[i], str[i + 1]);
  }
};

result("Javascript");
