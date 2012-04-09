<?php

	$con = mysql_connect("localhost","s3311310","qwerty1234");
	if(!$con) {
		echo "Could not connect: " . mysql_error();
  	}
		
	if(isset($_GET['reg'])){
		$region = $_GET['reg'];	
	}
	
	include 'region.php';
	

			
	function display($region) 
	{
		$result = mysql_query('Select * From tour Where regionID="'.$region.'"');

		echo '<div id="title-text">'.$region.'</div>';
		
		while($record = mysql_fetch_array($result))
		{		
			echo '<div id="tour">';
			
			echo '<table>';
			
			echo '<tr><td><img src="'.$record['image'].'"></td>';
			
			$shortDescription = substr($record['description'], 0, 300);
			echo '<td valign="top"><table><caption>'.$record['name'].'</caption><tr><td>Description: '.$shortDescription.'...<br /></td></tr></table></td></tr></table><br />';		
			
			/* echo '<td valign="top"><table><tr><td><i><u>Description</u></i>: '.$record['description'].'...<br /></td></tr>';
			echo '<tr><td><i><u>Duration</u></i>: '.$record['duration'].'</td></tr>';
			echo '<tr><td><i><u>Price</u></i>: '.$record['price'].' VND</td></tr></table></td></tr></table>'; */
			
			echo '</div>';
		}
	}
?>