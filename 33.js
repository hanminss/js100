/*
문제 33 : 거꾸로 출력하기
한 줄에 여려개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
*/

const result = (nums) => nums.split(" ").reverse().join(" ");

console.log(result("1 2 3 4 5"));
