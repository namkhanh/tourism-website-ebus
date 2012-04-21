<?php
	include (dirname(__FILE__).'/database_config.php');
	
	$tourID = $_GET['tourID'];
	
	$result = mysql_query('Select * From tour Where tourID="'.$tourID.'"');
	$record = mysql_fetch_array($result);
	
	$tour_name = $record['t_name'];
	$price = $record['price'];
	
	$transport_result = mysql_query('Select * From transport');
	
	include("booking.html");
	
	mysql_close($db_con);
?>