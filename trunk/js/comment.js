function submitCommentForm(){
	// can check rq ca thang nao thi de id no vao da
	checkRequireds('title,comment');
	checkRate();
	if(isFormValid()){
		var title = $('#title').val();
		var comment = $('#comment').val();
		var rate = $('input[name$="vote"]').val();
		$.post("add_review.php", { title: title, comment : comment, rate : rate},
		        function(result){
		            //if the result is 1  
		            if(result == 1){  
						location.href = document.URL;  
		            }else{
						alert('error while adding comment. Please email us at green.travel@gmail.com');
		            }  
		    });
	}
}

function checkRate() {
	var starRate = $('input[name$="vote"]').val();
	
	if (starRate ==0) {
		$("span#vote").html("Required");
		$("span#vote").addClass('err');
		$("span#vote").css("display", "inline");
	} else {
		$("span#vote").html("");
		$("span#vote").removeClass('err');
		$("span#vote").css("display", "none");
	}
}

function isEmpty(id) {
	var temp = $('#'+id).val();
			 if (temp == '') {
				 $('#'+id).addClass('errorInput');
				 $('span#'+id).addClass('err');
				 $('span#'+id).html("Required field");
				 $('span#'+id).css("display", "inline");
			 } else {
				if (countErrorInput() ==1  && $('span#'+id).attr('class') == "err") {
				$("#summary_error").html("");
				}
				 $('#'+id).removeClass('errorInput');
				 $('span#'+id).removeClass('err');
				 $('span#'+id).html("");
				 $('span#'+id).css("display", "none");
			 }
}

function checkRequireds(fieldIds) {
	fieldIds = fieldIds.replace(/ /g, "");
	var arrField = fieldIds.split(",");
	for ( var i = 0; i < arrField.length; i++) {
		if ($('#' + arrField[i]).attr('class') != "errorInput") {
		var element = $('#' + arrField[i]);
		var spanElement = $('span#' + arrField[i]);
		if (element.val().length < 1) {
			$(element).removeClass(element.attr('class'));
			$(element).addClass('errorInput');
			$(spanElement).addClass('err');
			$(spanElement).html("Required field");
			$(spanElement).css("display", "inline");
		} else {
			$(element).removeClass('errorInput');
			$(spanElement).removeClass('err');
			$(spanElement).html("");
			$(spanElement).css("display", "none");
		}
		}
	}
}

/**
 * @author LongTran
 * */
function isFormValid() {
	
	var fields = $('span');
	var hasError = false;
	fields.each(function() {
		if ($(this).attr('class') == "err") {
			hasError = true;
			return false;
		}
	});
	if (hasError) {
		$("#summary_error").html("Please corret current error(s)");
		return false;
	} else { 
		$("#summary_error").html("");
		return true; 
	}
}

function countErrorInput() {
	var iCounter = 0;
	var fields = $('span');
	fields.each(function() {
		if ($(this).attr('class') == "err") {
			iCounter++;
		}
	});
	return iCounter;
}