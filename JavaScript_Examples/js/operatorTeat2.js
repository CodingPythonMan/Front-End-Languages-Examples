var num = 100;

// 덧셈에 대한 단항 연산자
num += 9;
console.log(num);

// 뺄셈에 대한 단항 연산자
num -= 5;
console.log(num);

// 곱셈에 대한 단항 연산자
num *= 3;
console.log(num);

// 나눗셈에 대한 단항 연산자
num /= 7;
console.log(num);

// 나머지에 대한 단항 연산자
num %= 5;
console.log(num);

var plus_num =1;
plus_num = plus_num + 1;
plus_num += 1;
plus_num ++;
++plus_num;

//plus_num의 결과는
console.log(plus_num);

var minus_num = 4;
minus_num = minus_num - 1;
minus_num -= 1;
minus_num --;
--minus_num;

//minus_num의 결과는?
console.log(minus_num);

var z1 = 100;
var x1 = 1;

var y1 = z1 + x1++;

//x1값과 y1값의 결과 확인
console.log(x1);
console.log(y1);

var z2 = 100;
var x2 = 1;
var y2 = z2 + ++x2;

//x2값과 y2값의 결과 확인
console.log(x2);
console.log(y2);

//문자열끼리의 연산결과 확인
var msg1 = "안녕하세요.";
var msg2 = "자바스크립트";
var msg3 = msg1 + " " + msg2;
console.log(msg3);

// 문자열과 숫자값의 연산결과 확인
var msg = "안녕하세요.";
var num = 1234;
var result = msg + num;
console.log(result);