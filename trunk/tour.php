<?php
	include (dirname(__FILE__).'/database_config.php');

	$region = "";
	$tourID = "";
	$selection = "";
	
	if(isset($_GET['reg']))
	{
		$selection = "short";
		
		$regionID = $_GET['reg'];
		
		$result = mysql_query('Select * From tour t, region r Where r.regionID=t.regionID And r.regionID="'.$regionID.'"');

		include("tour.html");
	} 
		
	if(isset($_GET['tourID']))
	{
		$selection = "detail";
		
		$tourID = $_GET['tourID'];

		$result = mysql_query('Select * From tour t, tour_occurance o Where t.tourID=o.tourID And t.tourID="'.$tourID.'"');
		include("tour.html");
	}
	
	mysql_close($db_con);
?>