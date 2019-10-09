<html>
   <head>
      <title>Confirmation</title>
      <link rel="StyleSheet" type="text/css" href="week12.css">
   </head>
   <body>
        <?php
            $input = isset($_POST['confirm']);

            if($input == true)
            {
                print "<h1>Purchase was complete</h1>";
            }
            else
            {
                print "<h1>Canceled</h1>";
            }
        ?>
    </body>
</html>