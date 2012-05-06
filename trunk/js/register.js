function checkUser() {
	var username = $('#username').val();
	if(username.length < 6) {
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
					if (countErrorInput() ==1  && $("#username").attr('class') == "errorInput") {
						$("#summary_error").html("");
					}				
	                //show that the username is NOT available  
	            	$("#username").removeClass('errorInput');
	        		$("span#username").html("");
	        		$("span#username").css("display", "none");
					
	            }  
	    });  
	}
}
function isEmpty(id) {
	var temp = $('#'+id).val();
			 if (temp == '') {
				 $('#'+id).addClass('errorInput');
				 $('span#'+id).html("Required field");
				 $('span#'+id).css("display", "inline");
			 } else {
				if (countErrorInput() ==1  && $('#'+id).attr('class') == "errorInput") {
				$("#summary_error").html("");
				}
				 $('#'+id).removeClass('errorInput');
				 $('span#'+id).html("");
				 $('span#'+id).css("display", "none");
			 }
}
function checkPw() {
	var pw = $("#password").val();
	var retype = $("#retypepassword").val();
	if (retype.length >0) {
		if(pw.length < 6 && retype.length < 6 ) {
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
					if (countErrorInput() ==2  && $("#password").attr('class') == "errorInput") {
						$("#summary_error").html("");
					}	
				   $("#retypepassword").removeClass('errorInput');
				   $("#password").removeClass('errorInput');
				   $("span#retypepassword").html("");
				   $("span#retypepassword").css("display", "none");
				   $("span#password").html("");
				   $("span#password").css("display", "none");
			   }
		}
	}
}

function checkRePw() {
	var pw = $("#password").val();
	var retype = $("#retypepassword").val();
	if (pw.length >0) {
		if(pw.length < 6 && retype.length < 6 ) {
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
					if (countErrorInput() ==2  && $("#password").attr('class') == "errorInput") {
						$("#summary_error").html("");
					}
				   $("#retypepassword").removeClass('errorInput');
				   $("#password").removeClass('errorInput');
				   $("span#retypepassword").html("");
				   $("span#retypepassword").css("display", "none");
				   $("span#password").html("");
				   $("span#password").css("display", "none");
			   }
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
			if (countErrorInput() ==1  && $("#email").attr('class') == "errorInput") {
				$("#summary_error").html("");
			}
			$("#email").removeClass('errorInput');
			$("span#email").html("");
			$("span#email").css("display", "none");
		}
	}
}

function submitForm(){
	// can check rq ca thang nao thi de id no vao da
	checkRequireds('username,password,retypepassword,email,firstname,lastname,dob,street,city');
	
	if(isFormValid()){
		$('form#registration').submit();
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
			$(spanElement).html("Required field");
			$(spanElement).css("display", "inline");
		} else {
			$(element).removeClass('errorInput');
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

function countErrorInput() {
	var iCounter = 0;
	var fields = $('input[type=text], input[type=password], input[type=email],  textarea, select');
	fields.each(function() {
		if ($(this).attr('class') == "errorInput") {
			iCounter++;
		}
	});
	return iCounter;
}

// Function to validate Date from 1900 to 2200
var dminyear = 1900;
var dmaxyear = 2200;
var chsep = "-";

function checkinteger(str1) {
	var x;
	for (x = 0; x < str1.length; x++) {
		// verify current character is number or not !
		var cr = str1.charAt(x);
		if (((cr < "0") || (cr > "9")))
			return false;
	}
	return true;
}

function getcharacters(s, chsep1) {
	var x;
	var Stringreturn = "";
	for (x = 0; x < s.length; x++) {
		var cr = s.charAt(x);
		if (chsep.indexOf(cr) == -1)
			Stringreturn += cr;
	}
	return Stringreturn;
}

function februarycheck(cyear) {
	return (((cyear % 4 == 0) && ((!(cyear % 100 == 0)) || (cyear % 400 == 0))) ? 29
			: 28);
}

function finaldays(nr) {
	for ( var x = 1; x <= nr; x++) {
		this[x] = 31
		if (x == 4 || x == 6 || x == 9 || x == 11) {
			this[x] = 30
		}
		if (x == 2) {
			this[x] = 29
		}
	}
	return this
}

function dtvalid(strdate) {
	var monthdays = finaldays(12)
	var cpos1 = strdate.indexOf(chsep)
	var cpos2 = strdate.indexOf(chsep, cpos1 + 1)
	var daystr = strdate.substring(0, cpos1)
	var monthstr = strdate.substring(cpos1 + 1, cpos2)
	var yearstr = strdate.substring(cpos2 + 1)
	strYr = yearstr
	if (strdate.charAt(0) == "0" && strdate.length > 1)
		strdate = strdate.substring(1)
	if (monthstr.charAt(0) == "0" && monthstr.length > 1)
		monthstr = monthstr.substring(1)
	for ( var i = 1; i <= 3; i++) {
		if (strYr.charAt(0) == "0" && strYr.length > 1)
			strYr = strYr.substring(1)
	}

	// The parseInt is used to get a numeric value from a string
	pmonth = parseInt(monthstr)
	pday = parseInt(daystr)
	pyear = parseInt(strYr)

	if (cpos1 == -1 || cpos2 == -1) {
		return false
	}
	if (monthstr.length < 1 || pmonth < 1 || pmonth > 12) {
		return false
	}
	if (daystr.length < 1 || pday < 1 || pday > 31
			|| (pmonth == 2 && pday > februarycheck(pyear))
			|| pday > monthdays[pmonth]) {
		return false
	}
	if (yearstr.length != 4 || pyear == 0 || pyear < dminyear
			|| pyear > dmaxyear) {
		return false
	}
	if (strdate.indexOf(chsep, cpos2 + 1) != -1
			|| checkinteger(getcharacters(strdate, chsep)) == false) {
		return false
	}
	return true
}

function validdate() {
	var crdt = $("#dob").val();
	if (dtvalid(crdt) == false) {
		$("#dob").removeClass($("#dob").attr('class'));
		$("#dob").addClass('errorInput');
		$("span#dob").html("Invalid date");
		$("span#dob").css("display", "inline");
	} else {
		if (countErrorInput() ==1  && $("#dob").attr('class') == "errorInput") {
			$("#summary_error").html("");
		}
		$("#dob").removeClass('errorInput');
		$("span#dob").html("");
		$("span#dob").css("display", "none");
	}
}