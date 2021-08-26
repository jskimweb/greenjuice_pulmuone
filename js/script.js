$(document).ready(function() {
    $('.go-top').click(function(event) {
        event.preventDefault();
        var tgY = $('body').offset().top;
        $('html, body').animate({
            scrollTop: tgY,
        });
    });
});

window.onload = function() {
    new Swiper('.sw-main-slide', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 500,
        pagination: {
            el: '.sw-main-slide__pg',
            type: 'fraction',
        },
    });

    new Swiper('.sw-personal', {
        // slidesPerview: 4,
        // slidesPerGroup: 4,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 500,
        pagination: {
            el: '.sw-personal__pg',
            clickable: true,
        },
    });

    new Swiper('.sw-banner-slide', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 500,
    });
}