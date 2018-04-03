if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = [ "E", "EG ", "EGO", "EGOT", "EGOTR", "EGOTRI", "EGOTRIP", "EGOTRI", "EGOTR", "EGOT", "EGO", "EG" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
