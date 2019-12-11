(function($) {
    "use strict";

    // niceSelect
    $('select').niceSelect();
    // header-sticky
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 150) {
            $("header").removeClass("sticky");
            $(".header-top.bg-white").removeClass("bg-transparent");
            $(".header-bottom.bg-white").removeClass("bg-transparent");

        } else {
            $("header").addClass("sticky");
            $(".header-top.bg-white").addClass("bg-transparent");
            $(".header-bottom.bg-white").addClass("bg-transparent");
        }
    });

    $('.list-inline-item.ml-0').click(function(e) {
        // custom handling here
        e.preventDefault();
    });

    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: false,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i> </button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i> </button>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: false
                }
            }]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();



    // our-chefs slick slider
    $('#home-slider').slick({
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'> <i class='ti-angle-left'></i> </button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='ti-angle-right'></i></button>",
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // feature product slider
    $('.featured-slider').owlCarousel({
        center: true,
        loop: true,
        items: 1,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            767: {
                items: 1
            },

            1200: {
                items: 1
            }
        }
    });



    // feature product slider
    $('.featured-slider').owlCarousel({
        center: true,
        loop: true,
        items: 1,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: false
    });


    // our-chefs slick slider
    $('#chefs-slider').slick({
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'> <i class='ti-angle-left'></i> </button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='ti-angle-right'></i></button>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // owlCarousel
    $('.recipe-slider-active').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            767: {
                items: 2
            },

            1200: {
                items: 3
            }
        }
    });


    // box-slider-active
    $('.box-slider-active').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            767: {
                items: 1
            },

            1200: {
                items: 1
            }
        }
    });



    // init Isotope
    var $grid = $('.grid').isotope({});
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.filter-button-group button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    $('.venobox').venobox();
    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // venobox


})(jQuery);