<?php
	include (dirname(__FILE__).'/database_config.php');
			
	$tourID = $_POST['tourID'];
	$tourName = $_POST['tourName'];
	$tourPrice = $_POST['tourPrice'];
	$numVisitor = $_POST['numVisitor'];
	$transportID = $_POST['transportID'];
	
	$transportSQL = mysql_query('Select * From transport Where transportID="'.$transportID.'"');
	$transportRecord = mysql_fetch_array($transportSQL);
	
	$bookingSQL = mysql_query('Select tour_booking_id From tour_booking Order By tour_booking_id DESC');
	$bookingRecord = mysql_fetch_array($bookingSQL);
	$lastBookingID = $bookingRecord['tour_booking_id'];
	
	$bookingID = $lastBookingID + 1;
	
	$date = $_POST['date'];
	  				  
	include("tour_booking.html");
			
	mysql_close($db_con);
?>