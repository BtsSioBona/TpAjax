"use strict";

$(document).ready(function () {

    // Creation des balises de selection
    getFirstSelect();

    // fonction de contact ajax
    var dropList = document.getElementsByClassName("ajSelect");

    for (var i = 0; i < dropList.length; i++) {
        dropList[i].addEventListener('change', ajax);
    }

    // Ajout d'un evenement sur la première droplist pour recharger les autres droplist
    dropList[0].addEventListener('change', getOptionSelect);

    function ajax() {
        var xhttp = new XMLHttpRequest();

        var ville = dropList[0].value;
        var sexe = dropList[1].value;
        var codeprojet = dropList[2].value;

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                createThreadHtml(JSON.parse(this.responseText));
            } else if (this.readyState == 4 && this.status != 200) {
                console.log("Erreur ajax :" + this.status);
            }
        };

        xhttp.open('POST', "ajax.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("ville=" + ville + "&sexe=" + sexe + "&codeprojet=" + codeprojet + "&action=getResult");

    }

    // Fonction de creation du tableau

    function createThreadHtml(data) {
        var eTable = "<thead>" +
            "<th data-field=\"numemp\">NUMEMP</th>" +
            "<th data-field=\"nomemp\">NOMEMP</th>" +
            "<th data-field=\"prenomemp\">PRENOMEMP</th>" +
            "<th data-field=\"cp\">CP</th>" +
            "<th data-field=\"ville\">VILLE</th>" +
            "<th data-field=\"sexe\">SEXE</th>" +
            "<th data-field=\"codeprojet\">CODEPROJET</th>" +
            "<th data-field=\"poste\">POSTE</th>" +
            "<th data-field=\"salaire\">SALAIRE</th>" +
            "<th data-field=\"superieur\">SUPERIEUR</th>" +
            "</thead>";

        for (var i = 0; i < data.length; i++) {
            eTable += "<tr>";
            eTable += "<td>" + data[i].NUMEMP + "</td>";
            eTable += "<td>" + data[i].NOMEMP + "</td>";
            eTable += "<td>" + data[i].PRENOMEMP + "</td>";
            eTable += "<td>" + data[i].CP + "</td>";
            eTable += "<td>" + data[i].VILLE + "</td>";
            eTable += "<td>" + data[i].SEXE + "</td>";
            eTable += "<td>" + data[i].CODEPROJET + "</td>";
            eTable += "<td>" + data[i].POSTE + "</td>";
            eTable += "<td>" + data[i].SALAIRE + "</td>";
            eTable += "<td>" + data[i].SUPERIEUR + "</td>";
            eTable += "</tr>";
        }


        eTable += "</tbody>";
        var tableau = document.getElementById("tabResult");
        tableau.innerHTML = eTable;
    }

    function createOptionVilleSelect(data) {

        var options;

        options += "<option value=\"\" disabled selected>Choissisez une ville</option>";
        for (var i = 0; i < data.length; i++) {
            options += "<option value=\"" + data[i].ville + "\">" + data[i].ville + "</option>"
        }

        var selects = document.getElementById("selectVille");
        selects.innerHTML = options;

    }

    function createOptionSexeSelect(data) {

        var options;


        options += "<option value=\"\" disabled selected>Choissisez un sexe</option>";
        for (var i = 0; i < data.length; i++) {
            options += "<option value=\"" + data[i].SEXE + "\">" + data[i].SEXE + "</option>"
        }

        var selects = document.getElementById("selectSexe");
        selects.innerHTML = options;
    }

    function createOptionCodeProjetSelect(data) {

        var options;

        options += "<option value=\"\" disabled selected>Choissisez un code projet</option>";

        for (var j = 0; j < data.length; j++) {
            if (data[j].CODEPROJET == null) {
                options += "<option value=\"aucun\">Aucun</option>"
            }
        }

        for (var i = 0; i < data.length; i++) {
            if (data[i].CODEPROJET != null) {
                options += "<option value=\"" + data[i].CODEPROJET + "\">" + data[i].CODEPROJET + "</option>"
            }
        }

        var selects = document.getElementById("selectCodeProjet");
        selects.innerHTML = options;
    }

    function getFirstSelect(parameters) {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                createOptionVilleSelect(JSON.parse(this.responseText));
            } else if (this.readyState == 4 && this.status != 200) {
                console.log("Erreur ajax :" + this.status);
            }
        };

        xhttp.open('POST', "ajax.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("action=getFirstSelect");
    }

    function getOptionSelect() {
        var ville = dropList[0].value;

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                createOptionSexeSelect(JSON.parse(this.responseText).sexe);
                createOptionCodeProjetSelect(JSON.parse(this.responseText).codeprojet);
            } else if (this.readyState == 4 && this.status != 200) {
                console.log("Erreur ajax :" + this.status);
            }
        };

        xhttp.open('POST', "ajax.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("ville=" + ville + "&action=getSelect");
    }
});

