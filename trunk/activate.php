<?php
include (dirname(__FILE__).'/database_config.php');

$username=$_GET["username"]; 
$key=$_GET["key"]; 
	
//Check activation
$result = mysql_query("SELECT * FROM customer WHERE username='$username' and activation='$key' and active='1'");

if(mysql_num_rows($result) == 1) {
	echo '<div>Your account has already been activated</div>';
} else {
	$query_activate_account = "UPDATE customer SET active='1' WHERE(username ='$username' AND activation='$key')";
	
	if (!mysql_query($query_activate_account)) {
		$flag = "false";
	} else {
		$flag = "true";
		
	}
}
mysql_close($db_con);
header("Location: activate.html?rs=" . $flag . "&username=" .$username);	
?>