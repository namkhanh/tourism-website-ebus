<?php
include (dirname(__FILE__).'/database_config.php');

//get the tourID
$bookingID = mysql_real_escape_string($_POST['bookingID']);
$result = mysql_query("DELETE FROM tour_booking WHERE tour_booking_id='$bookingID'");

if($result) {
	echo 1;
} else {
	echo 0;
}
mysql_close($db_con);
?>