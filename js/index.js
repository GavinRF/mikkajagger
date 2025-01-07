
window.addEventListener('load', function(){
    var overlay = document.getElementById("overlay");
 
     overlay.style.height = '0%';
     overlay.style.opacity = '.0';
 
     overlay.style.transitionTimingFunction = 'ease-in-out';
     overlay.style.transition = 'all .8s'; 
 
    $("#preloader").fadeOut(4000); 
 
 });
