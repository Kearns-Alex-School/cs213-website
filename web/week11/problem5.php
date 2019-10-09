<html>
   <head>
      <title>Week 11 : Problem 4</title>
   </head>
   <body>
        <?php
            $base = $_POST['x'];
            $power = $_POST['n'];

            print "<table>";

            print "<tr><th>N</th><th>X<sup>n</sup></th></tr>";

            for($index = 1; $index <= $power; $index++) {
                $result = pow($base, $index);

                print "<tr><td>".$index."</td><td>".$result."</td></tr>";
            }

            print "</table>";
        ?>
    </body>
</html>