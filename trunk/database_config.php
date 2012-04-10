<?php
// Connection's Parameters
$db_host="localhost";
$db_name="s3312275";
$username="s3312275";
$password="qwerty1234";
$db_con=mysql_connect($db_host,$username,$password);
$connection_string=mysql_select_db($db_name);
// Connection
mysql_connect($db_host,$username,$password);
mysql_select_db($db_name);

?>