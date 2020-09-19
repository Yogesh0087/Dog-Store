<?php
$dbname = 'localhost' ;
$username = 'root' ;
$password = ' ';
$db = 'login';

    mysqli_connect("$dbname", "$username" , "$password");


	mysqli_select_db($db);


    echo "Connected Succesfully";
?>