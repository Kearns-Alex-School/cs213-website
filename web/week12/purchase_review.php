<html>
   <head>
        <title>Review Order</title>
        <link rel="StyleSheet" type="text/css" href="week12.css">
    </head>

    <body>
        <h1 style="text-align: center;">Review Your Purchase</h1>

        <?php
            $fullName = $_POST["fname"].' '.$_POST["lname"];

            $address = $_POST["address"];

            $phone = $_POST["phone"];

            $card = $_POST["card"];
            $last4 = substr($card, strlen($card) - 5, 4);

            $dateArray = explode('-', $_POST["date"]);
            $month = $dateArray[0];
            $year = $dateArray[1];

            $numProducts = 10;

            $productArray[$numProducts];
            for ($index = 0; $index < $numProducts; $index++) {
                $productArray[$index] = $_POST["product$index"];
            }

            $priceArray[$numProducts];
            for ($index = 0; $index < $numProducts; $index++) {
                $priceArray[$index] = $_POST["price$index"];
            }

            $selectArray[$numProducts];
            for ($index = 0; $index < $numProducts; $index++) {
                $selectArray[$index] = $_POST["select$index"];
            }

            $quantityArray[$numProducts];
            for ($index = 0; $index < $numProducts; $index++) {
                $quantityArray[$index] = $_POST["qty$index"];
            }

            $total = 0.0;

            $testnumber = 1;
        ?>
        
        <h2>Information</h2>
        <div class="customerReview">
			<table class="review">
				<tr>
                    <td>
						<p>Name</p>
					</td>
					<td>
						<p><?php echo $fullName;?></p>
					</td>
				</tr>
				<tr>
                    <td>
						<p>Address</p>
					</td>
					<td>
						<p><?php echo $address;?></p>
                    </td>
                </tr>
                <tr>
                    <td>
						<p>Phone</p>
					</td>
					<td>
						<p><?php echo $phone;?></p>
					</td>
                </tr>
                <tr>
                    <td>
						<p>Card</p>
					</td>
					<td>
						<p><?php echo '**** **** **** '.$last4;?></p>
					</td>
				</tr>
				<tr>
					<td>
						<p>Exp Date</p>
					</td>
					<td>
						<p><?php echo date('F, Y', mkTime(0, 0, 0, $month, 0, $year));?></p>
					</td>
				</tr>
			</table>
        </div>

        <h2>Cart</h2>
        <div div class="productTable">
            <table class="productreview">
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                <?php
                    for ($index = 0; $index < $numProducts; $index++) {
                        if ($selectArray[$index] == 'on') {
                            print "<tr>";
                                print "<td>".$productArray[$index]."</td>";
                                print '<td style="text-align: right;">'.$quantityArray[$index].'</td>';
                                print '<td style="text-align: right;">$ '.number_format((float)$priceArray[$index], 2, '.', '').'</td>';

                                $subTotal = $priceArray[$index] * $quantityArray[$index];
                                print '<td style="text-align: right;">$ '.number_format((float)$subTotal, 2, '.', '').'</td>';

                                $total += $subTotal;
                            print "</tr>";
                        }
                    }
                ?>
            </table>
        </div>
        
        <h2>
            <?php print 'Total $ '.number_format((float)$total, 2, '.', ''); ?>
        </h2>

        <div>
<form action="confirmation.php" id="form3" method="post" >
            <table style="width: auto;">
                <tr>
                    <td>
                        <input style="width:100%;" name="confirm" type="submit" value="Confirm" action="/confirm.php">
                    </td>
                    <td>
                        <input style="width:100%;" name="cancel" type="submit" value="Cancel" action="/confirm.php">
                    </td>
                </tr>
            </table>
</form>
        </div>
    </body>
</html>