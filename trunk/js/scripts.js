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
		altField: "#alternative",
		dateFormat:"dd MM, yy",
		altFormat: "DD",
		minDate: now,
	});
});

$(function() {
	var yearNow = new Date().getFullYear();
	var year100 = yearNow - 100;
	var yearRange = year100 + ':' + yearNow;
	$( "#dob" ).datepicker({
		dateFormat:"dd/mm/yy",
		changeMonth: true,
		changeYear: true,
		yearRange: yearRange,
	});
});

$(function(){
	$("#avg").children().not(":input").hide();
	$("#starify").children().not(":input").hide();
	
	// Create stars from :radio boxes
	$("#starify").stars({
		cancelShow: false
	});
	
	$("#avg").stars({
		cancelShow: false
	});
});
