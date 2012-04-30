<?php
include (dirname(__FILE__).'/database_config.php');
$ebookID = $_POST['ebookID'];
$name = $_POST['ebook_name'];
$author = $_POST['author'];
$price = $_POST['price'];
$description = $_POST['description'];

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
echo $file;
$updateEbook_query = ("Update ebook set name='$name', author='$author', price='$price', description='$description',  img='$image', download='$file' where ebookID='$ebookID'");
$result_update_ebook = mysql_query($updateEbook_query);

if ($result_update_ebook) {
	$flag = false;
} else {
	$flag = true;
}

echo $flag;
mysql_close($db_con);
?>
                    
                    