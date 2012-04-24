<?php
if (isset($_SESSION['login'])==true && ($_SESSION['login'])==true) {
	include (dirname(__FILE__).'/database_config.php');
	$username = $_SESSION['username'];
	echo $username;
	$result = mysql_query('Select * From ebook e, ebook_shopping es, customer c Where e.ebookID = es.ebookID And c.username = es.username And es.username = "'.$username.'"');
	
	//include("ebookhistory.html");
	mysql_close($db_con);
} else {
	//header('Location: index.html');
}
	
?>