<?php
include (dirname(__FILE__).'/database_config.php');

//get the username
$username = mysql_real_escape_string($_POST['username']);

	$result = mysql_query("SELECT * FROM customer where username='$username'");
	
	if(mysql_num_rows($result) == 1) {
		 echo 1;  
	} else {
		echo 0;
	}
	

mysql_close($db_con);
?>