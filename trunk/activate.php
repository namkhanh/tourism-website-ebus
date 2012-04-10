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
		echo '<div>Your account could not be activated. Please recheck the link or contact the system administrator at green.travel@gmail.com.</div>';
	} else {
		echo '<div>Your account is now active. You may now <a href="login.php">Log in</a></div>';
	}
}
mysql_close($db_con);
?>