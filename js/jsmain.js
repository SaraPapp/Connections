$(document).ready(function () {
    console.log("hello");
    $(".js-modal-btn").each(function () {
        if ($(this).hasClass("js-video-vimeo")) {
            $(this).modalVideo({channel: 'vimeo'});
        } else {
            $(this).modalVideo();
        }
    });

    $('.js-carousel').slick({
        dots: true,
        infinite: true,
        //autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
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
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    detectMobile();
    $(window).on('resize', function(){
        detectMobile();
    });
    $('.tab').hover (function() {
        // add class to show for 1 microsecond the div with the full height
        $(this).find('.tab-text').addClass("js-height"); // 0 -> xxx
        var height = $(this).find('.tab-text').outerHeight(); // capture the xxx height
        $(this).find('.tab-text').removeClass("js-height"); // xxx -> 0

        // animate from 0 to xxx
        $(this).find('.tab-text').stop().animate({
            'height':height,
            'opacity': 1,
        },250);
    }, function (){ // animate from 0 to xxx
        $(this).find('.tab-text').stop().animate({
            'height':0,
            'opacity':0,
        },250);
    });
});
function detectMobile(){
    if ((/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))) {
        $("main").addClass("mobile");
    } else {
        $("main").removeClass("mobile");
    }
}