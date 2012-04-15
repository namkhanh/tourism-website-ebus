<div id="login" >
        	<form name="login" method="post" id="login-section">
                <h3><span>Login</span></h3>
               	<fieldset><legend>Login form</legend>
                <p class="first">
					<label for="username">Username</label>
					<input type="text" id="login_username" name="username"/>
				</p>
               	<p>
					<label for="email">Password</label>
					<input type="password" name="password" id="login_password"/>
				</p>
                <p class="submit">
                <button type="button" onclick="authenticate();">Login</button>
                <button type="button" onclick="toggleLogin();">Cancel</button>
              	</p> 
                </fieldset>
                <div id="login_failed" style="display:none; color:red">Login failed. Please try again.</div>  
            </form>
        </div>
		<div id="signout">
			<form name="signout" method="post" action="logout.php">
				<table>
					<tr><td>Are you sure to log out?</td></tr>
					<tr>
						<td><input type="submit" 
							value="Yes" /></td>
						<td><input type="button" onclick="toggleSignout();"
							value="No" /></td>
					</tr>
				</table>
			</form>
		</div>