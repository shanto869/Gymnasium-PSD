$(document).ready(function(){

	// banner slider
	$('.banner-slider').slick({
		prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
		nextArrow: '<i class="fas fa-chevron-right slick-next right-arrow"></i>',
		dots: true,
		autoplay: true,
	});

	// about video pop-up
	$('.venobox').venobox();
});