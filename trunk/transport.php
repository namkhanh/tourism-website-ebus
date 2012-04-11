<?php
	include (dirname(__FILE__).'/database_config.php');

	$transportID = "";
	
	if(isset($_GET['reg']))
	{
		
		$transportID = $_GET['reg']; 		
		$result = mysql_query('Select * From transport Where transportID ='.$transportID);

		include("transport.html");
	} 
	
	mysql_close($db_con);
?>