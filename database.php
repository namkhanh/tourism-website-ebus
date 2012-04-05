<?php
	$con = mysql_connect("localhost","root","123456");
	if(!$con) {
		echo "Could not connect: " . mysql_error();
  	}
	
	mysql_select_db("green_it_tourism", $con);
	
	$result = mysql_query("Select * From tour Where regionID=1");
	
	while($record = mysql_fetch_array($result))
	{
		echo '<div id="picture">';
			echo '<img src="'.$record['image'].'"';
		echo '</div>';
		
		echo '<div id="content123">';
			echo $record['description'];
		echo '</div>';
	}
	
	mysql_close($con);
?>