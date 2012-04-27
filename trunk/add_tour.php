<?php
include (dirname(__FILE__).'/database_config.php');
$tourName = $_POST['tour_name'];
$duration = $_POST['duration'];
$price = $_POST['price'];
$description = $_POST['description'];
$destination = $_POST['destination'];
$occurance = $_POST['dayName'];
$regionID = $_POST['region'];
$image = $_POST['newImg'];

$add_tour_query = "INSERT INTO tour (t_name,duration,price,description,destination,regionID,image) VALUES ('$tourName', '$duration','$price','$description','$destination','$regionID','$image')";
$result_tour = mysql_query($add_tour_query);

$id_query = "Select tourID from tour where t_name ='$tourName' and duration='$duration' and price='$price' and description='$description' and destination='$destination' and regionID='$regionID' and image='$image'";
$result_id = mysql_query($id_query);

$record = mysql_fetch_array($result_id);
$tourID = $record['tourID'];

for($i = 0; $i < count($occurance); $i ++) {
	$tempOccurance_update_query = "INSERT INTO tour_occurance (dayName,tourID) VALUE ('$occurance[$i]','$tourID')";
	$result_update_occurance = mysql_query($tempOccurance_update_query);
	if (!$result_update_occurance) {
		echo $i.'error';
	}
}
?>