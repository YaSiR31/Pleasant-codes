$ (document).ready(function(){

});

$(document).ready(function() {

	$('.js--section-features').waypoint(function(direction) {
		if (direction == 'down') {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	})

	$('h1').click(function() {
		$(this).css('background-color', '#ff000')
	})


	// var waypoints = $('#handler-first').waypoint(function(direction) {
	//   notify(this.element.id + ' hit 25% from top of window') 
	// }, {
	//   offset: '25%'
	// })

});