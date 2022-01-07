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
<a href="#31">31. 자바스크립트 자료형의 복잡도</a><br/>
<a href="#32">32. 문자열 만들기</a><br/>
<a href="#33">33. 거꾸로 출력하기</a><br/>
<a href="#34">34. sort 구현하기</a><br/>
<a href="#35">35. factory 함수 사용하기</a><br/>
<a href="#36">36. 구구단 출력하기</a><br/>
<a href="#37">37. 반장선거</a><br/>
<a href="#38">38. 호준이의 아르바이트</a><br/>
<a href="#39">39. 오타 수정하기</a><br/>
<a href="#40">40. 놀이동산에 가자</a><br/>
<a href="#41">41. 소수판별</a><br/>
<a href="#42">42. 2020년</a><br/>
<a href="#43">43. 10진수를 2진수로</a><br/>
<a href="#44">44. 각 자리수의 합</a><br/>
<a href="#45">45. getTime()함수 사용하기</a><br/>
<a href="#46">46. 각 자리수의 합 2</a><br/>
<a href="#47">47. set 자료형의 응용</a><br/>
<a href="#48">48. 대소문자 바꿔서 출력하기</a><br/>
<a href="#49">49. 최댓값 구하기</a><br/>
<a href="#50">50. 버블정렬 구현하기</a><br/>

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

<div id="31" />

### 문제 31 : 자바스크립트 자료형의 복잡도

다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1. arr[i] O(1)
2. arr.push(5) O(1)
3. arr.slice() v 배열이 커질수록 시간도 오래걸릴 것이다.
4. arr.pop() O(1)
5. arr.includes(5) v 배열이 커질수록 시간도 오래걸릴 것이다.

<div id="32" />

### 문제 32: 문자열 만들기

취업 준비생인 혜림이는 자기 소개서를 쓰고 있습니다. 열심히 자기 소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다.

혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

```js
const result = (str) => str.split(" ").length;

console.log(result("안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다."));
```

<div id="33" />

### 문제 33 : 거꾸로 출력하기

한 줄에 여려개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

```js
const result = (nums) => nums.split(" ").reverse().join(" ");

console.log(result("1 2 3 4 5"));
```

<div id="34" />

### 문제 34 : sort 구현하기

민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모여있는지를 확인해야 한다.

그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

민주를 위해 키가 주어지면 순서대로 섰는지 확인하는 프로그램을 작성해보자.

```js
const result = (str) =>
  str
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ") === str
    ? "Yes"
    : "No";

console.log(result("155 156 166 169 175 176"));
```

<div id="35" />

### 문제 35 : factory 함수 사용하기

2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

\<pass>에 코드를 작성하여 two함수를 완성하세요

```js
function one(n) {
  function two(m) {
    //pass
    return m ** n;
    //pass
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
```

<div id="36" />

### 문제 36: 구구단 출력하기

1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

```js
const result = (n) => {
  let output = "";
  for (let i = 1; i < 10; i++) {
    output = output + n * i + " ";
  }
  return output;
};

console.log(result(2));
```

<div id="" />

### 문제 37: 반장선거

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

```js
const result = (str) => {
  const output = {};
  str.split(" ").map((item) => {
    if (output.hasOwnProperty(item)) {
      output[item] += 1;
    } else {
      output[item] = 1;
    }
  });
  const winner = Object.keys(output).reduce((acc, cur) =>
    output[acc] > output[cur] ? acc : cur
  );

  return `${winner}(이)가 총 ${output[winner]}표로 반장이 되었습니다.`;
};

console.log(result("원범 원범 혜원 혜원 혜원 혜원 유진 유진"));
```

<div id="38" />

### 문제 38: 호준이의 아르바이트

호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.
1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
**학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

```js
const result = (str) => {
  let ott = 0;
  let count = 0;
  str
    .split(" ")
    .sort((a, b) => a - b)
    .reverse()
    .reduce((acc, cur) => {
      if (ott < 3) {
        if (acc === cur) {
          count += 1;
          return acc;
        } else {
          count += 1;
          ott += 1;
          return cur;
        }
      }
    });
  return count;
};
console.log(result("97 86 75 66 55 97 85 97"));
```

<div id="39" />

### 문제 39 : 오타 수정하기

혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다. 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

```js
const result = (str) => {
  const arr = str.split("");
  console.log(arr);
  while (arr.indexOf("q") !== -1) {
    arr[arr.indexOf("q")] = "e";
  }

  return arr.join("");
};

console.log(result("hqllo my namq is hyqwon"));
```

모범답안

```js
//1. 함수 사용
const word = prompt("입력하세요.");

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, "q", "e"));

//2. 정규식 사용
const word = prompt("입력하세요.");

console.log(word.replace(/q/gi, "e"));
```

<div id="40" />

### 문제 40 : 놀이동산에 가자

테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

```js
function result(x, y) {
  if (arguments.length - 2 !== y) {
    return "error";
  }
  let total = 0;
  for (let i = 3; i < 3 + y; i++) {
    total += arguments[i];
    if (total + arguments[i] >= x) return i - 2;
  }
  return arguments.length - 2;
}

console.log(result(50, 5, 20, 20, 20, 20, 20));
```

<div id="41" />

### 문제 41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

```js
const result = (num) => {
  if (num == 1) return "No";
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return "No";
  }
  return "Yes";
};

console.log(result(19));
```

<div id="42" />

### 문제 42 : 2020년

2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

제한 조건
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다.
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

```js
const arr = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];

const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const result = (a, b) => {
  let countDay = b;
  for (let i = 0; i < a - 1; i++) {
    countDay += days[i];
  }

  return arr[(countDay % 7) - 1];
};

console.log(result(5, 24));

// 모범답안 day를 이용한다

const month = prompt("월을 입력하세요.");
const date = prompt("일을 입력하세요.");

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const x = new Date("2020-" + a + "-" + b);
  return day[x.getDay()];
}
console.log(solution(month, date));
```

<div id="43" />

### 문제43 : 10진수를 2진수로

우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

**사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**

```js
const result = (num) => num.toString(2);

console.log(result(3));

// 직접 구하신듯
let a = prompt("10진수를 입력해주세요.");
let b = [];
let result = "";

while (a) {
  b.push(a % 2);
  a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
  result += n;
});

console.log(result);
```

<div id="44" />

### 문제44 : 각 자리수의 합

사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

```js
const result = (num) => {
  const arr = (num + "").split("");
  return arr.reduce((acc, cur) => {
    acc += cur * 1;
    return acc;
  }, 0);
};

console.log(result(18234));
```

<div id="45" />

### 문제45 : getTime()함수 사용하기

Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 현재 연도(2019)를 출력해보세요.

```js
const x = new Date();

console.log(parseInt(x.getTime() / (1000 * 60 * 60 * 24 * 365)) + 1970);
```

<div id="46" />

### 문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

```js
const result = (a, b) => {
  let str = "";
  for (let i = a; i <= b; i++) {
    str += i;
  }

  return str.split("").reduce((acc, cur) => {
    acc += cur * 1;
    return acc;
  }, 0);
};

console.log(result(10, 20));
```

<div id="47" />

### 문제47 : set 자료형의 응용

바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.
중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.

아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.

```js
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

const result = (obj) => {
  let result = new Set();
  for (let key in obj) result.add(people[key]);
  return result.size;
};

console.log(result(people));
```

<div id="48" />

### 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

```js
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
```

<div id="49" />

### 문제 49 : 최댓값 구하기

순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라

```js
const result = (str) => {
  const arr = str.split(" ").map((v, i, arr) => {
    return v * 1;
  });
  const max = arr.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
  }, 0);
  return max;
};

console.log(result("10 9 8 7 6 5 4 3 2 1 100"));

// sort로 뽑는게 더 쉬운것 같다.
let numbers = prompt("10개의 숫자를 입력하세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers[0]);
```

<div id="50" />

### 문제50 : 버블정렬 구현하기

버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다. 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.

```js
function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      /*빈칸을 채워주세요.*/
      if (result[j] > result[j + 1]) {
        //빈칸을 채워주세요.
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt("입력해주세요.")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));
```
