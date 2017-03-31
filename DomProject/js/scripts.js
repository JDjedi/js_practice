$(document).ready(function() {
	$("#button-1").click(function(){
		$(".container").empty();
		$(".container").append("<p>You pressed the first button!</p>");
	});

	$("#button-2").click(function(){
		$(".container").empty();
		$(".container").append("<p>This is the second button!</p>");
	});

	$("#button-3").click(function(){
		$(".container").empty();
		$(".container").append("<p>This is the third and final button.</p>");
	});
});