<?php
include (dirname(__FILE__).'/database_config.php');
ob_start();
session_start();

if (isset($_SESSION['login'])==true &&( $_SESSION['login'])==true) {
	$username = $_SESSION['username'];
}

$noorder = $_COOKIE["NumberOrdered"];

if($noorder == 0) {
	header("Location: index.html");
} else {
	for($i = 1; $i <= $noorder; $i++) {
	$ebookID = $_GET["ebookID".$i];
	mysql_query("INSERT INTO ebook_shopping (username,ebookID,date) VALUES('".$username."','".$ebookID."','".date("Y-m-d")."')");
	}
		setcookie('NumberOrdered', NULL, 1, "/");
}
?>
                    
                    