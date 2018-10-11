jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		animationLoop: true,
		direction: "horizontal",
		controlNav: false,
		directionNav: true,
		pauseOnAction: false,
		pauseOnHover: true,
		slideshow: true,
		startAt: 0,
		slideshowSpeed: 7000,
		animationSpeed: 600,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//open the testimonials modal page
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all').removeClass('is-visible');	
	    }
    });
    
	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});
});

//javascript for responsive navigation, toggle hamburger menu

jQuery(document).ready(function(){
	
	jQuery(".menu-trigger").click(function() {
		jQuery(".style-nav").slideToggle(600, function() {
			jQuery(this).toggleClass("nav-expanded").css('display', '');
		});
		
	});

});