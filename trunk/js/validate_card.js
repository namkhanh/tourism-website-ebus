function validateCard()
{
	var c_number = document.forms["card"]["c_number"].value;
	var s_code = document.forms["card"]["s_code"].value;
	var message = "";
	var error = new Boolean();
	
	if (c_number == null || c_number =="") {
		message = message + "- Card Number cannot be empty" + "\n";
		error = true;
	} else if (c_number.length != 16 ) {
		message = message + "- Card Number must contain 16 numbers" + "\n";
		error = true;
	} else if (isNaN(c_number)) {
		message = message + "- Card Number must contain 16 numbers" + "\n";
		error = true;		
	}
	
	if (s_code == null || s_code =="") {
		message = message + "- Security code cannot be empty" + "\n";
		error = true;		
	} else if (s_code.length != 3) {
		message = message + "- Security code must contains 3 numbers" + "\n";
		error = true;		
	} else if (isNaN(s_number)) {
		message = message + "- Security code must contains 3 numbers" + "\n";
		error = true;		
	}
	
	if (error == true) {
		alert(message);
		return false;
	}
}