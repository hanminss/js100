/*
문제58 : 콤마 찍기

원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
*/

const result = (num) => {
  const x = (num + "").split("").reverse(); // 6
  let count =
    x.length % 3 == 0 ? parseInt(x.length / 3) - 1 : parseInt(x.length / 3);

  for (let i = 1; i <= count; i++) {
    x.splice(3 * i + (i - 1), 0, ",");
  }
  console.log(x.reverse().join(""));
};
result(1234567899);
