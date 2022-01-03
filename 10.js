// 문제 10 : 별 찍기

// * 의 개수 ? 2n+1
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
