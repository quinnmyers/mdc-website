$(document).ready(function () {
  $(".hamburger").on('click', function() {
    $(".mobile-nav-container").slideToggle();
  });
});

$(function() {
    $('.portfolio__slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
})
