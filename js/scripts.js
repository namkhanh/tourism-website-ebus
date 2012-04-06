$(document).ready(function() {
	$("#slideshow").css("overflow", "hidden");
	$("ul#slides").cycle({
		fx: 'fade,fadeZoom,zoom,toss',
		pause: 1,
		prev: '#prev',
		next: '#next'
	});
	$("#slideshow").hover(function() {
		$("ul#nav").fadeIn();
		},
			function() {
		$("ul#nav").fadeOut();
		});
});


function openDes(id){
	$("span#"+id).css("display", "inline");
}

function closeDes(id){
	$("span#"+id).css("display", "none");
}	

$(function() {
	var now = new Date();
	$( "#datepicker" ).datepicker({
		minDate: now,
	});
});
