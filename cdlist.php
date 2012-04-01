<?php
	$con = mysql_connect("localhost","root","");	
	if (!$con)
  	{
		echo "Could not connect: " . mysql_error();
  	}	
	mysql_select_db("longtran", $con);
	
	$result = mysql_query("SELECT * FROM event WHERE date>'".date("Y-m-d")."' ORDER BY date");
	
	$count = 0;
	
	while($record = mysql_fetch_array($result) or die(mysql_error()))
	{
		if ($count < 3) {
			$count += 1;
			$day = idate("d",strtotime($record['date']));
			$month = idate("m",strtotime($record['date']));
			$year = idate("Y",strtotime($record['date']));
			$ID = $record['eventID'];
		
			echo '<li onmouseover="openDes(\''.$ID.'\')" onmouseout="closeDes((\''.$ID.'\'))" ><a href="event.html?eventID='.$ID.'" ><img  src="'.$record['image'].'"  /><span id="'.$ID.'" class="caption" style="display:none">Countdown</span></a>';;
			echo '
				<script language="javascript" type="text/javascript">
					var montharray'.$ID.'=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

					function countdown'.$ID.'(yr,m,d){
					
						theyear'.$ID.'=yr;themonth'.$ID.'=m;theday'.$ID.'=d;
						var today'.$ID.'=new Date();
						var todayy'.$ID.'=today'.$ID.'.getYear();
					
						if (todayy'.$ID.' < 1000) {
							todayy'.$ID.'+=1900
						}
						
						var todaym'.$ID.'=today'.$ID.'.getMonth();
						var todayd'.$ID.'=today'.$ID.'.getDate();
						var todayh'.$ID.'=today'.$ID.'.getHours();
						var todaymin'.$ID.'=today'.$ID.'.getMinutes();
						var todaysec'.$ID.'=today'.$ID.'.getSeconds();
						var todaystring'.$ID.'=montharray'.$ID.'[todaym'.$ID.']+" "+todayd'.$ID.'+", "+todayy'.$ID.'+" "+todayh'.$ID.'+":"+todaymin'.$ID.'+":"+todaysec'.$ID.';
					
						futurestring'.$ID.'=montharray'.$ID.'[m-1]+" "+d+", "+yr;
						dd'.$ID.'=Date.parse(futurestring'.$ID.')-Date.parse(todaystring'.$ID.');
						dday'.$ID.'=Math.floor(dd'.$ID.'/(60*60*1000*24)*1);
						dhour'.$ID.'=Math.floor((dd'.$ID.'%(60*60*1000*24))/(60*60*1000)*1);
						dmin'.$ID.'=Math.floor(((dd'.$ID.'%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
						dsec'.$ID.'=Math.floor((((dd'.$ID.'%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
					
						document.getElementById("'.$ID.'").innerHTML = dday'.$ID.'+ " days, "+dhour'.$ID.'+" hours "+dmin'.$ID.'+" minutes "+dsec'.$ID.'+" seconds left";
						setTimeout("countdown'.$ID.'(theyear'.$ID.',themonth'.$ID.',theday'.$ID.')",1000);
					}
				
					countdown'.$ID.'('.$year.','.$month.','.$day.');	
								
				</script>';
			echo "</li>";
		}
	}
	
	mysql_close($con);
?>