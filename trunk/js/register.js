function checkUser() {
	var username = $('#username').val();
	checkRequired("#username");
	if(username.length < 5) {
		$("#username").addClass('errorInput');
		$("#username").removeClass('bt');
		$("#user_error").html("Username must be at least 6 characters");
		$("#user_error").css("display", "inline");
	} else {
		 //use ajax to run the check
		 $("#loading").show();
		 sleep(10);
	    $.post("checkUserExist.php", { username: username},
	        function(result){
	    	$("#loading").hide();
	            //if the result is 1  
	            if(result == 1){  
	                //show that the username is available  
	            	$("#username").addClass('errorInput');
	            	$("#username").removeClass('bt');
	        		$("#user_error").html("Username exists");
	        		$("#user_error").css("display", "inline");  
	            }else{  
	                //show that the username is NOT available  
	            	$("#username").removeClass('errorInput');
	        		$("#user_error").html("");
	        		$("#user_error").css("display", "none"); 
	            }  
	    });  
	}
}

function sleep(delay)
{
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function checkPw() {
	var pw = $("#password").val();
	var retype = $("#retypepassword").val();
	
	if(pw.length < 5 && retype.length < 5 ) {
		$("#retypepassword").addClass('errorInput');
		$("#password").addClass('errorInput');
		$("#repw_error").html("Password must be at least 6 characters");
		$("#repw_error").css("display", "inline");
	} else {
		   if(pw != retype) {
			   $("#retypepassword").addClass('errorInput');
			   $("#password").addClass('errorInput');
			   $("#repw_error").html("Not Matching password");
			   $("#repw_error").css("display", "inline");
		   } else {
			   $("#retypepassword").removeClass('errorInput');
			   $("#password").removeClass('errorInput');
			   $("#repw_error").html("");
			   $("#repw_error").css("display", "none");
		   }
	}
}

/*function checkRePw() {
	var pw = $("#password").val();
	var retype = $("#retypepassword").val();
	
	if(pw.length == '' && retype.length=='') {
		$("#retypepassword").addClass('errorInput');
		$("#password").addClass('errorInput');
		$("#repw_error").html("Password must be at least 6 characters");
		$("#repw_error").css("display", "inline");
	} else if (pw.length < 5 && retype.length < 5) {
		$("#retypepassword").addClass('errorInput');
		$("#password").addClass('errorInput');
		$("#repw_error").html("Password must be at least 6 characters");
		$("#repw_error").css("display", "inline");
	} else {
		   if(pw != retype) {
			   $("#retypepassword").addClass('errorInput');
			   $("#password").addClass('errorInput');
			   $("#repw_error").html("Not Matching password");
			   $("#repw_error").css("display", "inline");
		   } else {
			   $("#retypepassword").removeClass('errorInput');
			   $("#password").removeClass('errorInput');
			   $("#repw_error").html("");
			   $("#repw_error").css("display", "none");
		   }
	}
}*/

function isEmail(){
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var address = $("#email").val();
	   if(reg.test(address) == false) {
			$("#email").addClass('errorInput');
			$("#email_error").html("Invalid email address");
			$("#email_error").css("display", "inline");
	   } else {
			$("#email").removeClass('errorInput');
			$("#email_error").html("");
			$("#email_error").css("display", "none");
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
				 $('span#'+id).html("");
				 $('span#'+id).css("display", "none");
			 }
}

function submitForm(){

	// can check rq ca thang nao thi de id no vao da
	checkRequireds('username,password');
//	if(isFormValid()){
////		$('form#reg').submit();
//		alert('ac');
//	}
}

function isFormValid() {
	var fields = $('input[type=text], input[type=password], input[type=email],  textarea, select');
	var hasError = false;
	var fields = $('input[type=text], input[type=password], input[type=email],  textarea');
	fields.each(function() {
		if ($(this).attr('class').indexOf('errorInput') >= 0) {
			hasError = true;
			return false;
		}
	});
	if (hasError) {
		return false;
	} else { return true; }
}

function checkRequired(element) {
	var value = $(element).val();
	if (value.length < 1) {
		$(element).addClass('errorInput');
		return false;
	} else {
		$(element).removeClass('errorInput');
	}
	return true;
}

function checkRequireds(fieldIds) {
	fieldIds = fieldIds.replace(/ /g, "");
	var arrField = fieldIds.split(",");
	for ( var i = 0; i < arrField.length; i++) {
		var element = $('#' + arrField[i]);
		if (element.val().length < 1) {
			$(element).addClass('errorInput');
		} else {
			$(element).removeClass('errorInput');
		}
	}
}

