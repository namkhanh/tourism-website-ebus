<?php
	include (dirname(__FILE__).'/database_config.php');
	
	$tourID = $_GET['tourID'];
	$result = mysql_query('Select * From tour Where tourID="'.$tourID.'"');
	
	$record = mysql_fetch_array($result);
	
	$tour_name = $record['t_name'];
	$price = $record['price'];
	
	include("booking.html");
	
	mysql_close($db_con);
?>