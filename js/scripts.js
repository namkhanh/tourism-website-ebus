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
	var year100 = yearNow - 100;
	var yearRange = year100 + ':' + limitYear;
	$( "#dob" ).datepicker({
		dateFormat:"dd/mm/yy",
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


			$(function() {
				
				$('#UploadImages').uberuploadcropper({
					//---------------------------------------------------
					// uploadify options..
					//---------------------------------------------------
					'debug'		: true,
					'action'	: 'upload.php',
					'params'	: {},
					'allowedExtensions': ['jpg','jpeg','png','gif'],
					//'sizeLimit'	: 0,
					//'multiple'	: true,
					//---------------------------------------------------
					//now the cropper options..
					//---------------------------------------------------
					'aspectRatio': 1.5, 
					'allowSelect': false,			//can reselect
					'allowResize' : true,			//can resize selection
					'setSelect': [ 0, 0, 300, 200 ],	//these are the dimensions of the crop box x1,y1,x2,y2
					//'minSize': [ 100, 100 ],		//if you want to be able to resize, use these
					//'maxSize': [ 100, 100 ],
					//---------------------------------------------------
					//now the uber options..
					//---------------------------------------------------
					'folder': 'uploads/',			// only used in uber, not passed to server
					'cropAction': 'crop.php',		// server side request to crop image
					'onComplete': function(imgs,data){ 
						var $PhotoPrevs = $('#PhotoPrevs');

						for(var i=0,l=imgs.length; i<l; i++){
							$PhotoPrevs.append('<img width ="300" height="200" src="uploads/'+ imgs[i].filename +'?d='+ (new Date()).getTime() +'" />');
							$PhotoPrevs.append('<input type="hidden" name="newImg" value="uploads/'+ imgs[i].filename +'?d='+ (new Date()).getTime() +'" />');
						}
					}
				});
				
			});