$(document).ready(function () {
    $(".js-modal-btn").each(function () {
        if ($(this).hasClass("js-video-vimeo")) {
            $(this).modalVideo({
                channel: 'vimeo',
                vimeo: {
                    autoplay: true,
                    loop: true
                }
            });
        } else {
            $(this).modalVideo({
                channel: 'youtube',
                youtube: {
                    autoplay: 0,
                    loop: 1
                },
            });
        }
    });

    $('.one-time').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        swipe: true,
        fade: false,
        responsive: [
            {
                breakpoint: 9000,
                settings: {
                    fade: true,
                    arrows: false,
                    swipe: false,
                    cssEase: 'linear'
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    arrows: true,
                    swipe: true
                }
            }
        ]
    });

    $('.js-carousel').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    detectMobile();
    $(window).on('resize', function () {
        detectMobile();
    });
    $('.tab').hover(function () {
        // add class to show for 1 microsecond the div with the full height
        $(this).find('.tab-text').addClass("js-height"); // 0 -> xxx
        var textheight = $(this).find('.tab-text').outerHeight(); // capture the xxx height
        $(this).find('.tab-text').removeClass("js-height"); // xxx -> 0

        $(this).find('.learn-more-btn').addClass("js-height"); // 0 -> xxx
        var buttonheight = $(this).find('.learn-more-btn').outerHeight(); // capture the xxx height
        $(this).find('.learn-more-btn').removeClass("js-height"); // xxx -> 0

        // animate from 0 to xxx
        $(this).find('.tab-text').stop().animate({
            'height': textheight,
            'opacity': 1,
        }, 250);
        $(this).find('.learn-more-btn').stop().animate({
            'height': buttonheight,
            'opacity': 1,
        }, 250);
    }, function () { // animate from 0 to xxx
        $(this).find('.tab-text').stop().animate({
            'height': 0,
            'opacity': 0,
        }, 250);
        $(this).find('.learn-more-btn').stop().animate({
            'height': 0,
            'opacity': 0,
        }, 250);
    });
    // De-Focus arrows for the sliders because it affects the default arrow style
    $(".slick-arrow").click(function (e) {
        e.preventDefault();
    }).focusin(function (e) {
        $(this).blur();
    });
    //$(".tab .img-hover").each(function(){
    //   var outer = ($(this).find('img').outerWidth() - $(this).outerWidth())/ 2;
    //   $(this).find('img').css({'margin-left': outer * -1})
    // });


    $('.js-change-slide').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var index = $('.one-time').find(target).index();
        $('.names .name.focus').removeClass('focus');
        $(this).parents('.name').addClass('focus');
        $('.one-time').slick('slickGoTo', index);
        setTimeout(function () {
            $(target).css({'position': 'absolute', 'left': '0', 'opacity':0});

            setTimeout(function () {
                $(target).animate({'opacity': '1'},350);
            },150);
        }, 300);
    });

    // Transforms names list into a slider
    $('.names').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: false,
        arrows: false,
        swipe: false,
        vertical: true
    });

    // This binds the scroll wheel to the names list
    $('.names').bind('mousewheel', function (e) {
        // If is positive then it's scrolling up
        if (e.originalEvent.wheelDelta > 0) {
            $('.names').slick('slickPrev');
        } else {
            // Else is scrolling down
            $('.names').slick('slickNext');
        }
        // Prevent scroll of the page, while scrolling on the element
        e.stopPropagation();
        e.preventDefault();
    });
});

// Go to top button

$(function () {
    //Scroll event
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('.go-top').fadeIn('slow');
        if (scrolled < 200) $('.go-top').fadeOut('slow');
    });
    //Click event
    $('.go-top').hide();
    $('.go-top').click(function () {
        $("html, body").animate({scrollTop: "0"}, 500);
    });
});

// Detect mobile

function detectMobile() {
    if ((/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))) {
        $("main").addClass("mobile");
    } else {
        $("main").removeClass("mobile");
    }
}

