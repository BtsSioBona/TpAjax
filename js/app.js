$(document).ready(function () {

    // fonction de contact ajax
    var dropList = document.getElementsByClassName("ajSelect");

    for (var i = 0; i < dropList.length; i++) {
        dropList[i].addEventListener('change', ajax)
    }

    function ajax() {
        var xhttp = new XMLHttpRequest();

        var ville = dropList[0].value;
        var sexe = dropList[1].value;
        var codeprojet = dropList[2].value;

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                createThreadHtml(JSON.parse(this.responseText));
            }

            else if (this.readyState == 4 && this.status != 200) {
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


        eTable += "</tbody></table>";
        var tableau = document.getElementById("tabResult");
        tableau.innerHTML = eTable;
    }


});

