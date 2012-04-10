<?php
	$region = "";
	
	if(isset($_GET['reg'])){ 
		$region = $_GET['reg']; 
	} 
	
	$con = mysql_connect("localhost","s3311310","qwerty1234");
	
	if(!$con) {
		echo "Could not connect: " . mysql_error();
  	}
	
	mysql_select_db("s3311310", $con);
	
	$result = mysql_query('Select * From tour Where regionID="'.$region.'"');
	
	include("tour.html");
			
	mysql_close($con);
?>