$(document).ready(function() {

    if ($('#rangeSlider1').length > 0) {
        var slider1 = new rSlider({
            target: '#rangeSlider1',
            values: {
                min: 0,
                max: 500
            },
            step: 1,
            range: true,
            set: [0, 500],
            scale: false,
            labels: false,
            onChange: function(vals) {
                console.log(vals);
            }
        });
    }

    if ($('#rangeSlider2').length > 0) {
        var slider2 = new rSlider({
            target: '#rangeSlider2',
            values: {
                min: 0,
                max: 500
            },
            step: 1,
            range: true,
            set: [0, 500],
            scale: false,
            labels: false,
            onChange: function(vals) {
                console.log(vals);
            }
        });
    }
    if ($('#rangeSlider3').length > 0) {
        var slider3 = new rSlider({
            target: '#rangeSlider3',
            values: {
                min: 0,
                max: 500
            },
            step: 1,
            range: true,
            set: [0, 500],
            scale: false,
            labels: false,
            onChange: function(vals) {
                console.log(vals);
            }
        });
    }



    $(".bars").click(function() {
        $('.menu-btn').toggleClass("pushed");
    });

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    if (sync1.length > 0) {
        sync1.owlCarousel({
            singleItem: true,
            autoPlay: false,
            slideSpeed: 1000,
            nav: true,
            navigation: true,
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        });
    }

    if (sync2.length > 0) {
        sync2.owlCarousel({
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 4],
            itemsMobile: [479, 4],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function(el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });
    }


    function syncPosition(el) {
        var current = this.currentItem;
        $("#sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if ($("#sync2").data("owlCarousel") !== undefined) {
            center(current)
        }
    }

    $("#sync2").on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo", number);
    });

    function center(number) {
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in sync2visible) {
            if (num === sync2visible[i]) {
                var found = true;
            }
        }

        if (found === false) {
            if (num > sync2visible[sync2visible.length - 1]) {
                sync2.trigger("owl.goTo", num - sync2visible.length + 2)
            } else {
                if (num - 1 === -1) {
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if (num === sync2visible[sync2visible.length - 1]) {
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if (num === sync2visible[0]) {
            sync2.trigger("owl.goTo", num - 1)
        }
    }

    $('.menu-btn').click(function() {
        $('.menu ul').slideToggle();
    })
    $('select').niceSelect();

    // Owl slider 
    if ($('#listSlider').length > 0) {
        var owl = $('#listSlider');
        owl.owlCarousel({
            autoplay: true,
            autoplayTimeout: 10000,
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            navigation: true,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
        });
    }


    // popup 
    if ($('.view a').length > 0) {
        $('.view a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        })
    }
});