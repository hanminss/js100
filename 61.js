/*
문제 61 : 문자열 압축하기

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
*/

const result = (str) => {
  const arr = str.split("");
  let output = "";
  let temp = 0;
  arr.map((item, idx, arrs) => {
    if (item != arrs[idx + 1]) {
      output = output + item + (idx + 1 - temp);
      temp = idx + 1;
    }
  });
  return output;
};

console.log(result("aaabbbbcdddd"));
