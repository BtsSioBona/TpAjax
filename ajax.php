<?php

if (!isset($_POST["action"]))
    die;


if ($_POST["action"] === "getResult") {

    $ville = (!isset($_POST["ville"]) or empty($_POST["ville"])) ? 'Toulon' : $_POST["ville"];
    $sexe = (!isset($_POST["sexe"]) or empty($_POST["sexe"])) ? 'M' : $_POST["sexe"];
    $codeprojet = (!isset($_POST["codeprojet"]) or empty($_POST["codeprojet"])) ? 'PR1' : $_POST["codeprojet"];

    try {
        $connect = new PDO('mysql:host=localhost;dbname=tpajax', 'TpAjax', 'TpAjax');
        $personnel = $connect->prepare("SELECT * FROM personnel WHERE VILLE = :ville AND SEXE = :sexe AND CODEPROJET = :codeprojet");
        $personnel->bindParam(':ville', $ville);
        $personnel->bindParam(':sexe', $sexe);
        $personnel->bindParam(':codeprojet', $codeprojet);
        $personnel->execute();
        $data = $personnel->fetchAll();

        echo json_encode($data);

        $personnel->closeCursor();

    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage() . "<br/>";
        die();
    }
} elseif ($_POST["action"] === "getSelect") {

    $connect = new PDO('mysql:host=localhost;dbname=tpajax', 'TpAjax', 'TpAjax');
    $data = $connect->query("SELECT DISTINCT ville from personnel")->fetchAll();
    echo json_encode($data);

}