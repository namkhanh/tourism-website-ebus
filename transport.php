<?php
	include (dirname(__FILE__).'/database_config.php');

	$transportID = "";
	$name = "";
	$description = "";
	
	if(isset($_GET['reg']))
	{
		
		$regionID = $_GET['reg']; 		
		$result = mysql_query('Select * From transport');

		include("transport.html");
	} 
	
	mysql_close($db_con);
?>