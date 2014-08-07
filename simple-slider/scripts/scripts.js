//  Simple Slider by Jean-Pierre Gassin
//	http://jpgassin.com

// Set up a count to see if we have reached our maximum number of images in an array
var imageCount = $('.sliderImage').length;

// Set the amout of time in between fading in and out (set to your needs)
var fadeInDelay = 3000;
var fadeOutDelay = 1770;

// Initialise the functions
fadeInSlides();
fadeOutSlides();

// Loops through each image and fades them in
function fadeInSlides() {
	$('.sliderImage').each(function(i) {
		$(this).delay(fadeInDelay*i).fadeIn('slow', function() {
			//console.log("Current Index: " + i + "    Image Count: " + imageCount);

			// When we've reached the end of the index, execute the loop again
			if (i == imageCount-1) {
	    		//console.log("We've reached the if statement!");
	        	setTimeout(fadeInSlides, 2400);
	        	setTimeout(fadeOutSlides, 2400);
			}
    	});
	});
}

// Loops through each image and fades them out
function fadeOutSlides() {
	$('.sliderImage').each(function(i) {
		$(this).delay(fadeOutDelay).fadeOut('slow', function() {
        	$(this).fadeOut('slow');
    	});
	});
}