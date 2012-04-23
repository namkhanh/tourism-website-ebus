<ul>
					<?php 
						session_start();
						error_reporting(E_ALL);
 						ini_set('display_errors', '1');
						if (isset($_SESSION['login'])==true &&( $_SESSION['login'])==true) {
								echo '<li><a href="javascript:toggleSignout();">Sign Out</a></li>
								<li>|</li>
								<li>Welcome '.$_SESSION['firstname'].', '.$_SESSION['lastname'].'</li>
								<li><a href="ebookhistory.html">Purchased List</a></li>';
							} else {
								echo '<li><a href="javascript:toggleLogin();">Login</a></li>
                    			<li>|</li>
                    			<li><a href="registration.html">Register</a></li>';   
							}
 					?>
			<li style="top:7px !important"><a href="managecart.html" ><img src="images/cart.png" height="32" width="32" border="0" alt="Your Cart" title="Your Cart"/></a></li>
        	<li style="margin-right:7px">Chuyển đổi ngôn ngữ sang <a href="">Tiếng Việt</a><li>
           
					
			<ul>