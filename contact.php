
<?php
// Send the email:
		$name = 'Contact from '.$_POST['name'];
		$email = $_POST['email'];
		$messageform = $_POST['message'];
		$header = 'From: '.$_POST['email'];
		mail('s3296868@rmit.edu.vn', $name, $messageform, $header);
		header('Location: index.html');
?>