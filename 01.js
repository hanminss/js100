// 문제1 : 배열의 삭제
// 다음 배열에서 400,500 을 삭제하는 code를 입력하세요

var nums = [100, 200, 300, 400, 500];

// slice는 새로운 배열을 만들어내기 때문에 요구사항에 맞지 않는 것 같다.
console.log(nums.slice(0, 3));

// 결론은 원본배열을 변환시키는 pop 메서드 2번
nums.pop();
nums.pop();
