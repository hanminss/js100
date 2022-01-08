/*
문제50 : 버블정렬 구현하기
버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다. 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
*/
const arr = [5, 4, 2, 10, 3, 1];

const result = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr);
    }
  }
  return arr;
};

console.log(result(arr));
