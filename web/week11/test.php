
<!DOCTYPE html>
<html>
    <head>
        <title>
            My first PHP page
        </title>
    </head>
<body>
    <?php
       $books = array("Matthew" => 1, "Mark" => 2, "Luke" => 3, "John" => 4);
       while ($book = each($books))
          print "<b>$book[key]</b>";
    ?>
</body>
</html>