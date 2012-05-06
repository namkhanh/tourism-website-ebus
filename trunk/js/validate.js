function validateCard()
{
	var c_number = document.forms["card"]["c_number"].value;
	var s_code = document.forms["card"]["s_code"].value;
	var message = "";
	var valid = new Boolean();
	valid = true;
	
	if (c_number !== "") {
		if (c_number.length == 16) {
			if (isNaN(c_number)){
				message = message + "- Credit Card Number must contain 16 numbers 1" + "\n";
				valid = false;
			}
		} else {
			message = message + "- Credit Card Number must contain 16 numbers" + "\n";
			valid = false;
		}
	} else {
		message = message + "- Credit Card Number cannot be empty" + "\n";
		valid = false;
	}
			
	if (s_code !== "") {
		if (s_code.length == 3) {
			if (isNaN(s_code)){
				message = message + "- Security Code must contain 3 numbers" + "\n";
				valid = false;
			}
		} else {
			message = message + "- Security Code must contain 3 numbers" + "\n";
			valid = false;
		}
	} else {
		message = message + "- Security Code cannot be empty" + "\n";
		valid = false;
	}

	if (valid == false) {
		alert(message);
		return false;
	}
}

function validateBooking() 
{
	var numVisitor = document.forms["booking"]["numVisitor"].value;
	var transportID = document.forms["booking"]["transportID"].value;
	var date = document.forms["booking"]["date"].value;
	
	var message = "";
	var valid = new Boolean();
	valid = true;

	if (numVisitor == "0") {
		message = message + "- Please select Number of Visitor(s)" + "\n";
		valid = false;	
	}
	
	if (transportID == "0") {
		message = message + "- Please select Transportation" + "\n";
		valid = false;
	}
	
	if (date == "") {
		message = message + "- Please select Date of Departure" + "\n";
		valid = false;
	}
	
	if (valid == false) {
		alert(message);
		return false;
	}
}

function validateContactForm() 
{
	var name = document.forms["contactform"]["name"].value;
	var email = document.forms["contactform"]["email"].value;
	var mess = document.forms["contactform"]["message"].value;
	
	var message = "";
	var valid = new Boolean();
	valid = true;
	
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	
	if (name == ""){
		message = message + "- Your name cannot be empty" + "\n";	
		valid = false;
	}
	
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
		message = message + "- Your email is not valid" + "\n";
		valid = false;		
  	}
		
	if (mess == ""){
		message = message + "- You must fill out your message" + "\n";	
		valid = false;
	}
	
	if (valid == false) {
		alert(message);
		return false;
	}
}

function validateSearch() 
{
	var destination = document.forms["search"]["destination"].value;
	var price = document.forms["search"]["price"].value;
	var date = document.forms["search"]["date"].value;
	
	var message = "";
	var valid = new Boolean();
	valid = true;

	if (destination == "0") {
		message = message + "- Please select Destination" + "\n";
		valid = false;	
	}
	
	if (price == "0") {
		message = message + "- Please select Price" + "\n";
		valid = false;
	}
	
	if (date == "") {
		message = message + "- Please select Date of Departure" + "\n";
		valid = false;
	}
	
	if (valid == false) {
		alert(message);
		return false;
	}	
}