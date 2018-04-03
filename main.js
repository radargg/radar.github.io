$(document).ready(function() {
 
    window.SetVolume = function(val)
    {
    var player = document.getElementById('bg'); // video/music needs to have an id class. eg: <video id="bg" autoplay loop>
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
    }
   
    });