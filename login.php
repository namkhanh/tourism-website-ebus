<?php
session_start();


if (isset($_POST['username']))
{		
	$customerID=$_POST['username'];
	$password=$_POST['password'];

	$con = mysql_connect("localhost","s3312275","qwerty1234");
	
	if (!$con)
  	{
		echo "Could not connect: " . mysql_error();
  	}
    
    mysql_select_db("s3312275", $con);
    
    $result = mysql_query("SELECT * FROM customer WHERE customerID ='".$customerID."' AND password='".$password."'");
    
    if (mysql_num_rows($result) == 1)
	{
		$_SESSION['logged_in'] = 'true';
		$row = mysql_fetch_array($result);
		$name = $row['firstname']." ".$row['lastname'];
		setcookie("ID", $customerID);
		setcookie("name", $name);		
		header("Location: index.html");		
	}
	else
	{
		echo '
		<center><i><font color="#a83836">Incorrect login details. Please try again</font></i></center><br />';
	}
	
	mysql_close($con);
}

if (! (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == 'true') )
{
	echo '<form action="' . $_SERVER['PHP_SELF'] . '"
		method="POST">
		<table class="login" align="center">
		<tr><td>Username:</td><td><input type="text" name="username" /></td></tr>
		<tr><td>Password:</td><td><input type="password" name="password" /></td></tr>
		<tr><td>&nbsp;</td><td><input type="submit" value="Login" /></td></tr>
		</table>
		</form>';
}
?>

