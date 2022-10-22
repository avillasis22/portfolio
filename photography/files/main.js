$(document).ready(function() {

    $('body').css('display', 'none');
    $('body').fadeIn(500);

});

$('a').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('html').fadeOut('slow', newpage);
});

function newpage() {
    window.location = newLocation;
};

window.addEventListener('load', function() {
    document.querySelector('body').classList.add("loaded");
    document.getElementById("loader-wrapper").style.zIndex = "0";
});

if(performance.navigation.type == 2){
   location.reload(true);
}






sr.reveal('.image, .caption, .bioDiv', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    easing: 'ease',
    mobile: true,
    reset: true,
    viewFactor: 0.1,
});
