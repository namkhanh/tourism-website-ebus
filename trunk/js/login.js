function toggleLogin(){
	$("#login_username").val("");
	$("#login_password").val("");
	$("#login_failed").css("display", "none");
    $("#login").toggle();
}

function toggleSignout(){
    $("#signout").toggle();
}

function authenticate() {
	var username = $('#login_username').val();
	var password = $('#login_password').val();
	if (username.length < 1 || password.length < 1) {
		//NOT sucessful authentication 
		$("#login_failed").css("display", "inline");
	} else {
		$.post("authenticate.php", {
			username : username,
			password : password
		}, function(result) {
			//if the result is 1
			if (result == 1) {
				//sucessful authentication 
				$("#login_failed").css("display", "none");
			} else {
				//NOT sucessful authentication 
				$("#login_failed").css("display", "inline");
			}
		});
	}
}


	



