<?php
include (dirname(__FILE__).'/database_config.php');

$username = $_POST["username"]; 
$email = $_POST["email"]; 
$password = $_POST["password"]; 
$firstname = $_POST["firstname"]; 
$lastname = $_POST["lastname"]; 
$dob = $_POST["dob"]; 
$street = $_POST["street"]; 
$city = $_POST["city"]; 
$nationality = $_POST["nationality"]; 

// Create a unique  activation code:
$activation = md5(time().md5($username));

$query_insert_user = "INSERT INTO customer ('username', 'email', 'password', 'activation','firstname','lastname','dob','street','city','nationality') VALUES ( '$username', '$email', '$password', '$activation','$firstname','$lastname','$dob','$street','$city','$nationality')";

$result_insert_user = mysql_query($query_insert_user);

	if (!$result_insert_user) {
		echo 'Query Failed ';
	} else {
		// Send the email:
		$message = "Hi $firstname $lastname, \n\n Thank you for your registration at Green Travel. To activate your account, please click on this link:\n\n";
		$message .= $host . '/activate.php?username=' . $username . "&key=$activation";
		mail($email, 'Registration Confirmation', $message, 'From:'.EMAIL);
	}
	
	
mysql_close($db_con);
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head>
	<meta http-equiv="content-type" content="text/xml; charset=utf-8" /> 
    <title>Welcome to Green Travel</title>
    <meta name="description" content="E-Business"  /> 
	<meta name ="keywords" content="?????"  /> 
	<link rel="stylesheet" type="text/css" href="formatstyles.css"/> 
	<link rel="stylesheet" type="text/css" href="divstyles.css"/> 
    <link rel="stylesheet" type="text/css" href="content_style.css" />
    <link rel="stylesheet" type="text/css" href="style/css/jquery-ui-1.8.18.custom.css" />
	
	<!-- include CSS always before including js -->

	<!-- include jQuery library -->
	<link href="style.css" rel="stylesheet" type="text/css" media="screen" />
	<script type="text/javascript" src="js/jquery-1.7.2.js"></script>
	<script type="text/javascript" src="js/jquery.cycle.all.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
	<script type="text/javascript" src ="language-en.js"></script> 
	<script type="text/javascript" src ="nopcart.js" language="javascript"> 
	
      //============================================================== 
      //               NOP Design JavaScript Shopping Cart               
      //-------------------------------------------------------------- 
	  //       Visit NOP Design at http://www.nopdesign.com/freecart     
	  //============================================================== 
	</script> 

	<script type="text/javascript" src="js/login.js"></script>

</head>

<body>

	<!-- This is the page section -->
	<div id="page_section">

		<!-- This is the banner --> 
		<div id="banner"> 
 			<a href="index.html" id="banner">Home Page</a>
           
		</div> 
<!-- This is end of the banner --> 
    
    	<div id="task">
        	<table>
				<tr>
                    <td width="50%" align="right">Chuyển đổi ngôn ngữ sang</td>
                    <td width="39%" align="left"><a href="">Tiếng Việt</a></td>
                    <td width="4%" align="center"><a href="managecart.html"><img src="images/cart.png" height="32" width="32" border="0" alt="Your Cart" title="Your Cart"/></a></td>
                    <td width="3%" align="center"><a href="">Register</a></td>
                    <td width="1%" align="center">|</td>
                    <td width="3%" align="center"><a href="javascript:login('show');">Login</a></td>    
				</tr>
            </table>
        </div>
        
        <div id="login">
        	<form name="login" action="" method="post">
            	<table>
                	<caption style="padding:10px 0;">Login</caption>
                	<tr>
                    	<td>Username</td>
                        <td><input name="username" /></td>
                    </tr>
                    
                    <tr>
						<td>Password</td>
                        <td><input name="password" type="password" /></td>
                    </tr>
					
                    <tr>
                    	<table align="center">
                        	<tr>
			                  	<td><input type="submit" name="submit" value="Login" /></td>
            		            <td><input type="button" onclick="" value="Cancel" /></td>          
                            </tr>
                        </table>
                    </tr>
                </table>
            </form>
        </div> 
        
		<div id="topnav">
            <ul>
                <li class="current"><a href="index.html">Home</a></li>
                
                <li><a href="" class="parent_menu">Tour</a>
                    <ul>
                        <li><a href="">North Vietnam</a></li>
                        <li><a href="">Middle Vietnam</a></li>
                        <li><a href="">South Vietnam</a></li>
                    </ul>
                </li>
                
                <li><a href="" class="parent_menu">Transport</a>
                    <ul>
                        <li><a href="">Transport 1</a></li>
                        <li><a href="">Transport 2</a></li>
                    </ul>
                </li>
                
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Site Map</a></li>
            </ul>
        </div>
       

		
<!-- This is the content -->
		<div id="content">
		
		</div>
		<div class="wan-clear"></div> 
<!-- This is end of the content -->

<!-- This is the footer -->
		<div id="footer"> 
 
			<p class="footer">This website is a student project that is intended to be used only for academic purposes. This page was created by Duy, Le Quang </p>

			
		</div> 
<!-- This is end of the footer -->
	</div> 
<!-- This is end of the page section -->
</body>

</html>