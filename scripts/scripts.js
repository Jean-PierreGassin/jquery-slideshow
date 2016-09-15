//  Simple Slider by Jean-Pierre Gassin
//  http://jpgassin.com

$(document).ready(function() {
    var simpleSlider = {
        // Configuration
        imageCount: $('.sliderImage').length,
        fadeInDelay: 3000,
        fadeOutDelay: 1770,

        fadeInSlides: function() {
            $('.sliderImage').each(function(i) {
                $(this).delay(simpleSlider.fadeInDelay * i).fadeIn('slow', function() {
                    // When we've reached the end of the array, execute the loop again
                    if (i == simpleSlider.imageCount -1) {
                        setTimeout(simpleSlider.fadeInSlides, 2400);
                        setTimeout(simpleSlider.fadeOutSlides, 2400);
                    }
                });
            });
        },

        fadeOutSlides: function() {
            $('.sliderImage').each(function(i) {
                $(this).delay(simpleSlider.fadeOutDelay).fadeOut('slow', function() {
                    $(this).fadeOut('slow');
                });
            });
        }
    };

    simpleSlider.fadeInSlides();
    simpleSlider.fadeOutSlides();
});
