<?php
include (dirname(__FILE__).'/database_config.php');

//get the tourID
$tourID = mysql_real_escape_string($_POST['tourID']);

$result = mysql_query("DELETE FROM tour WHERE tourID='$tourID'");
if($result) {
	echo 1;
} else {
	echo 0;
}
mysql_close($db_con);
?>