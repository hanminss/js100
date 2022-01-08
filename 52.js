/*
문제52 : quick sort

다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
*/
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [5, 4, 2, 10, 3, 1, 7].map((n) => parseInt(n, 10));

console.log(quickSort(array));
