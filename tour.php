<?php
	$con = mysql_connect("localhost","s3311310","qwerty1234");
	
	if(!$con) {
		echo "Could not connect: " . mysql_error();
  	}
	
	mysql_select_db("s3311310", $con);

	$region = "";
	$tourID = "";
	$selection = "";
	
	if(isset($_GET['reg']))
	{
		$selection = "short";
		
		$region = $_GET['reg']; 		
		$result = mysql_query('Select * From tour Where regionID="'.$region.'"');

		include("tour.html");
	} 
		
	if(isset($_GET['tourID']))
	{
		$selection = "detail";
		
		$tourID = $_GET['tourID'];

		$result = mysql_query('Select * From tour Where tourID="'.$tourID.'"');
		include("tour.html");
	}
	
	mysql_close($con);
?>