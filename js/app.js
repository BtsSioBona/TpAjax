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

            else if (this.readyState == 4 && this.status !=  200) {
                console.log("Erreur ajax :" + this.status);
            }
        };

        xhttp.open('POST', "ajax.php", true);
        xhttp.send();

    }
});

