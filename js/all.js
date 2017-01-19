$(document).ready(function() {
	//nivoslider
	$(window).on('load', function() {
    $('#slider').nivoSlider(); 



    $('.top a').click(function(event) {
  	event.preventDefault();
  	$('html,body').animate({
    scrollTop: 0
  }, 10000);

  });   
	}); 

});
