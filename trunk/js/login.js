function toggleLogin(){
	$("#login_username").val("");
	$("#login_password").val("");
    $("#login").toggle();
}

function authenticate() {

$.post("authenticate.php", { username: username},
	        function(result){
	            //if the result is 1  
	            if(result == 1){  
	                //show that the username is available  
	            	$("#username").addClass('errorInput');
	        		$("span#username").html("Username exists");
	        		$("span#username").css("display", "inline");  
	            }else{
									
	                //show that the username is NOT available  
	            	$("#username").removeClass('errorInput');
	        		$("span#username").html("");
	        		$("span#username").css("display", "none");
					
	            }  
	    });  
}

	



