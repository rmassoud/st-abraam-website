jQuery(document).ready(function($) {
    /**
     * Shrink Header
     */
    var shrinkHeader = 300;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            $('.navbar').addClass('shrink');
        }
        else {
            $('.navbar').removeClass('shrink');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    $('.owl-carousel').owlCarousel();

    // $('.owl-carousel').owlCarousel();

    // $('.owl-carousel2').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     navText: false,
    //     responsive:{
    //         0:{
    //             items:1
    //         }
    //     }
    // });
});


(function ($, Drupal) {
    Drupal.behaviors.myModuleBehavior = {
        attach: function (context, settings) {
            $('input.myCustomBehavior', context).once('myCustomBehavior').each(function () {
                // Apply the myCustomBehaviour effect to the elements only once.
            });
        }
    };
})(jQuery, Drupal);