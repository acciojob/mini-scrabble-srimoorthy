//your code here
let inp = document.getElementById("evaluatedText");
let cnt = document.getElementById("letterCount");

inp.addEventListener("input",function(){
	cnt.textContent = inp.value.length;
});
