# 제주코딩베이스캠프 JavaScript 100제

## 개요

- [제주코딩베이스캠프 Code Festival: JavaScript 100제](https://www.inflearn.com/course/%EC%A0%9C%EC%A3%BC%EC%BD%94%EB%94%A9-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-100%EC%A0%9C)
- 강의를 듣기 전 문제를 먼저 풀어보고 해설과 비교한다.
- 틀리거나 효율이 좋지않은 답도 해설고 함께 기록한다.

## 진도

- 22.01.03 : 1번 ~ 10번 풀이

## Map

<a href="#1">01. 배열의 삭제</a>
<a href="#2">02. 배열의 내장함수</a>
<a href="#3">03. 변수의 타입</a>
<a href="#4">04. 변수의 타입 2</a>
<a href="#5">05. for문 계산</a>
<a href="#6">06. False</a>
<a href="#7">07. 변수 명</a>
<a href="#8">08. 객체의 키 이름 중복</a>
<a href="#9">09. concat을 활용한 출력 방법</a>
<a href="#10">10. 별 찍기</a>

---

<div id="1" />
### 문제1 : 배열의 삭제
다음 배열에서 400,500 을 삭제하는 code를 입력하세요
```js
var nums = [100, 200, 300, 400, 500];
```

답

```js
// slice는 새로운 배열을 만들어내기 때문에 요구사항에 맞지 않는 것 같다.
console.log(nums.slice(0, 3));
// 결론은 원본배열을 변환시키는 pop 메서드 2번
nums.pop();
nums.pop();
```

---

<div id="2" />
### 문제 2 : 배열의 내장함수
\<pass> 부분에 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
```js
var arr = [200, 100, 300];

//<pass>

console.log(arr);

````

답
```js
arr.splice(2, 0, 10000);
````

---

<div id="3" />
### 문제 3 : 변수의 타입
다음 출력값으로 올바른 것은?
```js
var arr = [100, 200, 300];
console.log(typeof arr);
```

1. undefiend
2. string
3. number
4. object O

---

<div id="4" />
### 문제 4 : 변수의 타입 2
다음 변수를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
1) 입력 a = 1 출력: number
2) 입력 a = 2.22 출력: boolean O
3) 입력 a = 'p' 출력: string
4) 입력 a = [1,2,3] 출력: object
---
<div id="5" />
### 문제5 : for문 계산
다음 코드의 출력 값으로 알맞은 것은?
```js
var a = 10;
var b = 2;
for (var i = 1; i < 5; i += 2) {
  a += i;
}
console.log(a + b);
```
답 : 16

---

<div id="6" />
### 문제 6 : False
다음은 자바스크립트 문법 중에서 False로 취급하는 것들입니다. 이 중 True를 찾아주세요
1. NaN
2. 1|    O
3. ""
4. 0
5. undefined
---
<div id="7" />
### 문제 7 : 변수 명
다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
1. age
2. Age
3. let O
4. _age
5. 1age O
---
<div id="8" />
### 문제 8 : 객체의 키 이름 중복
자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오.
```js
var d = {
  height: 100,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};
console.log(d["weight"]);
```
답 : 84

---

<div id="9" />
### 문제 9 : concat을 활용한 출력 방법
다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

```js
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";
```

답 1

```js
var result = year
  .concat("/" + month)
  .concat("/" + day)
  .concat(" " + hour)
  .concat(":" + minute)
  .concat(":" + second);
```

답 2

```js
var result2 = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);
```

---

<div id="10" />
### 문제 10 : 별 찍기
input 만큼의 줄을 가진 트리를 만들자
답

```js
function tree(num) {
  for (let i = 0; i < num; i++) {
    let line = "";
    for (let j = 0; j < 2 * i + 1; j++) {
      line += "*";
    }
    for (let k = 0; k < num - 1 - i; k++) {
      line = " " + line;
    }
    console.log(line);
  }
}
tree(5);
```
