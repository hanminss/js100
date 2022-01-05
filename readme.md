# 제주코딩베이스캠프 JavaScript 100제

## 개요

- [제주코딩베이스캠프 Code Festival: JavaScript 100제](https://www.inflearn.com/course/%EC%A0%9C%EC%A3%BC%EC%BD%94%EB%94%A9-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-100%EC%A0%9C)
- 강의를 듣기 전 문제를 먼저 풀어보고 해설과 비교한다.
- 틀리거나 효율이 좋지않은 답도 해설고 함께 기록한다.

## 진도

- 22.01.03 : 1번 ~ 10번 풀이
- 22.01.04 : 11번 ~ 20번 풀이

## Map

<a href="#1">01. 배열의 삭제</a><br/>
<a href="#2">02. 배열의 내장함수</a><br/>
<a href="#3">03. 변수의 타입</a><br/>
<a href="#4">04. 변수의 타입 2</a><br/>
<a href="#5">05. for문 계산</a><br/>
<a href="#6">06. False</a><br/>
<a href="#7">07. 변수 명</a><br/>
<a href="#8">08. 객체의 키 이름 중복</a><br/>
<a href="#9">09. concat을 활용한 출력 방법</a><br/>
<a href="#10">10. 별 찍기</a><br/>
<a href="#11">11. for를 이용한 기본 활용</a><br/>
<a href="#12">12. 게임 캐릭터 클래스 만들기</a><br/>
<a href="#13">13. 몇 번째 행성인가요?</a><br/>
<a href="#14">14. 3의 배수인가요?</a><br/>
<a href="#15">15. 자기소개</a><br/>
<a href="#16">16. 로꾸꺼</a><br/>
<a href="#17">17. 놀이기구 키 제한</a><br/>
<a href="#18">18. 평균 점수</a><br/>
<a href="#19">19. 제곱을 구하자</a><br/>
<a href="#20">20. 몫과 나머지</a><br/>
<a href="#21">21. set은 어떻게 만드나요?</a><br/>
<a href="#22">22. 배수인지 확인하기</a><br/>
<a href="#23">23. OX 문제</a><br/>
<a href="#24">24. 대문자로 바꿔주세요!</a><br/>
<a href="#25">25. 원의 넓이를 구하세요</a><br/>
<a href="#26">26. 행성 문제 2</a><br/>
<a href="#27">27. 객체 만들기</a><br/>
<a href="#28">28. 2-gram</a><br/>
<a href="#29">29. 대문자만 지나가세요</a><br/>
<a href="#30">30. 문자열 속 문자 찾기</a><br/>

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

<div id="2" />

### 문제 2 : 배열의 내장함수

\<pass> 부분에 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

```js
var arr = [200, 100, 300];

//<pass>

console.log(arr);
```

답

```js
arr.splice(2, 0, 10000);
```

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

<div id="4" />

### 문제 4 : 변수의 타입 2

다음 변수를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

1. 입력 a = 1 출력: number
2. 입력 a = 2.22 출력: boolean O
3. 입력 a = 'p' 출력: string
4. 입력 a = [1,2,3] 출력: object

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

<div id="6" />

### 문제 6 : False

다음은 자바스크립트 문법 중에서 False로 취급하는 것들입니다. 이 중 True를 찾아주세요

1. NaN
2. 1| O
3. ""
4. 0
5. undefined

<div id="7" />

### 문제 7 : 변수 명

다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

1. age
2. Age
3. let O
4. \_age
5. 1age O

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

<div id="11" />

### 문제 11 : for를 이용한 기본 활용

1부터 100까지 모두 더하는 Code 를 \<pass> 부분에 완성하세요. for를 사용해야 합니다.

답

```js
let s = 0;

//pass
for (let i = 1; i < 101; i++) {
  s += i;
}
//pass
console.log(s);
```

<div id="12" />

### 문제 12 : 게임 캐릭터 클래스 만들기

다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 "파이어볼"이 출력되게 만드시오. 주어진 소스코드를 수정해선 안된다.

문제

```js
//여기에 클래스 작성

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
```

답

```js
class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  attack() {
    console.log("파이어볼!");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
```

<div id="13" />

### 문제 13: 몇 번째 행성인가요?

우리 태양계를 이루고 있는 행성은 수성,금성,지구,화성,목성,토성,천왕성으로 총 8개입니다. 저희는 우리 태양계의 n 번째 행성이 무엇인지 알고싶습니다. 입출력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.

입력 : 3 출력 : 짝

입력 : 4 출력 : 4

답

```js
const result = (num) => (num % 3 ? num : "짝");

console.log(result(3));
```

<div id="14" />

### 문제 14 : 3의 배수 인가요?

영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

입력으로 랜덤한 숫자 n이 주어집니다.

만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

입력 : 1 출력 : 수성

답

```js
const planet = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성"];
const result = (num) => planet[num - 1];
console.log(result(1)); //수성
```

<div id="15" />

### 문제 15 : 자기소개

신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 해주세요.

답

```js
const names = "김다정";
console.log(`안녕하세요. 저는 ${names}입니다.`);
```

<div id="16" />

### 문제 16 : 로꾸꺼

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

답

```js
const result = (str) => {
  return str.split("").reverse().join("");
};

console.log(result("hello"));
```

<div id="17" />

### 문제17 : 놀이기구 키 제한

유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다. 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

입력으로 키가 주어지면 키가 150이 넘으면 **YES**를 틀리면 **NO**를 출력하는 프로그램을 작성하세요.

```js
const result = (h) => (h > 150 ? "Yes" : "No");
console.log(result(151));
```

<div id="18" />

### 문제18 : 평균 점수

영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다. 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.

```js
const result = (score) => {
  const scores = score.split(" ");
  const result = Math.floor(
    (scores[0] * 1 + scores[1] * 1 + scores[2] * 1) / 3
  );
  return result;
};

console.log(result("11 20 30"));
```

<div id="19" />

### 문제 19 : 제곱을 구하자

공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

```js
const result = (input) => {
  const inputs = input.split(" ");
  return (inputs[0] * 1) ** (inputs[1] * 1);
};

console.log(result("3 4"));
```

<div id="20" />

### 문제 20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다. 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

```js
const result = (input) => {
  const inputs = input.split(" ");
  return `${parseInt(inputs[0] / inputs[1])} ${inputs[0] % inputs[1]}`;
};

console.log(result("11 2"));
```

<div id="21" />

### 문제 21 : set은 어떻게 만드나요?

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1.  var x = {1, 2, 3, 5, 6, 7};
2.  var x = {};
3.  var x = new Set('javascript'); V
4.  var x = new Set(range(5));
5.  var x = new Set(); V

<div id="22" />

### 문제 22 : 배수인지 확인하기

다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1.  i / 6 == 0
2.  i % 6 == 0 V
3.  i & 6 == 0
4.  i | 6 == 0
5.  i // 6 == 0

<div id="23" />

### 문제 23 : OX 문제

console.log(10/3)의 출력 결과는 3 이다. X

<div id="24" />

### 문제 24 : 대문자로 바꿔주세요!

민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다. 민지를 위해 **이름이 입력되면 전부 대문자로 출력되는 프로그램**을 만들어주세요.

```js
const result = (Name) => Name.toUpperCase();
console.log(result("hanmin"));
```

<div id="25" />

### 문제 25 : 원의 넓이를 구하세요

원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.
입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

```js
const result = (r) => Math.PI * r * r;
console.log(result(2));
```

<div id="26" />

### 문제 26 : 행성 문제2

우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다. 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다. 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

```js
const planets = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

console.log(planets["수성"]);
```

<div id="27" />

### 문제 27 : 객체 만들기

첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

```js
const result = (NAME, score) => {
  const names = NAME.split(" ");
  const scores = score.split(" ");
  const obj = {};
  for (let i = 0; i < 2; i++) {
    obj[names[i]] = scores[i] * 1;
  }
  return obj;
};

console.log(result("Yujin Hyewon", "70 100"));
```

<div id="28" />

### 문제28 : 2-gram

2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
입력으로 문자열이 주어지면 **2-gram**으로 출력하는 프로그램을 작성해 주세요.

```js
const result = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    console.log(str[i], str[i + 1]);
  }
};

result("Javascript");
```

<div id="29" />

### 문제 29 : 대문자만 지나가세요

진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.
**알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.

```js
const result = (alpabet) => (alpabet === alpabet.toUpperCase() ? "Yes" : "No");
console.log(result("a"));
```

<div id="30" />

### 문제30 : 문자열 속 문자 찾기

문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

```js
const result = (str, word) => {
  console.log(str.indexOf(word));
};

result("pineapple is yummy", "apple");
```
