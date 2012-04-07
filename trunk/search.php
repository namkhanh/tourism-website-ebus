<?php

$priceOption=$_GET["price"]; 
$date=$_GET["date"]; 
	   
	$con = mysql_connect("localhost","s3312275","qwerty1234");	
	if (!$con)
  	{
		echo "Could not connect: " . mysql_error();
  	}	
	mysql_select_db("s3312275", $con);
	
	if ($priceOption == 1) {
		$result = mysql_query("SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and tour.tourID= tour_occurance.tourID and dayName= '$date' and price <2000000");
	} else if ($priceOption == 2) {
		$result = mysql_query("SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and dayName= '$date' and price >=2000000 and price <=5000000");
	}  else if ($priceOption == 3) {
		$result = mysql_query("SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and dayName= '$date' and price >5000000 and price <=10000000");
	}  else if ($priceOption == 4) {
		$result = mysql_query("SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and dayName= '$date' and price >10000000");
	} else {
		$result = 0;
	}
	
	if($result == 0) {
		echo 'no record found';
	} else {
		while($record = mysql_fetch_array($result)) {
			$name = $record['name'];
			$duration = $record['duration'];
			$price = $record['price'];
			$description = $record['description'];
			$image = $record['image'];
		
			echo $name.'<br/>'.$duration.'<br/>'.$price.'<br/>'.$description.'<br/>'.$image;
			}
	}
mysql_close($con);
?>