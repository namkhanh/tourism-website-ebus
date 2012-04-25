<?php
	include (dirname(__FILE__).'/database_config.php');
			
		$result = mysql_query('Select * From tour');
		
		include("admin_tour.html");
	
	mysql_close($db_con);
?>