var value = "100";
var num1 = Number(value);
var num2 = parseInt(value);

//글자 + 숫자 --> 글자 + 글자 --> 모두 합친다.
var r1 = value + 1 ;
//숫자 + 숫자 --> 덧셈을 한다.
var r2 = num1 + 1;
var r3 = num2 + 1;
document.write("<h1>r1=" + r1 + "</h1>");
document.write("<h1>r2=" + r2 + "</h1>");
document.write("<h1>r3=" + r3 + "</h1>");