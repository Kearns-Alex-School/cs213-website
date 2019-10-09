<?php include "dbinfo.inc"; ?>
<html>
   <head>
        <title>AWS Database Messages</title>
        <!--link rel="StyleSheet" type="text/css" href="week12.css"-->
    </head>

    <body>
        <h1 style="text-align: center;">Add to the database:</h1>

        <?php
            $servername = "schoolproject.cadj1cj3qyfc.us-east-2.rds.amazonaws.com";
            $username = "akearns";
            $password = "password";

            // Create connection
            $conn = new mysqli($servername, $username, $password);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 
            echo "Connected successfully";
        ?>

        <h2>What's in the Database??</h2>
        <div div class="database_results">
            <table class="messages">
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Message</th>
                </tr>
                <!--?php
                    for ($index = 0; $index < $numProducts; $index++) {
                        if ($selectArray[$index] == 'on') {
                            print "<tr>";
                                print "<td>".$productArray[$index]."</td>";
                                print '<td style="text-align: right;">'.$quantityArray[$index].'</td>';
                                print '<td style="text-align: right;">$ '.number_format((float)$priceArray[$index], 2, '.', '').'</td>';
                            print "</tr>";
                        }
                    }
                ?-->
            </table>
        </div>
    </body>
</html>