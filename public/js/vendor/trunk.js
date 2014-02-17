
$(function() {

	console.log("Trunk loaded");

	var items = $('.slideRight, .slideLeft');
	console.log(items);
	var content = $('.content');
	
	var open = function() {
							$(items).removeClass('close').addClass('open');

							if(!Modernizr.cssanimations) {
					
								$(".content.slideRight").css(
									{

										'margin-left' : '300px',
									}
								);
								$("header.slideRight").css(
									{
										'margin-left' : '300px',
									}
								);

							}

						}
	var close = function() { 
					console.log("Trunk close");
							$(items).removeClass('open').addClass('close');
							if(!Modernizr.cssanimations) {
								$(".slideRight").css(
									{
										'margin-left' : '0',
									}
								);
								$("header.slideRight").css(
									{
										'margin-left' : '0',
									}
								);
    
							}
						}


	content.click(function(){
		if (content.hasClass('open')) {$(close)}
	});



	$('#navToggleLink').on("click", function(event){
		event.preventDefault();
		if (content.hasClass('open')) {close()}
		else {open()}

	});


});