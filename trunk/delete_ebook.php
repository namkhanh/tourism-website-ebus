<?php
include (dirname(__FILE__).'/database_config.php');

//get the tourID
$ebookID = mysql_real_escape_string($_POST['ebookID']);
$result = mysql_query("DELETE FROM ebook WHERE ebookID='$ebookID'");

if($result) {
	echo 1;
} else {
	echo 0;
}
mysql_close($db_con);
?>