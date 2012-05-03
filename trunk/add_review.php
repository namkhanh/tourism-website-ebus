<?php
date_default_timezone_set("Asia/Ho_Chi_Minh");
include (dirname(__FILE__).'/database_config.php');
$title = mysql_real_escape_string($_POST["title"]);
$comment = mysql_real_escape_string($_POST["comment"]);
$rate = mysql_real_escape_string($_POST["rate"]);
$tourID = mysql_real_escape_string($_POST["tourID"]);
$tour_booking_id = mysql_real_escape_string($_POST["tour_booking_id"]);

ob_start();
session_start();
if (isset($_SESSION['login'])==true &&( $_SESSION['login'])==true) {
	$username = $_SESSION['username'];
}

$today = date("d-m-Y H:m:s");

$query_insert_comment = "INSERT INTO review (title,comment,rate,r_date,tourID,username,tour_booking_id) VALUES ('$title', '$comment', '$rate', '$today', '$tourID', '$username', '$tour_booking_id')";

$result_insert_comment = mysql_query($query_insert_comment);

if ($result_insert_comment) {
		echo 1;
	} else {
		echo 0;
	}
	
mysql_close($db_con);
?>