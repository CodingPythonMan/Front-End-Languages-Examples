var point = 78;

if (point > 70 && point <= 80) {
	if (point > 77) {
		document.write("<h1>C+ 입니다.</h1>");
	} else if (point < 74) {
		document.write("<h1>C- 입니다.</h1>");
	} else {
		document.wrtie("<h1>C0 입니다.</h1>");
	}
}

var sum1 = 0;
var sum2 = 0;
for (var i = 1; i <= 100; i++) {
	//2로 나눈 나머지가 0이면 짝수
	if (i % 2 == 0) {
		sum1 += i;
	} else {
		sum2 += i;
	}
}
document.write("<h1>짝수들의 합 = " + sum1 + "</h1>");
document.write("<h1>홀수들의 합 = " + sum2 + "</h1>");


for (var i = 2; i <= 9; i++) {
	document.write("<h1>" + i + "단</h1><ul>");


	for (var j = 1; j < 10; j++) {
		var k = i * j;
		var result = i + " x " + j + " = " + k;
		document.write("<li>" + result + "</li>");
	}
	document.write("</ul>");
}

document.write("<table width='80%' border='1' style='margin:auto'; text-align: 'center'>");
for (var i = 0; i < 6; i++) {
	document.write("<tr>");
	
	for(var j=0; j<7; j++){
		var txt = "(" + i + ","	+ j + ")";
		document.write("<td>" + txt + "</td>");	
	}
	document.write("</tr>");
}
document.write("</table>");