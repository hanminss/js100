/*
문제 59 : 빈칸채우기
총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
 */

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움

const result = (str) => {
  const results = str.padStart(25 + parseInt(str.length / 2), "=");
  return results.padEnd(50, "=");
};

console.log(result("hizzzzzzzz"));
