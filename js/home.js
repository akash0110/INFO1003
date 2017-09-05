$(document).ready(function() {
    var toggleNav = false;
    var nav = $('.nav');
    nav.click(function(event) {
        if(!toggleNav) {
            nav.addClass('nav-activated');

            toggleNav = true;
        } else {
            nav.removeClass('nav-activated');
            
            toggleNav = false;
        }
    });

});