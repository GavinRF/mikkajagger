
window.addEventListener('load', function(){
    var overlay = document.getElementById("overlay");
    var loader = document.getElementById("preloader");
 
     overlay.style.height = '0%';
     overlay.style.opacity = '.0';
 
     overlay.style.transitionTimingFunction = 'ease-in-out';
     overlay.style.transition = 'all .8s'; 
 
    $("#preloader").fadeOut(4000); 
 
 });