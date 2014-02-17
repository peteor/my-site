/** 
 * Bootstrap
 * Loads all the required JS for the site and
 * handles loding based on screen size.
 */

// IE console fix...
if (typeof console === "undefined") {
	this.console = {
		log: function() {}
	};
}

/**
 * Check for touch events
 */

yepnope([{
	test: Modernizr.touch, // Modernizr.touch 
	yep: ['public/js/vendor/fastclick.js'], // Load fastclick to improve mobile response
	complete: function() {
		if (Modernizr.touch) {
			console.log("Touch enabled browser");
			window.addEventListener('load', function() {
				FastClick.attach(document.body);
			}, false);
		}
	}
}]);


/**
 * Enquire JS
 * Used to handle the loading and unloding of JavaScript
 */
enquire.register("all and (min-width: 0)", {
	match: function() {
		console.log("Cascading breakpoint entered: > Nothing");

		yepnope([{
			// Are we in a modern browser? (One that supports media queries?)
			test: Modernizr.mq('only all'),
			yep: ['public/js/libs/jquery-2.0.3.min.js'], // Load new JQuery
			nope: ['public/js/libs/jquery-1.10.2.min.js'], // Load old JQuery
			complete: function() {
				$(document).ready(function() {
					var jqV = jQuery().jquery; // Get JQ version
					console.log("JQuery " + jqV + " loaded");
					// Handle animations
					$(".js-pGrid-four-inner-first").addClass("animate-in").removeClass("animate-in");
					$(".js-anim-hook").addClass("animate-in");
						$(window).scroll(function() {
						var topOfWindow = $(window).scrollTop();
						if (topOfWindow > 20) {
							$(".header").addClass("header-hasBackground");
						} else {
							$(".header").removeClass("header-hasBackground");
						}
						$('.animate-in').each(function() {
							var imagePos = $(this).offset().top;
							if (imagePos < topOfWindow + 700) {
								$(this).removeClass("animate-in");
							}
						});
					});
			
				});
			}
		}]);

	},
	unmatch: function() {
		console.log("Cascading breakpoint left: > tablet");
	}
});




