<?php
	include (dirname(__FILE__).'/database_config.php');

	$region = "";
	$tourID = "";
	$selection = "";
	
	if(isset($_GET['reg']))
	{
		$regionID = $_GET['reg'];
		
		if($regionID == 0)
		{
			$selection = "general";
			$result = mysql_query('Select * From region');
		} else {
			$selection = "short";
			$result = mysql_query('Select * From tour t, region r Where r.regionID=t.regionID And r.regionID='.$regionID);
		}

		include("tour.html");
	} 
		
	if(isset($_GET['tourID']))
	{
		$selection = "detail";
		
		$tourID = $_GET['tourID'];
		
		$result = mysql_query('Select * From tour Where tourID='.$tourID);
		$record = mysql_fetch_array($result);
		
		$occurance_result = mysql_query('Select * From tour_occurance Where tourID='.$tourID);
		
		$result_rate = mysql_query('Select sum(rate) as sum, count(*) as count from tour, review, tour_booking where tour.tourID = review.tourID and tour_booking.tourID = tour.tourID and tour_booking.tourID="'.$tourID.'" having count >0');
		
		$result_review = mysql_query('Select * From tour_booking, review, tour Where tour_booking.tourID = tour.tourID and review.tourID = tour_booking.tourID and tour.tourID="'.$tourID.'" ORDER BY r_date DESC');
		include("tour.html");
	}
	
	mysql_close($db_con);
?>