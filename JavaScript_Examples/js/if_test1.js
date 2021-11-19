var myage = 19;
// 같다면 참
if(myage == 19){
	document.write("<h1>19살 입니다.</h1>");
}

// 다르다면 참
if(myage != 20){
	document.write("<h1>20살이 아닙니다.</h1>");
}

if(myage > 19){
	document.write("<h1>성인입니다.</h1>");
}

if(myage <= 19){
	document.write("<h1>학생입니다.</h1>");
}

var point = 75;

//AND(&&) --> 두 조건이 모두 참이어야 전체가 참, 범위를 검사한다.
if(point > 70 && point <= 80){
	document.write("<h1>C학점 입니다.</h1>");
}

//OR(||) --> 두 조건중 하나라도 참이면 전체가 참
if(point <= 70 || point > 80){
	document.write("<h1>범위를 벗어났습니다.</h1>");	
}

var is_korean = true;

if(is_korean == true){
	document.write("<h1>한국사람입니다.</h1>");
}
if(is_korean == false){
	document.write("<h1>한국사람이 아닙니다.</h1>");
}
if(is_korean){
	document.write("<h1>한국사람입니다.</h1>");
}
if(!is_korean){ //!는 값을 부정한다.
	document.write("<h1>한국사람이 아닙니다.</h1>");
}

var is_japanese = false;

if(is_japanese != true){
	document.write("<h1>일본사람이 아닙니다.</h1>");
}
if(is_japanese != false){
	document.write("<h1>일본사람 입니다.</h1>");
}
if(!is_japanese){
	document.write("<h1>일본사람이 아닙니다.</h1>");
}
if(is_japanese){
	document.write("<h1>일본사람 입니다.</h1>");
}

if(myage > 19){
	document.write("<h1>성인입니다.</h1>");	
}else{
	document.write("<h1>성인이 아닙니다.</h1>");
}

var point = 82;
// 임의로 비워둔 값
var grade = null;

if(90 < point && point <= 100){
	grade = "A";
}else if(80 < point && point <= 90){
	grade = "B";	
}else if(70 < point && point <= 80){
	grade = "C";	
}else{
	grade = "F";	
}

var msg = "<h1>" + grade + "학점 입니다.</h1>";
document.write(msg);

switch(grade){
	case "A":
		document.write("<h1>91~100점 사이 입니다.</h1>");
		break;
	case "B":
		document.write("<h1>81~90점 사이 입니다.</h1>");	
		break;
	case "C":
		document.write("<h1>71~80점 사이 입니다.</h1>");	
		break;
	default:
		document.write("<h1>70점 이하 입니다.</h1>");
		break;		
}

var sum = 0;

//i값이 1부터 100까지 증가하는 동안, i의 값을 sum에 누적한다.
for(var i=1; i<= 100; i++){
	//결과값 누적
	sum += i;
}

document.write("<h1>1부터 100까지의 합은 " + sum + "입니다.</h1>");

for(var i=1; i<10; i++){
	var j= 7*i;
	document.write("<p>7 x " + i + " = " + j + "</p>");
}

sum=0;

var i = 1; // 초기값
while(i<=100){
	sum += i;
	i++;
}

document.write("<h1>1부터 100까지의 합은 " + sum + "입니다.</h1>");

i=1; // 초기값
while(i < 10){
	var j = 7 * i;
	document.write("<p>7 x " + i + " = " + j + "</p>");
	i++;
}

i=1; // 초기값
do{
	var j = 7 * i;
	document.write("<p>7 x " + i + " = " + j + "</p>");
	i++;
}while(i<10);
