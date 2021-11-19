/** printResult() 함수 안에서 호출된다. */
// 두 수를 더한 값을 리턴하여 주는 함수
function sum(x, y){
	var z = x + y;
	return z;
}

/** input type="button"이 클릭되었을 때 호출된다. */
function printResult(){
	// sum 함수를 호출하여 10+50의 결과를 리턴받는다.
	var result = sum(10, 50);
	
	// document.getElementById("question")
	// --> id가 "question" 인 태그요소
	var mytag = document.getElementById("question1");
	
	// ~의 안에 result 값을 넣는다. --> ~.innerHTML = result;
	// 이 요소의 안에는 "?"가 들어 있지만, 새롭게 지정된 result 값이
	// "?"를 지우고 자신이 그 자리를 차지한다.
	mytag.innerHTML = result;
}