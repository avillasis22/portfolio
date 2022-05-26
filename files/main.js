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

sr.reveal('.bioHeader, .portfolio, .portfolioCaption, .bioText', {
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    easing: 'ease',
    mobile: true,
    reset: true,
    viewFactor: 0.2,
});

sr.reveal('.portfolioAnimation', {
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    easing: 'ease',
    mobile: true,
    reset: true,
    viewFactor: 0.2,
});

sr.reveal('.navBarLi', {
    origin: 'top',
    distance: '30px',
    duration: 800,
    easing: 'ease',
    mobile: true,
    viewFactor: 10,
});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
}
