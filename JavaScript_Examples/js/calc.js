// 빈 객체의 선언
var calc = {};

// 멤버변수의 추가
calc.x = 0;
calc.y = 0;

// 멤버변수에 값을 변경시키기 위한 메소드 추가
calc.setValue = function(p1, p2){
	/** 파라미터 값을 멤버변수에게 대입한다. */
	this.x = p1;
	this.y = p2;
};

// 멤버변수 끼리의 덧셈결과를 리턴
calc.plus = function(){
	return this.x + this.y;
};

// 멤버변수 끼리의 뺄셈결과를 리턴
calc.minus = function(){
	return this.x - this.y;
};

// 덧셈과 뺄셈의 결과를 출력하는 메소드
calc.result = function(){
	/** 어떤 메소드 안에서 같은 객체 안에 존재하는 다른 메소드를 호출하는 경우에도 "this"라
	는 예약어를 사용해야 한다. */
	
	var value1 = this.plus();
	var value2 = this.minus();
	
	document.write("<p>덧셈결과: " + value1 + "</p>");
	document.write("<p>뺄셈결과: " + value2 + "</p>");
};