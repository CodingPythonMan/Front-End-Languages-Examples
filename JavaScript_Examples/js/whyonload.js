/** Javascript 구문의 실행 시점
--------------------------------
1) HTML페이지는 웹 브라우저에 의해서 맨 처음부터 한 줄씩 읽혀서 실행된다.
2) doPrint()라는 함수를 호출하라는 명령어를 만나면 그 즉시, 해당 함수를 호출한다.
3) doPrint() 함수 안에서는 id속성값이 "myid"인 태그요소를 제어하려고 한다.
4) 하지만 웹 브라우저에게는 아직 HTML태그가 읽혀진 것이 아닌 시점이기 때문에 그 요소를 찾지 못하고 에러가 난다.
5) doPrint() 함수가 온전하게 실행되기 위해서는 이 함수에서 제어하려는 "myid"요소가 웹 브라우저에게 인식된 이후에 호출되어야 한다.

결론 : 제어 하려는 태그가 인식된 이후에 Javascript 함수를 호출해야 한다는 제약은, Javascript소스와 HTML태그가 반드시 순서를 지켜가면서,
섞어서 코딩해야 한다는 제약을 가져온다.(스파게티 소스) onload 이벤트는 이러한 제약을 해결하고 Javascript 코드와 HTML 태그를 분리할 수 있게 해준다.
*/

function doPrint(num){
	var msg = "doPrint()가 " + num + "회 실행되었습니다.";
	alert(msg);
	document.getElementById("myid").innerHTML = msg;
}

// (1)~(4)
doPrint(1);