// Navbar Transition + Back-to-Top Btn

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        // Navbar colored
        $('nav.navbar').addClass('bg-light');
        // Back to Top Btn appearing
        $('#back-to-top-btn').addClass('d-inline');
    } else {
        // Navbar transparent
        $('nav.navbar').removeClass('bg-light');
        // Back to Top Btn disappearing
        $('#back-to-top-btn').removeClass('d-inline');
    }
})

// Smooth Scroll
$(document).ready(function () {
    $('a.smooth').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Copyright Year
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
   $('#year').text(currentYear);
});

// AOS Animation on Scroll library

AOS.init({
    duration: 900,
    easing: 'ease-out',
    offset: 300,
    disable: 'mobile'
});
