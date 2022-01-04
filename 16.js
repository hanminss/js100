// 문제 16 : 로꾸꺼
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

const result = (str) => {
    return str.split('').reverse().join('');
}

console.log(result('hello'));