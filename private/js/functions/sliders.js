'use strict';

export default function (trigger) {

    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                dots: true,
                breakpoint: 769,
                arrows: true,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                dots: true,
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slider__deuxAlpes').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slider__destinations').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                dots: true, 
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*function stretchFeedbackSlider() {

        var $slider = $(".responsive");
        var oldWidth = $slider.width();

        stretchingSlides();
        $slider.on('breakpoint', stretchingSlides)
        $slider.on('setPosition', function(){
            var newWidth = $slider.width();
            if (oldWidth !== newWidth) {
                stretchingSlides();
                oldWidth = newWidth;
            }
        });

        function stretchingSlides() {
            var $slides = $slider.find(".slider__content");
            var heightSlides = [];
            var maxHeight;

            $slides.css('height', 'auto');
            $slides.each(function(){
                heightSlides.push($(this).height())
            })
            maxHeight  = Math.max.apply(null, heightSlides);

            $slides.height(maxHeight);
        }
    }

    $('.responsive').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 50 +  'px');
    });*/
}
