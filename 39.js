/*
문제 39 : 오타 수정하기

혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다. 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.
 */

const result = (str) => {
  const arr = str.split("");
  console.log(arr);
  while (arr.indexOf("q") !== -1) {
    arr[arr.indexOf("q")] = "e";
  }

  return arr.join("");
};

console.log(result("hqllo my namq is hyqwon"));

//1. 함수 사용
const word = prompt("입력하세요.");

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, "q", "e"));

//2. 정규식 사용
const word = prompt("입력하세요.");

console.log(word.replace(/q/gi, "e"));
