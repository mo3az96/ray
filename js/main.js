$(window).on('load', function () {
    $("body").removeClass("overflow");
    wow = new WOW({
        mobile: false
    })
    wow.init();
});
$(document).ready(function () {
    var prevScroll = $(window).scrollTop();

    //////////** header **//////////
    if ($(this).scrollTop() >= 500) {
        $("header").addClass("fixed-header");
    } else {
        $("header").removeClass("fixed-header");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
        var currentScroll = $(window).scrollTop();
        prevScroll < currentScroll && prevScroll > 0 ? $("header").removeClass("fixsedt") : $("header").addClass("fixsedt"),
            prevScroll = currentScroll
    });
    ///////// ** projects slider ** /////////
    var projectswiper = new Swiper('.projects-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
            1499: {
                slidesPerView: 5,
                spaceBetween: 17,
            },
        },
        pagination: {
            el: '.projects-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.projects-slider .swiper-btn-next',
            prevEl: '.projects-slider .swiper-btn-prev',
        },
    });

    ///////// ** partner hover ** /////////
    $(".partner-item").hover(
        function () {
            $(this).addClass("active");
            $(".partner-item").not(this).addClass("inactive");
        }, function () {
            $(".partner-item").removeClass("inactive active");
        }
    );

    ///////// ** contact Section ** /////////
    $('.float-anchor').click(function () {
        $(".floating-section").addClass("active");
        $("body").addClass("overflow");
        $(".overlay").fadeIn();
    })
    $('.overlay,.float-cancel').click(function () {
        $(".floating-section").removeClass("active");
        $("body").removeClass("overflow");
        $(".overlay").fadeOut();
    })

    ///////// ** feats slider ** /////////
    if ($(window).width() <= 991) {
        $('.feats-section .swiper-wrapper').wrap("<div class='swiper-container'></div>");
        $('.feats-section .feats-items').removeClass("feats-items");
        var projectswiper = new Swiper('.feats-section .swiper-container', {
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
            },
            pagination: {
                el: '.feats-section .swiper-pagination',
                clickable: true,
            },
        });
    }
    ///////// ** values slider ** /////////
    if ($(window).width() <= 991) {
        $('.values-section .swiper-wrapper').wrap("<div class='swiper-container'></div>");
        $('.values-section .values-grid').removeClass("feats-items");
        var projectswiper = new Swiper('.values-section .swiper-container', {
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            },
            pagination: {
                el: '.values-section .swiper-pagination',
                clickable: true,
            },
        });
    }

    ///////// ** footer ** /////////
    if ($(window).width() <= 991) {
        $(".footer-title").addClass("mo-accordion");
        $(".footer-title~ul").addClass("mo-panel");
    }

    ///////// ** ACC ** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings("ul").css('display') == 'none') {
            $(this).siblings("ul").slideDown(500);
        } else {
            $(this).siblings("ul").slideUp(500);
        }
        $(".mo-accordion").not(this).siblings("ul").slideUp(500);
    })

    ///////// ** About ACC ** /////////
    if ($(window).width() <= 991) {
        $('.about-item .item-head').click(function () {
            $(".about-item .item-head").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings("p").css('display') == 'none') {
                $(this).siblings("p").slideDown(500);
            } else {
                $(this).siblings("p").slideUp(500);
            }
            $(".about-item .item-head").not(this).siblings("p").slideUp(500);
        })
    }

    ///////// ** Menu ** /////////
    $('.menu-btn').click(function () {
        $('nav').slideDown("300", function () {
            $("nav").addClass("nav-in");
        });
        $("body").addClass("overflow");
    })
    $('.menu-close').click(function () {
        $('nav').slideUp("300", function () {
            $("nav").removeClass("nav-in");
        });
        $("body").removeClass("overflow");
    })

    ///////// ** investments ** /////////
    // if ($(".investments-imgs-cont").length > 0) {
    //     if ($(window).width() > 1200) {
    //         var scene = $('#scene').get(0);
    //         var parallaxInstance = new Parallax(scene);
    //     }
    //     if ($(window).width() <= 1199) {
    //         $(".investments-imgs-cont").unwrap();
    //     }
    // }
    ///////// ** select ** /////////
    if ($(window).width() > 992) {
        $("select.form-control").select2()
    }
    $(".input-file").change(function () {
        var file = $('.input-file')[0].files[0]
        if (file) {
            $(this).siblings(".file-pre").find(".input-text").html(file.name);
        }
    });
    $(".inline-file input").change(function () {
        var file = $('.inline-file input')[0].files[0]
        if (file) {
            $(this).siblings(".input-pre").find("span").html(file.name).addClass("active");
        }
    });
    if ($(window).width() < 1200 && $(window).width() > 767) {
        $('.investment-item').click(function () {
            $(this).find(".item-desc").toggleClass("active");
        })
    }
    if ($(window).width() < 767) {
        $('.investment-item').click(function () {
            if ($(this).find(".item-desc").css('display') == 'none') {
                $(this).find(".item-desc").slideDown(500);
            } else {
                $(this).find(".item-desc").slideUp(500);
            }
            $(".investment-item").not(this).find(".item-desc").slideUp(500);
        })
    }
});