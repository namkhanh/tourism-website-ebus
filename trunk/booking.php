<?php
	include (dirname(__FILE__).'/database_config.php');
			
	$tourID = $_GET['tourID'];
	
	$tourResult = mysql_query('Select * From tour Where tourID="'.$tourID.'"');
	$tourRecord = mysql_fetch_array($tourResult);
	
	$transportResult = mysql_query('Select * From transport');
	
	include("booking.html");
			
	mysql_close($db_con);
?>