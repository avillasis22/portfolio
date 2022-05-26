$(document).ready(function() {

    $('body').css('display', 'none');

    $('body').fadeIn(1000);



    $('.link').click(function() {

        event.preventDefault();

        newLocation = this.href;

        $('body').fadeOut(1000, newpage);

    });

    function newpage() {

        window.location = newLocation;

    }

});


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
