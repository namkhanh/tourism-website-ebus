<?php
ob_start();
include (dirname(__FILE__).'/database_config.php');

$username = $_POST["username"]; 
$email = $_POST["email"]; 
$password = $_POST["password"]; 
$firstname = $_POST["firstname"]; 
$lastname = $_POST["lastname"]; 
$temp = date_create($_POST["dob"]);
$dob= date_format($temp,"Y-m-d");
$street = $_POST["street"]; 
$city = $_POST["city"]; 
$nationality = $_POST["nationality"]; 

// Create a unique  activation code:
$activation = md5(time().md5($username));

$query_insert_user = "INSERT INTO customer (username,email,password,activation,firstname,lastname,dob,street,city,nationality) VALUES ( '$username', '$email', '$password', '$activation','$firstname','$lastname','$dob','$street','$city','$nationality')";

$result_insert_user = mysql_query($query_insert_user);
	if (!$result_insert_user) {
		$flag = "false";
	} else {
		//Get activation.php URI
		$activationURI = str_replace("registration.php","activate.php", $_SERVER['SERVER_NAME'].$_SERVER['PHP_SELF']);
		
		// Send the email:
		$message = "Hi $firstname $lastname, \n\n Thank you for your registration at Green Travel. To activate your account, please click on this link:\n\n";
		$message .= "http://".$activationURI . '?username=' . $username . "&key=$activation";
		mail($email, 'Registration Confirmation', $message,'From:Green Travel');
		 $flag = "true";
	}
mysql_close($db_con);
header("Location: registration_result.html?rs=" . $flag . "&email=" .$email);	

?>

