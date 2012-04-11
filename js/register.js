function checkUser() {
	var username = $('#username').val();
	if(username.length < 5) {
		$("#username").addClass('errorInput');
		$("span#username").html("Username must be at least 6 characters");
		$("span#username").css("display", "inline");
	} else {
	    $.post("checkUserExist.php", { username: username},
	        function(result){
	            //if the result is 1  
	            if(result == 1){  
	                //show that the username is available  
	            	$("#username").addClass('errorInput');
	        		$("span#username").html("Username exists");
	        		$("span#username").css("display", "inline");  
	            }else{  
	                //show that the username is NOT available  
	            	$("#summary_error").html("");
	            	$("#username").removeClass('errorInput');
	        		$("span#username").html("");
	        		$("span#username").css("display", "none"); 
	            }  
	    });  
	}
}

function checkPw() {
	var pw = $("#password").val();
	var retype = $("#retypepassword").val();
	
	if(pw.length < 5 && retype.length < 5 ) {
		$("#retypepassword").addClass('errorInput');
		$("#password").addClass('errorInput');
		$("span#retypepassword").html("Password must be at least 6 characters");
		$("span#retypepassword").css("display", "inline");
	} else {
		   if(pw != retype) {
			   $("#retypepassword").addClass('errorInput');
			   $("#password").addClass('errorInput');
			   $("span#retypepassword").html("Not Matching password");
			   $("span#retypepassword").css("display", "inline");
		   } else {
			   $("#retypepassword").removeClass('errorInput');
			   $("#password").removeClass('errorInput');
			   $("span#retypepassword").html("");
			   $("span#retypepassword").css("display", "none");
		   }
	}
}

function isEmail() {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = $("#email").val();
	if (address == '') {
		$("#email").addClass('errorInput');
		$("span#email").html("Required field");
		$("span#email").css("display", "inline");
	} else {
		if (reg.test(address) == false) {
			$("#email").addClass('errorInput');
			$("span#email").html("Invalid email address");
			$("span#email").css("display", "inline");
		} else {
			$("#email").removeClass('errorInput');
			$("span#email").html("");
			$("span#email").css("display", "none");
		}
	}
}

function isEmpty(id) {
	var temp = $('#'+id).val();
			 if (temp == '') {
				 $('#'+id).addClass('errorInput');
				 $('span#'+id).html("Required field");
				 $('span#'+id).css("display", "inline");
			 } else {
				 $('#'+id).removeClass('errorInput');
				 $("#summary_error").html("");
				 $('span#'+id).html("");
				 $('span#'+id).css("display", "none");
			 }
}

function submitForm(){
	// can check rq ca thang nao thi de id no vao da
	checkRequireds('username,password,retypepassword,email,firstname,lastname,dob,street,city');
	
	if(isFormValid()){
		$('form#reg').submit();
	}
}


function checkRequireds(fieldIds) {
	fieldIds = fieldIds.replace(/ /g, "");
	var arrField = fieldIds.split(",");
	for ( var i = 0; i < arrField.length; i++) {
		var element = $('#' + arrField[i]);
		var spanElement = $('span#' + arrField[i]);
		if (element.val().length < 1 && $('#' + arrField[i]).attr('class') != "errorInput") {
			$(element).addClass('errorInput');
			$(spanElement).html("Required field");
			$(spanElement).css("display", "inline");
		} else {
			$(element).removeClass('errorInput');
			$(spanElement).html("");
			$(spanElement).css("display", "none");
		}
	}
}

/**
 * @author LongTran
 * */
function isFormValid() {
	checkUser();
	var fields = $('input[type=text], input[type=password], input[type=email],  textarea, select');
	var hasError = false;
	fields.each(function() {
		if ($(this).attr('class') == "errorInput") {
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