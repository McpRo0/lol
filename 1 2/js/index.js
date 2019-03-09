// function helloWorld () {
// 	var hello = "hello";
// 	console.log(hello);
// }
// helloWorld() // hello
// console.log(hello)
////////////////////////////////////////////////////////////////////////////
// function helloWorld () {
// 	hello = "hello";
// 	console.log(hello);
// }
// helloWorld(); // hello
// console.log(hello);
////////////////////////////////////////////////////////////////////////////
// var string = "Some string";
// function myFunc () {
// 	var string = "String #2"
// }
// myFunc();
// console.log(string)
/////////////////////////////////////////////////////
// var result = prompt("Введите число", "");
// kv(result);
// function kv(number) {
// 	if (number.indexOf(",") > - 1) {
// 		alert("Achtung");
// 		kv(number)
// 	}
// 	console.log(number*number)
// }
///////////////////////////////////////////////
check();
function check(){
	var result = prompt("Введите число","")
	if (result.indexOf(",") > -1) {
		alert("Используйте вместо запятой - точку!")
		check();
	}
	else{
		kv(result)
	}
}
function kv(number) {
	console.log(number*number)
}