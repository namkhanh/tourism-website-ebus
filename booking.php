<?php
	include (dirname(__FILE__).'/database_config.php');

	$tour_name = $_GET['tourName'];
	
	include("booking.html");
	
	mysql_close($db_con);
?>