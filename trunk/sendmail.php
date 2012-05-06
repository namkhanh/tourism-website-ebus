<?php
	include (dirname(__FILE__).'/database_config.php');
// Send mail to customer
	$username = $_POST['username'];
	$tourID = $_POST['tourID'];
	$transportID = $_POST['transportID'];
	
	$customerSQL = mysql_query('Select * From customer Where username="'.$username.'"');
	$customerRecord = mysql_fetch_array($customerSQL);
	
	$transportSQL = mysql_query('Select * from transport Where transportID='.$transportID);
	$transportRecord = mysql_fetch_array($transportSQL);
	
	$tourSQL = mysql_query('Select * from tour where tourID='.$tourID);
	$tourRecord = mysql_fetch_array($tourSQL);
	
	$transportPrice = $transportRecord['price'];
	$transportName = $transportRecord['name'];
	$tourPrice = $tourRecord['price'];
	$tourName = $tourRecord['t_name'];
	
	$totalPrice = $transportPrice + $tourPrice;
	
	$email = $customerRecord['email'];
	$first = $customerRecord['firstName'];
	$last = $customerRecord['lastName'];
	
	$numVisitor = $_POST['numVisitor'];
	$date = $_POST['date'];
	$c_number = $_POST['c_number'];
	
	$name = 'Thank you for your purchase';
	$header = 'From: s3311310@rmit.edu.vn';
	
	$messageform = 'Dear '.$first.', '.$last."\n\n"
				 . 'Thank you for your recent purchase on Green Travel.' . "\n\n"
				 . 'Here is your booking information:' . "\n"
				 . 'Tour name: '.$tourName . "\n"
				 . 'Number of Visitor: '.$numVisitor . "\n"
				 . 'Date of Departure: '.$date . "\n"
				 . 'Transportation: '.$transportName . "\n\n"
				 . 'Payment Information: ' . "\n\n"
				 . 'Credit Card ending with: ' . substr($c_number,12,4) . "\n"
				 . 'Total Price: ' . $totalPrice . "\n\n"
				 . 'Green Travel Team.';
				 
	mail($email, $name, $messageform, $header);
	
	header("Location: https://mekong.rmit.edu.vn/~s3312275/green-travel/tour.php?reg=0");
?>