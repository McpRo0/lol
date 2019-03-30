// $("#result").click(function(event) {
// 		$("#result").text(result = 0);
// 	});
// 	$("#plus").click(function(event) {
// 		$("#result").text(++result);
// 	});
// 	$("#minus").click(function(event) {
// 		$("#result").text(--result);
// 	});</g>
var colors = ["red","green","blue","orange","black","white"]
var currentClass = 0;
$("#btn").click(function(event) {
	if (currentClass < colors.length) {
		$("div").removeClass(colors[currentClass - 1])
		$("div").addClass(colors[currentClass++])
	}
	else{
		$("div").removeClass(colors[currentClass - 1])
		$("div").addClass(colors[currentClass=0])
	}
});

