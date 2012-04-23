<?php
	include (dirname(__FILE__).'/database_config.php');

	$region = "";
	$tourID = "";
	$selection = "";
	
	if(isset($_GET['reg']))
	{
		$selection = "short";
		
		$regionID = $_GET['reg'];
		
		$result = mysql_query('Select * From tour t, region r Where r.regionID=t.regionID And r.regionID='.$regionID);

		include("tour.html");
	} 
		
	if(isset($_GET['tourID']))
	{
		$selection = "detail";
		
		$tourID = $_GET['tourID'];
		$result = mysql_query('Select * From tour Where tourID='.$tourID);
		$record = mysql_fetch_array($result);
		
		$occurance_result = mysql_query('Select * From tour_occurance Where tourID='.$tourID);
		
		$result_rate = mysql_query('Select sum(rate) as sum, count(*) as count from tour_booking, review where tour_booking.tour_booking_id = review.tour_booking_id and tourID='.$tourID);
		$result_review = mysql_query('Select * From tour_booking, review, tour, customer Where customer.username = tour_booking.username and tour_booking.tourID = tour.tourID and tour_booking.tour_booking_id = review.tour_booking_id and tour.tourID='.$tourID);
		include("tour.html");
	}
	
	mysql_close($db_con);
?>