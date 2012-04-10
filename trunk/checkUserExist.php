<?php

//get the username
$username = mysql_real_escape_string($_POST['username']);

$con = mysql_connect("localhost","s3312275","qwerty1234");	

	if (!$con)
  	{
		echo "Could not connect: " . mysql_error();
  	}	
	mysql_select_db("s3312275", $con);
	
	$result = mysql_query("SELECT * FROM customer where username='$username'");
	
	if(mysql_num_rows($result) == 1) {
		 echo 1;  
	} else {
		echo 0;
	}
	

mysql_close($con);
?>