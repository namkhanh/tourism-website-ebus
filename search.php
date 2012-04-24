<?php
include (dirname ( __FILE__ ) . '/database_config.php');

$priceOption = $_GET ["price"];
$date = $_GET ["date"];
$destination = $_GET ["destination"];

if ($priceOption == 0 && $destination == "0" && empty($date)) {
	$result = mysql_query( "SELECT * FROM tour" );
} else if ($priceOption == 0 && $destination == "0" && empty($date)==false ) {
	$result = mysql_query("SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and tour.tourID= tour_occurance.tourID and dayName= '$date' " );
} else if ($priceOption == 0 && $destination != "0" && empty($date)) {
	$result = mysql_query("SELECT * FROM tour where tour.destination like '%$destination%' " );
} else if ($priceOption == 0 && $destination != "0" && $date != "") {
	$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and tour.destination like '%$destination%' and dayName= '$date' " );
} else if ($priceOption != 0 && $destination == "0" && empty($date)) {
	if ($priceOption == 1) {
		$result = mysql_query( "SELECT * FROM tour where price <2000000" );
	} else if ($priceOption == 2) {
		$result = mysql_query( "SELECT * FROM tour where price >=2000000 and price <=5000000" );
	} else if ($priceOption == 3) {
		$result = mysql_query( "SELECT * FROM tour where price >5000000 and price <=10000000" );
	} else if ($priceOption == 4) {
		$result = mysql_query( "SELECT * FROM tour where price >10000000" );
	}
} else if ($priceOption != 0 && $destination != "0" && empty($date)) {
	if ($priceOption == 1) {
		$result = mysql_query( "SELECT * FROM tour where tour.destination like '%$destination%' and price <2000000" );
	} else if ($priceOption == 2) {
		$result = mysql_query( "SELECT * FROM tour where tour.destination like '%$destination%' and price >=2000000 and price <=5000000" );
	} else if ($priceOption == 3) {
		$result = mysql_query( "SELECT * FROM tour where tour.destination like '%$destination%' and price >5000000 and price <=10000000" );
	} else if ($priceOption == 4) {
		$result = mysql_query( "SELECT * FROM tour where tour.destination like '%$destination%' and price >10000000" );
	}
} else if ($priceOption != 0 && $destination == "0" && empty($date)==false) {
	if ($priceOption == 1) {
		$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and dayName= '$date' and price <2000000" );
	} else if ($priceOption == 2) {
		$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and dayName= '$date' and price >=2000000 and price <=5000000" );
	} else if ($priceOption == 3) {
		$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and dayName= '$date' and price >5000000 and price <=10000000" );
	} else if ($priceOption == 4) {
		$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and dayName= '$date' and price >10000000" );
	}
} else {
	if ($priceOption == 1) {
		$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and tour.destination like '%$destination%' and dayName= '$date' and price <2000000" );
	} else if ($priceOption == 2) {
		$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and tour.destination like '%$destination%' and dayName= '$date' and price >=2000000 and price <=5000000" );
	} else if ($priceOption == 3) {
		$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and tour.destination like '%$destination%' and dayName= '$date' and price >5000000 and price <=10000000" );
	} else if ($priceOption == 4) {
		$result = mysql_query( "SELECT * FROM tour, tour_occurance WHERE tour.tourID= tour_occurance.tourID and tour.destination like '%$destination%' and dayName= '$date' and price >10000000" );
	}
}
if (mysql_num_rows ( $result ) > 0) {
	
	while ( $record = mysql_fetch_array ( $result ) ) {
		
		$id = $record ['tourID'];
		$shortDescription = substr ( $record ['description'], 0, 200 );
		
		echo '<div id="tour">
                        
                        	  <img src="' . $record ['image'] . '" alt="Image cannot be loaded" align="left">
                        	  <a id="tour_name" href="tour.php?tourID=' . $id . '">' . $record ['t_name'] . '</a><br /><br />';
		
		echo $shortDescription . '...<br /><a href="tour.php?tourID=' . $id . '">More Details</a><br /><br /></div>';
	}
} else {
	echo 'No record found';
}



mysql_close ( $db_con );
?>