<?php
	include (dirname(__FILE__).'/database_config.php');
	//Retrieve history
	$tourID = $_GET['tourID'];
	
	$history_result = mysql_query('Select * From tour_booking tb, tour t, transport tr Where tb.tourID = t.tourID And tb.transportID = tr.transportID And tb.tourID='.$tourID);
	include("history.html");
?>