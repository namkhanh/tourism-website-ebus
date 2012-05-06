<?php
include (dirname(__FILE__).'/database_config.php');
$ebookID = mysql_real_escape_string($_POST['ebookID']);
$name = mysql_real_escape_string($_POST['ebook_name']);
$author = mysql_real_escape_string($_POST['author']);
$price = mysql_real_escape_string($_POST['price']);
$description = mysql_real_escape_string($_POST['description']);

if (empty($_POST['newImg'])) {
	$image = $_POST['oldImg'];
} else {
	$image = $_POST['newImg'];
}

if ($_FILES ["file"] ["error"] > 0) {
	$file = $_POST ['oldLink'];
} else {
	if (file_exists ( "ebook/" . $_FILES ["file"] ["name"] )) {
		$file = "ebook/" . $_FILES ["file"] ["name"];
	} else {
		move_uploaded_file ( $_FILES ["file"] ["tmp_name"], "ebook/" . $_FILES ["file"] ["name"] );
		$file = "ebook/" . $_FILES ["file"] ["name"];
	}
}
$updateEbook_query = ('Update ebook set name="'.$name.'", author="'.$author.'", price="'.$price.'", description="'.$description.'",  img="'.$image.'", download="'.$file.'" where ebookID="'.$ebookID.'"');
$result_update_ebook = mysql_query($updateEbook_query);

if ($result_update_ebook) {
	$flag = false;
} else {
	$flag = true;
}

header ('location: admin_ebook.php');
mysql_close($db_con);
?>
                    
                    