<?php
ob_start();
session_start();
include (dirname(__FILE__).'/database_config.php');

//get the username
$username = mysql_real_escape_string($_POST['username']);

//get the password
$password = mysql_real_escape_string($_POST['password']);

$result = mysql_query("SELECT * FROM customer where username='$username' and password='$password'");

if(mysql_num_rows($result) == 1) {
	echo 1;
	
	$username = $record['username'];
	$fistname = $record['firstname'];
	$lastname = $record['lastname'];
	
	$_session['login'] = true;
	$_session['username'] = $username;
	$_session['firstname'] = $firstname;
	$_session['lastname'] = $lastname;
} else {
	echo 0;
	$_session['login'] = false;
}

mysql_close($db_con);
?>