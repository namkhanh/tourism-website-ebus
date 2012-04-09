function checkUser() {
	var tempUser = $("#username").val();
	if(tempUser.length < 5) {
		$("#username").addClass('errorInput');
		$("#user_error").html("Username must be at least 6 characters");
		$("#user_error").css("display", "inline");
	} else {
		$("#username").removeClass('errorInput');
		$("#user_error").html("");
		$("#user_error").css("display", "none");
	}
}

function checkPw() {
	var tempUser = $("#password").val();
	if(tempUser.length < 5) {
		$("#password").addClass('errorInput');
		$("#pw_error").html("Password must be at least 6 characters");
		$("#pw_error").css("display", "inline");
	} else {
		$("#password").removeClass('errorInput');
		$("#pw_error").html("");
		$("#pw_error").css("display", "none");
	}
}

function isMatchPw(){
	var pw = $("#password").val();
	var retype = $("#retypepassword").val();
			
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