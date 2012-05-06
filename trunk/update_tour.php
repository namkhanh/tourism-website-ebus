<?php
include (dirname(__FILE__).'/database_config.php');
$tourID = mysql_real_escape_string($_POST['tourID']);
$tourName = mysql_real_escape_string($_POST['tour_name']);
$duration = mysql_real_escape_string($_POST['duration']);
$price = mysql_real_escape_string($_POST['price']);
$description = mysql_real_escape_string($_POST['description']);
$destination = mysql_real_escape_string($_POST['destination']);
$occurance = $_POST['dayName'];
$regionID = $_POST['region'];
if (empty($_POST['newImg'])) {
	$image = $_POST['oldImg'];
} else {
	$image = $_POST['newImg'];
}
$updateTour_query = ('Update tour set t_name="'.$tourName.'", duration="'.$duration.'", price="'.$price.'", description="'.$description.'", destination="'.$destination.'", image="'.$image.'", regionID="'.$regionID.'" where tourID="'.$tourID.'"');
echo $updateTour_query;
$result_update_tour = mysql_query($updateTour_query);

$deleteOccurance_query ="DELETE FROM tour_occurance where tourID='$tourID'";
$result_delete_occurance = mysql_query($deleteOccurance_query);

for($i = 0; $i < count($occurance); $i ++) {
	$tempOccurance_update_query = "INSERT INTO tour_occurance (dayName,tourID) VALUE ('$occurance[$i]','$tourID')";
	$result_update_occurance = mysql_query($tempOccurance_update_query);
	if (!$result_update_occurance) {
		echo $i.'error';
	}
}

if ($result_update_tour && $result_delete_occurance) {
	$flag = false;
} else {
	$flag = true;
}

header ('Location: admin_tour.php');
mysql_close($db_con);
?>
                    
                    