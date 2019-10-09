<html>
   <head>
      <title>Week 11 : Problem 4</title>
   </head>
   <body>
        <?php
            $input = $_POST['input6'];

            $list = explode(', ', $input);

            sort($list);
            $max = sizeof($list);

            print "<table>";

            for($index = 0; $index < $max; $index++) {
                print "<tr><td>".$list[$index]."</td></tr>";
            }

            print "</table>";
        ?>
    </body>
</html>