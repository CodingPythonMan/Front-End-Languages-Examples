function sayHello(){
	document.write("<h1>안녕하세요.</h1>");
	document.write("<h1>자바스크립트</h1>");
}

sayHello();
sayHello();

// 파라미터를 갖는 함수의 선언
function fn(x){
	var y = x+1;
	document.write("<h1>" + y + "</h1>");
}

// 함수의 호출 --> 파라미터를 전달한다.
fn(2);
fn(5);
fn(10);

// 파라미터를 갖는 함수의 선언
function f(x,y){
	var z = x+y;
	document.write("<h1>" + z + "</h1>");
}

//함수의 호출 --> 파라미터를 전달한다.
f(2,1);
f(5,7);
f(10,5);

//파라미터를 갖는 함수의 선언
function fun(x,y){
	var z = x+y;
	
	// 값이 10보다 작을 경우, 실행중단
	if(z<10){
		return; // 값이 없으면 실행종료
	}
	return z;	
}

//함수의 호출 --> 파라미터를 전달한다.
var a = fun(2,1);
var b = fun(5,7);
var c = fun(10,5);

document.write("<h1>" + a + "</h1>");
document.write("<h1>" + b + "</h1>");
document.write("<h1>" + c + "</h1>");

function sum(x,y){
	var z = x+y;
	return z;	
}

function printResult(x,y){
	//(우변) sum 함수를 호출하여 결과를 리턴받았다.
	//(좌변) 리턴받은 결과를 result에 대입하였다.
	var result = sum(x, y);
	document.write("<h1>" + result + "</h1>");	
}

printResult(7,10);