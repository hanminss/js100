/* 문제 56 : 객체의 함수 응용

다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

```js
데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023
```
*/

const obj = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const result = (obj) => {
  const entries = Object.entries(obj);
  const values = Object.values(obj);
  const value = values[0];
  let temp = 999999999999;
  let idx = 0;

  for (let i = 1; i < values.length; i++) {
    if (Math.abs(values[i] - value) < Math.abs(temp - value)) {
      temp = values[i];
      idx = i;
    }
    console.log(i);
  }
  console.log(entries[idx][0]);
};

result(obj);
