// 결과 : "NaN"
var a = Number("a");
document.write("<h1>a=" + a + "</h1>");

// "NaN" + 1 지만 "NaN1"이 아닌 "NaN"이 된다.
var a_sum = a+1;
document.write("<h1>a_sum=" + a_sum + "</h1>");

// "NaN" + "str"이므로 "NaNstr"이 된다.
var a_str = a + "str";
document.write("<h1>a_str=" + a_str + "</h1>");