<?php
include (dirname(__FILE__).'/database_config.php');
$ebookID = $_GET['ebookID'];

$result = mysql_query('Select * From ebook Where ebookID='.$ebookID);


		include("edit_ebook.html");
	
	mysql_close($db_con);

?>
                    
                    