<?php
include (dirname(__FILE__).'/database_config.php');
$tourID = $_GET['tourID'];

$result = mysql_query('Select * From tour Where tourID='.$tourID);

$occurance_result = mysql_query('Select * From tour_occurance Where tourID='.$tourID);

		include("edit_tour.html");
	
	mysql_close($db_con);

?>
                    
                    