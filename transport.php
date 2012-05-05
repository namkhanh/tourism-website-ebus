<?php
	include (dirname(__FILE__).'/database_config.php');

	if(isset($_GET['reg']))
	{
		$transportID = $_GET['reg'];
		$selection = "";
		
		if ($transportID == 0) {
			$selection = "general";
			$result = mysql_query('Select * From transport');					
		} else {
			$selection = "detail";
			$result = mysql_query('Select * From transport Where transportID ='.$transportID);
		}
	} 
	include("transport.html");
	mysql_close($db_con);
?>