$(document).ready(function () {

    // fonction de contact ajax
    var dropList = document.getElementsByClassName("ajSelect");
    
    console.log(dropList);

    for (var i = 0; i < dropList.length; i++) {
        dropList[i].addEventListener('change', ajax)
    }

    function ajax() {
        console.log("test");
    }
});

