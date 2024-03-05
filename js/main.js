$(function() {

  'use strict';

  $('.js-menu-toggle').click(function(e) {

  	var $this = $(this);

  	

  	if ( $('body').hasClass('show-sidebar') ) {
  		$('body').removeClass('show-sidebar');
  		$this.removeClass('active');
  	} else {
  		$('body').addClass('show-sidebar');	
  		$this.addClass('active');
  	}

  	e.preventDefault();

  });

  // click outisde offcanvas
	$(document).mouseup(function(e) {
    var container = $(".sidebar");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('show-sidebar') ) {
				$('body').removeClass('show-sidebar');
				$('body').find('.js-menu-toggle').removeClass('active');
			}
    }
	}); 

    

});


// stats 

document.addEventListener("DOMContentLoaded", function() {
const statsRows = document.querySelectorAll(".stats-row h1");
const finalValues = [22, 22, 22, 22]; // Final values for each h1 tag

statsRows.forEach((element, index) => {
	animateValue(element, 0, finalValues[index], 1000); // Adjust duration as needed
});

function animateValue(element, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
	if (!startTimestamp) startTimestamp = timestamp;
	const progress = Math.min((timestamp - startTimestamp) / duration, 1);
	element.textContent = Math.floor(progress * (end - start) + start);
	if (progress < 1) {
		window.requestAnimationFrame(step);
	}
	};
	window.requestAnimationFrame(step);
}
});