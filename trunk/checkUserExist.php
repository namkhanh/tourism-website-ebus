<?php

$con = mysql_connect("localhost","s3312275","qwerty1234");	

	if (!$con)
  	{
		echo "Could not connect: " . mysql_error();
  	}	
	mysql_select_db("s3312275", $con);
	
	$result = mysql_query("SELECT * FROM customer where username='long'");
	
	if(mysql_num_rows($result) == 1) {
		$record = mysql_fetch_array($result);
		$username = $record['username'];
	}
	

mysql_close($con);
?>