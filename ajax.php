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

} elseif ($_POST["action"] === "getFirstSelect") {

    try {
        $connect = new PDO('mysql:host=localhost;dbname=tpajax', 'TpAjax', 'TpAjax');
        $data = $connect->query("SELECT DISTINCT ville FROM personnel")->fetchAll();
        echo json_encode($data);
    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage() . "<br/>";
        die();
    }

} elseif ($_POST["action"] === "getSelect") {

    $ville = (!isset($_POST["ville"])) ? '' : $_POST["ville"];
    $optionsList = [];

    try {
        $connect = new PDO('mysql:host=localhost;dbname=tpajax', 'TpAjax', 'TpAjax');

        $sexe = $connect->prepare("SELECT DISTINCT SEXE FROM personnel WHERE VILLE = :ville AND SEXE IS NOT NULL");
        $sexe->bindParam(':ville', $ville);

        $codeProjet = $connect->prepare("SELECT DISTINCT CODEPROJET FROM personnel WHERE VILLE = :ville AND CODEPROJET IS NOT NULL");
        $codeProjet->bindParam(':ville', $ville);

        $sexe->execute();
        $codeProjet->execute();

        $optionsList["sexe"] = $sexe->fetchAll();
        $optionsList["codeprojet"] = $codeProjet->fetchAll();

        echo json_encode($optionsList);

        $sexe->closeCursor();
        $codeProjet->closeCursor();

    } catch (PDOException $e) {
        print "Erreur !: " . $e->getMessage() . "<br/>";
        die();
    }

}