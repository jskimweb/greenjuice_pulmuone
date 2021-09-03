window.onload = function() {
    $('.go-top').click(function() {
        var tgY = $('body').offset().top;
        $('html, body').animate({
            scrollTop: tgY,
        });
    });

    $(window).scroll(function(){  
        var scY = $(window).scrollTop();
        if(scY > 0) {
            $('.go-top').addClass('go-top-show');
        }
        else {
            $('.go-top').removeClass('go-top-show');
        }
    });

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
        slidesPerView: 4,
        slidesPerGroup: 4,
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

    $('.family').click(function() {
        $('.family').toggleClass('family--rotate');
        $('.family-list').toggleClass('family-list--open');
    });
}