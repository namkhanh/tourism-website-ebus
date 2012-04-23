<?php
	
	include (dirname(__FILE__).'/database_config.php');
	
		
	$result = mysql_query('Select * From ebook e, ebook_shipping es, customer c Where e.ebookID = es.ebookID And c.username = es.username And es.username = '.$_SESSION['username'].'');
		

	mysql_close($db_con);
?>