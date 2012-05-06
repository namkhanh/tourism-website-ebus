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
	var limitYear = yearNow -10;
	var year100 = yearNow - 80;
	var yearRange = year100 + ':' + limitYear;
	$( "#dob" ).datepicker({
		dateFormat:"dd-mm-yy",
		changeMonth: true,
		changeYear: true,
		yearRange: yearRange,
	});
});

$(function(){
	$("#starify").children().not(":input").hide();
	// Create stars from :radio boxes
	$("#starify").stars({
		cancelShow: false,
	});
});


function confirmDeleteTour(t_name,tourID) {
	var answer = confirm("Are you sure to delete " + t_name + " ?");
	if (answer) {
		 $.post("delete_tour.php", { tourID: tourID},
			        function(result){
			            // if the result is 1
			            if(result == 1){  
			            alert("Deleted " + t_name);
			            location.href = document.URL;
			            } else {
			            alert("Not sucessfully delete " + t_name);
			            }
			        }); 
	}
}

function confirmDeleteEbook(name,ebookID) {
	var answer = confirm("Are you sure to delete " + name + " ?");
	if (answer) {
		 $.post("delete_ebook.php", { ebookID: ebookID},
			        function(result){
			            // if the result is 1
			            if(result == 1){  
			            alert("Deleted " + name);
			            location.href = document.URL;
			            } else {
			            alert("Not sucessfully delete " + name);
			            }
			        }); 
	}
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));