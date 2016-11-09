<?php

try {
    $connect = new PDO('mysql:host=localhost;dbname=tpajax', 'TpAjax', 'TpAjax');
    $personnel = $connect->prepare("SELECT * FROM personnel");
    $personnel->execute();
    $data = $personnel->fetchAll();

    foreach($data as $row) {
        print_r($row);
    }

    $personnel->closeCursor();

} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}

