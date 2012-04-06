<?php
$firstname=$_GET["firstname"]; 
       $lastname=$_GET["lastname"]; 
       $studentload=$_GET["load"]; 
	   $score=$_GET["score"]; 
	   
	$con = mysql_connect("localhost","s3312275","qwerty1234");	
	if (!$con)
  	{
		echo "Could not connect: " . mysql_error();
  	}	
	mysql_select_db("s3312275", $con);
	
	
	
	$result = mysql_query("SELECT * FROM tour, tour_ WHERE date > '".date("Y-m-d")."' ORDER BY date");