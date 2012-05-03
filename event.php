<?php
	include (dirname(__FILE__).'/database_config.php');


		
	if(isset($_GET['eventID'])) {
		
		$eventID = $_GET['eventID'];
		
		$result = mysql_query("Select * From event Where eventID='$eventID'");
		include("event.html");
	}
	
	mysql_close($db_con);
?>