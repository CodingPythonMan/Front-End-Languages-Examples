function insertQuestion(){
	//내용을 입력받는 대화상자
	var q = prompt("사칙연산의 수식을 입력하세요. (예: 100+50)", "");
	
	//입력받은 문자열을 수식으로 변환한다.(내장함수 사용)
	var answer = eval(q);
	
	//사용자가 입력한 질문(q)와 계산결과(answer)를
	//하나의 문자열로 연결한다.
	var result = q + "=" + answer;
	
	//출력
	document.getElementById("question3").innerHTML = result;
}