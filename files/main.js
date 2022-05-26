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

function Reload() {
    try {
        var headElement = document.getElementsByTagName("head")[0];
        if (headElement && headElement.innerHTML)
            headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
    } catch (e) {}
}


if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
    window.onpageshow = function(evt) {
        if (evt.persisted) {
            document.body.style.display = "none";
            location.reload();
        }
    };
}

window.addEventListener('load', function() {
    document.querySelector('body').classList.add("loaded");
    document.getElementById("loader-wrapper").style.zIndex = "0";
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
