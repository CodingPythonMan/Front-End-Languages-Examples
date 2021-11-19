// 두 수를 더한 값을 리턴하여 주는 함수
function sum(x, y){
	var z = x + y;
	return z;
}

/** (1) id가 question인 요소안에 10+50의 결과를 지정한다. */
function showResult(){
	var result = sum(10, 50);
	var red_result = "<font color='red'>" + result + "</font>";
	document.getElementById("question2").innerHTML = red_result;
}

/** (2) id가 question인 요소 안에 "?"를 지정한다. */
function hideResult(){
	document.getElementById("question2").innerHTML = "?";
}