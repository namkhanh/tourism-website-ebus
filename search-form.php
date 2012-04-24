<form action="search.html" method="get">
            	<fieldset>
                	<table>
 						<tr>
                        	<td>Desination</td>
                            <td>
                            	<select name="destination" style="width:170px">
                                    <option value="0">Select</option>
                                    <option value="Ho Chi Minh">Ho Chi Minh</option>
                                    <option value="Ha Noi">Ha Noi</option>
                                    <option value="Da Nang">Da Nang</option>
                                    <option value="Ha Long">Ha Long</option>
                                </select>
                            </td>
                        </tr>
                        
                        <tr>
                        	<td>Price (VND)</td>
                            <td>
                            	<select name="price" style="width:170px">
 		                           	<option value="0">Select</option>
                                    <option value="1">Below 2,000,000</option>
                                    <option value="2">2,000,000 - 5,000,000</option>
                                    <option value="3">5,000,000 - 10,000,000</option>
                                    <option value="4">More than 10,000,000</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                        	<td>Date</td>
                            
                            <td><input id="datepicker" size="25" type="text" style="position: relative; z-index: 15"/></td>
                            <td><input name="date" id="alternative" type="hidden" style="position: relative; z-index: 15"/></td>
                        </tr>

						<tr>
							<td><input name="reset" type="reset" value="Refresh" /></td>
							<td><input name="submit" type="submit" value="Search" /></td>
						</tr>
						</table>  
                </fieldset>
                </form>        