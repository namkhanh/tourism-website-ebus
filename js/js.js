
$(function() {
	  $('#saveBt').click(function() {
		  checkRequireds('namegroup,fullname,username2,password2,passwordver,email,captcha_code,phone');
		  if(isFormValid()){
			   checkEmail('#email');
			   if(isFormValid()){
				   checkEmailExist();
				   if(isFormValid()){
					  comparPassword();
					  if(isFormValid()){
						  checkUser();
						  if(isFormValid()){
							  checkPhone();
							  if(isFormValid()){
								  $('form#registerForm').submit();
							  }
						  }
					  }
				   }
			   }
		   }
	  });

	  $('#closeBt').click(function() {
		 	var fields = $('input[type=text], input[type=password], input[type=email],  textarea');
			fields.each(function() {
				$(this).removeClass('errorInput');
			});
	  });

	  $('#saveBt_sp').click(function() {
		  checkRequireds_sp('name_sp,email_sp,phone_sp,department_sp,content_sp,captcha_sp');
		  if(isFormValid()){
			  checkEmail_sp('#email_sp');
			  if(isFormValid()){
				  checkPhone_sp();
				  if(isFormValid()){
					  $('form#supportForm').submit();
				  }
			  }
		  }
	  });

});

function checkVailUserName(){
  regex= /^[0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/;
  str= $('#username2').val();
  result= regex.test(str);
  if( result ){
	  checkError();
  }else{
	  $("#username2").addClass('errorInput');
	  $("#message").removeClass("w-msg-info")
      $("#message").addClass("w-msg-error");
	  $("#message").html("Tên tài khoản không đúng. Tên tài khoản không gồm ký tự đặc biệt hoặc là chữ số");
  }
}

function checkPhone(){
	if($.isNumeric($('#phone').val())){
		checkError();
	}else{
		$("#phone").addClass('errorInput');
		$("#message").removeClass("w-msg-info")
		$("#message").addClass("w-msg-error");
		$("#message").html("Số điện thoại phải là chữ số(0-9)");
	}
}

function checkPhone_sp(){
	if($.isNumeric($('#phone_sp').val())){
		checkError();
	}else{
		$("#phone_sp").addClass('errorInput');
		$("#message_sp").removeClass("w-msg-info")
		$("#message_sp").addClass("w-msg-error");
		$("#message_sp").html("Số điện thoại phải là chữ số(0-9)");
	}
}


function checkUser() {
	var strURL = 'php/ProcessUser.php';
	var userName = $("#username2").val();
	if (userName.trim() == '' || userName == null) {
		return false;
	} else {
		$.ajax({
			url : strURL,
			type : 'POST',
			cache : false,
			async : false,
			data : 'checkUser=' + userName,
			success : function(string) {
				var getData = $.parseJSON(string);
				if (getData == 'F') {
					$("#username2").addClass('errorInput');
					$("#message").removeClass("w-msg-info")
	                $("#message").addClass("w-msg-error");
					$("#message").html("Tên tài khoản này đã có người sử dụng.");
				}else{
					checkError();
				}
			},
			error : function() {
//				alert('Có lỗi xảy ra, Vui lòng thông báo cho chúng tôi. /n Mã lỗi 5567');
			}
		});
	}
}

function checkEmailExist() {
	var strURL = 'php/ProcessUser.php';
	var email = $("#email").val();
	if (email.trim() == '' || email == null) {
		return false;
	} else {
		$.ajax({
			url : strURL,
			type : 'POST',
			cache : false,
			async : false,
			data : 'checkEmailExist=' + email,
			success : function(string) {
				var getData = $.parseJSON(string);
				if (getData == 'F') {
					$("#email").addClass('errorInput');
					$("#message").removeClass("w-msg-info")
	                $("#message").addClass("w-msg-error");
					$("#message").html("Địa chỉ Email đã đăng ký, Vui lòng chọn email khác.");
				}else{
					checkError();
				}
			},
			error : function() {
//				alert('Có lỗi xảy ra, Vui lòng thông báo cho chúng tôi. /n Mã lỗi 5560');
			}
		});
	}
}

function comparPassword(){
	var pass = $("#password2").val();
	var repass = $("#passwordver").val();
	if (pass != repass) {
		$("#passwordver").addClass('errorInput');
		$("#message").removeClass("w-msg-info")
        $("#message").addClass("w-msg-error");
		$("#message").html("Mật khẩu và mật khẩu nhập lại không giống nhau.");
	} else {
		checkError();
	}
}

function parseNumber(number) {
	number = number + "";
	number = number.replace(/\,/g,"");
	if (number != null && number.length > 0) {
		if (!isNaN(number)) {
			return parseFloat(number);
		}
	}
	return null;
}

function formatNumber(number) {
	number = parseNumber(number);
	if (number != null) {
		number = number + "";
		var pattern = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
		return number.replace(pattern, "$1,");
	}
	return "";
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
			$("#message").removeClass("w-msg-info")
	        $("#message").addClass("w-msg-error");
			$("#message").html("Vui lòng nhập đầy đủ thông tin.");
		} else {
			$(element).removeClass('errorInput');
			checkError();
		}
	}
}

function checkRequireds_sp(fieldIds) {
	fieldIds = fieldIds.replace(/ /g, "");
	var arrField = fieldIds.split(",");
	for ( var i = 0; i < arrField.length; i++) {
		var element = $('#' + arrField[i]);
		if (element.val().length < 1) {
			$(element).addClass('errorInput');
			$("#message_sp").removeClass("w-msg-info")
	        $("#message_sp").addClass("w-msg-error");
			$("#message_sp").html("Vui lòng nhập đầy đủ thông tin.");
		} else {
			$(element).removeClass('errorInput');
			checkError();
		}
	}
}

function checkEmail_sp(element) {
	var isValid = true;
	var errMsg = '';
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if ($(element).val().length > 0 && !emailPattern.test($(element).val())) {
		$(element).addClass('errorInput');
		$("#message_sp").removeClass("w-msg-info")
        $("#message_sp").addClass("w-msg-error");
		$("#message_sp").html("Địa chỉ email sai định dạng.");
	} else {
		$(element).removeClass('errorInput');
		checkError();
	}
}

function checkEmail(element) {
	var isValid = true;
	var errMsg = '';
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if ($(element).val().length > 0 && !emailPattern.test($(element).val())) {
		$(element).addClass('errorInput');
		$("#message").removeClass("w-msg-info")
        $("#message").addClass("w-msg-error");
		$("#message").html("Địa chỉ email sai định dạng.");
	} else {
		$(element).removeClass('errorInput');
		checkError();
	}
}

function checkError(){
	var fields = $('input[type=text], input[type=password], input[type=email],  textarea, select');
	var hasError = false;
	fields.each(function() {
		if($(this).attr("id") != 'username' && $(this).attr("id") != 'password'&& $(this).attr("id") != 'query'){
			if ($(this).attr('class').indexOf('errorInput') >= 0) {
				hasError = true;
			}
		}
	});
	if (!hasError) {
		$("#message_sp").removeClass("w-msg-error")
        $("#message_sp").addClass("w-msg-info");
		$("#message_sp").html(
				"Hãy liên hệ với chúng tôi để đăng ký gói cước lớn hơn !");
	}
}

function checkError(){
	var fields = $('input[type=text], input[type=password], input[type=email],  textarea, select');
	var hasError = false;
	fields.each(function() {
		if($(this).attr("id") != 'username' && $(this).attr("id") != 'password'&& $(this).attr("id") != 'query'){
			if ($(this).attr('class').indexOf('errorInput') >= 0) {
				hasError = true;
			}
		}
	});
	if (!hasError) {
		$("#message").removeClass("w-msg-error")
        $("#message").addClass("w-msg-info");
		$("#message").html(
				"Hãy liên hệ với chúng tôi để đăng ký gói cước lớn hơn !");
	}
}

function isFormValid() {
	var fields = $('input[type=text], input[type=password], input[type=email],  textarea, select');
	var hasError = false;
	fields.each(function() {
		if($(this).attr("id") != 'username' && $(this).attr("id") != 'password'&& $(this).attr("id") != 'query'){
			if ($(this).attr('class').indexOf('errorInput') >= 0) {
				hasError = true;
				return false;
			}
		}
	});
	if (hasError) {
		return false;
	} else { return true; }
}

function isNumericKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}
