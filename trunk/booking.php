<?php
	include (dirname(__FILE__).'/database_config.php');

	$tour_name = $record['t_name'];
	
	include("booking.html");
	
	mysql_close($db_con);
?>