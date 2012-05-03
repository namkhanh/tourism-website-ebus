<?php
	include (dirname(__FILE__).'/database_config.php');
	//Retrieve history
	$tourID = $_GET['tourID'];
	
	$history_result = mysql_query('Select * From tour_booking Where tourID='.$tourID);
	include("history.html");
?>