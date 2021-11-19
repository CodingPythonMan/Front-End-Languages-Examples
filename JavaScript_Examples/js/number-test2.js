var value= "100.6";

// 문자열 그대로 100.6 이라는 실수값을 리턴한다.
var num1 = Number(value);

// 반올림이 아니라 내림 처리된다.
var num2 = parseInt(value);

var r1 = num1 + 1;
var r2 = num2 + 1;

document.write("<h1>r1=" + r1 + "</h1>");
document.write("<h1>r2=" + r2 + "</h1>");