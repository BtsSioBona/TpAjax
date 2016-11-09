$(document).ready(function () {

    // fonction de contact ajax
    var dropList = document.getElementsByClassName("ajSelect");

    for (var i = 0; i < dropList.length; i++) {
        dropList[i].addEventListener('change', ajax)
    }

    function ajax() {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }

            else if (this.readyState == 4 && this.status != 200) {
                console.log("Erreur ajax :" + this.status);
            }
        };

        xhttp.open('POST', "ajax.php", true);
        xhttp.send();

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




        eTable += "</tbody></table>";
        var tableau = document.getElementById("tabResult");
        tableau.innerHTML = tableau;
    }


});

