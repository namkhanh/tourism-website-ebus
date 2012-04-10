<?php
	include (dirname(__FILE__).'/database_config.php');

	$region = "";
	$tourID = "";
	$selection = "";
	
	if(isset($_GET['reg']))
	{
		$selection = "short";
		
		$regionID = $_GET['reg']; 		
		$result = mysql_query('Select tourID, t.name, duration, price, description, image, r.name From tour t, region r 
							   Where r.regionID=t.regionID And r.regionID="'.$regionID.'"');

		include("tour.html");
	} 
		
	if(isset($_GET['tourID']))
	{
		$selection = "detail";
		
		$tourID = $_GET['tourID'];

		$result = mysql_query('Select * From tour Where tourID="'.$tourID.'"');
		include("tour.html");
	}
	
	mysql_close($db_con);
?>