var showLogin=true;
var showSignout=true;
function toggleLogin() {
	$("#login_username").val("");
	$("#login_password").val("");
	$("#login_failed").css("display", "none");
	if (showLogin == true) {
		$("#fade").css("display", "inline");
		$('#login').show();
		showLogin=false;
	} else {
		showLogin=true;
		$("#fade").css("display", "none");
		$('#login').hide();
	}
	
}

function toggleSignout(){
	if (showSignout == true) {
		$("#fade").css("display", "inline");
		$('#signout').show();
		showSignout=false;
	} else {
		showSignout=true;
		$("#fade").css("display", "none");
		$('#signout').hide();
	}
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
				location.href = document.URL;
			} else {
				//NOT sucessful authentication 
				$("#login_failed").css("display", "inline");
			}
		});
	}
}


	



