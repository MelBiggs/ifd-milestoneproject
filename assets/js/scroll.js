/* global $*/

// The code for the return to top button was found at https://gist.github.com/bbrochier/6668684


$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.go-top').fadeIn(600);
    }
    else {
        $('.go-top').fadeOut(600);
    }
});

// Animate the scroll to top
$('.go-top').click(function(event) {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, '300');
});
