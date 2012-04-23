<?php
	
	include (dirname(__FILE__).'/database_config.php');

		
		$result = mysql_query('Select * From ebook');
		
		

		include("ebook.html");
	

	mysql_close($db_con);
?>