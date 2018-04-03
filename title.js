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

    setInterval(loop, 650);

}

var x = 0;

var titleText = [ "t", "th", "the", "the ", "the r", "the re", "the rea", "the reap", "the reape", "the reaper", "the reaper 💀" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
	
}