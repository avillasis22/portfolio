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

/*window.onmousemove = function(e) {

    if (e.target.classList.contains('dot')) {
    		//	Content of dot which is hovered
        var $target = e.target.nextElementSibling;

        //	Only work with hovered target
        //	Add visible class hovered elem to distinguish
        if (!$target.classList.contains('visible')) {
        		$target.classList.add('visible');
        } else {
            //	Get viewport offset of tooltip element
            var offset = $target.parentElement.getBoundingClientRect();
            //	Tooltip distance from mouse(px)
            var tipDist = 15;
            //	Calc and set new tooltip location
            $target.style.top = (e.clientY - offset.top + tipDist) + 'px';
            $target.style.left = (e.clientX - offset.left + tipDist) + 'px';
        }
    } else {
    		//	Remove visible class
        var content = document.getElementsByClassName('content');
        for (var i = 0; i < content.length; i++) {
        		content[i].classList.remove('visible');
        }
    }

};*/
