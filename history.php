<?php
	include (dirname(__FILE__).'/database_config.php');
	//Retrieve history
	$tourID = $_GET['tourID'];
	
	$history_result = mysql_query('Select * From tour_booking tb, tour t Where tb.tourID = t.tourID And tb.tourID='.$tourID);
	include("history.html");
?>