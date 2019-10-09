<html>
   <head>
      <title>Week 11 : Problem 4</title>
   </head>
   <body>
        <?php
            $input = $_POST['input4'];

            $numbers['one'] = "uno";
            $numbers['two'] = "dos";
            $numbers['three'] = "tres";
            $numbers['four'] = "cuatro";
            $numbers['five'] = "cinco";
            $numbers['six'] = "seis";
            $numbers['seven'] = "siete";
            $numbers['eight'] = "ocho";
            $numbers['nine'] = "nueve";
            $numbers['ten'] = "diez";
            $numbers['eleven'] = "once";
            $numbers['twelve'] = "doce";
            $numbers['thirteen'] = "trece";
            $numbers['fourteen'] = "catorce";
            $numbers['fifteen'] = "quince";
            $numbers['sixteen'] = "dieciseis";
            $numbers['seventeen'] = "diecisiete";
            $numbers['eighteen'] = "dieciocho";
            $numbers['nineteen'] = "diecinueve";
            $numbers['twenty'] = "veinte";

            if (array_key_exists($input, $numbers)) {
                print "<p>The word \"".$input."\" in Spanish is \"".$numbers[$input]."\"</p>";
            } else {
                print "<p>The English cardinal \"".$input."\" is not between \"one\" and \"twenty\"</p>";
            }
        ?>
    </body>
</html>