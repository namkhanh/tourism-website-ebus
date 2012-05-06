<?php
ob_start();
session_start();

include (dirname(__FILE__).'/database_config.php');

//get the username
$username = mysql_real_escape_string($_POST['username']);

//get the password
$password = mysql_real_escape_string($_POST['password']);

$result = mysql_query("SELECT * FROM customer where username='$username' and password='$password' and active='1'");

if(mysql_num_rows($result) == 1) {
	$record = mysql_fetch_array($result);
	$username = $record['username'];
	$firstname = $record['firstName'];
	$lastname = $record['lastName'];
	
	$_SESSION['username'] = $username;
	$_SESSION['firstname'] = $firstname;
	$_SESSION['lastname'] = $lastname;
	$_SESSION['login'] = true;
	echo 1;
} else {
	echo 0;
	$_SESSION['login'] = false;
}

mysql_close($db_con);
?>