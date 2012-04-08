function checkUser(element){
	var tempUser = $("#username").val();
	if(tempUser.length < 5){
		$("#username").addClass('errorInput');
		$("#display_error").html("phai hon 5 chu so");
		$("#display_error").css("display", "inline");
	}else{
		$("#username").removeClass('errorInput');
		$("#display_error").html("");
		$("#display_error").css("display", "none");
	}
}