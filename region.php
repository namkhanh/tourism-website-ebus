<?php
	$con = mysql_connect("localhost","s3311310","qwerty1234");
	if(!$con) {
		echo "Could not connect: " . mysql_error();
  	}
	
		
	$region = "South Vietnam";
	
	if(isset($_GET['reg'])){
		$region = $_GET['reg'];	
	}
	
	$result = mysql_query('Select * From tour Where regionID="'.$region.'"');
?>