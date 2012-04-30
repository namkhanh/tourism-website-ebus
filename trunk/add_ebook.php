<?php
include (dirname(__FILE__).'/database_config.php');
$name = $_POST['ebook_name'];
$author = $_POST['author'];
$price = $_POST['price'];
$description = $_POST['description'];

if (!empty($_POST['newImg'])) {
	$image = $_POST['newImg'];
} else {
	$image ="";
}

if ($_FILES ["file-ebook"] ["error"] > 0) {
	$file = "";
} else {
	if (file_exists ( "ebook/" . $_FILES ["file-ebook"] ["name"] )) {
		$file = "ebook/" . $_FILES ["file-ebook"] ["name"];
	} else {
		move_uploaded_file ( $_FILES ["file-ebook"] ["tmp_name"], "ebook/" . $_FILES ["file-ebook"] ["name"] );
		$file = "ebook/" . $_FILES ["file-ebook"] ["name"];
	}
}
echo $file;
$add_ebook_query = "INSERT INTO ebook (name,author,price,description,download,img) VALUES ('$name', '$author','$price','$description','$file','$image')";
$result_ebook = mysql_query($add_ebook_query);


?>