function toggleLogin(){
        $("#login").toggle();
}

function close()
{
	window.close();
}
function focususername() {
  if (document.login.username.value == "Enter Your Username ..") {
    document.login.username.value = "";
  }
}
function blurusername() {
  if (document.login.username.value == "") {
    document.login.username.value = "Enter Your Username ..";
    document.login.sub.value = "Login";
    document.login.sub.disabled = true;
  }
  else {
    var username = document.login.username.value;
    if (username.length >= 10) {
      document.login.sub.value = "Login as " + username.substring(0,10) + " ..";
    }
    else {
      document.login.sub.value = "Login as " + username + "";
    }
  }
}
function focuspassword() {
  if (document.login.password.value == "Password") {
    document.login.password.value = "";
    if (document.login.username.value != "Enter Your Username ..") {
      document.login.sub.disabled = false;
    }
  }
}
function blurpassword() {
  if (document.login.password.value == "") {
    document.login.password.value = "Password";
    document.login.sub.disabled = true;
  }
}
