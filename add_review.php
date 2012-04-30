<?php
include (dirname(__FILE__).'/database_config.php');
$title = mysql_real_escape_string($_POST["title"]);
$comment = mysql_real_escape_string($_POST["comment"]);
$rate = mysql_real_escape_string($_POST["rate"]);
$today = date("Y-m-d");

$query_insert_comment = "INSERT INTO review (title,comment,rate,r_date,tour_booking_id) VALUES ('$title', '$comment', '$rate', '$today', '1')";

$result_insert_comment = mysql_query($query_insert_comment);
if ($result_insert_comment) {
		echo 1;
	} else {
		echo 0;
	}
	
	
mysql_close($db_con);
?>