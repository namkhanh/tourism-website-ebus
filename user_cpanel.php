<ul>
					<?php 
						session_start();
						if (isset($_SESSION['login'])==true &&( $_SESSION['login'])==true) {
								echo '<li><a href="javascript:toggleSignout();">Sign Out</a></li>
								<li>|</li>
								<li><a href="ebookhistory.html">Purchased List</a></li>
								<li>|</li>
								<li><a href="user_booking.html">Tour Booking</a></li>
								<li>|</li>';
								if ($_SESSION['username']=="inte") {
									echo '<li><a class="admin">Admin Control</a>
											<ul>
												<li><a href="admin_tour.php">Tour Management</a></li>
												<li><a href="admin_ebook.php">Ebook Management</a></li>
											</ul>
										  </li>';
								}
								echo '<li>Welcome '.$_SESSION['firstname'].', '.$_SESSION['lastname'].'</li>';
								
							} else {
								echo '<li><a href="javascript:toggleLogin();">Login</a></li>
                    			<li>|</li>
                    			<li><a href="registration.html">Register</a></li>';   
							}
 					?>
			<li style="top:7px !important"><a href="managecart.html" ><img src="images/cart.png" height="32" width="32" border="0" alt="Your Cart" title="Your Cart"/></a></li>

</ul>
