$(document).ready(function(){

// menu bar functions
	$('.low').hover(function(){
		$(this).animate({
			'font-size': '20px',
		});
		$(this).css({
			'cursor' : 'pointer'
		});
	},function(){
		$(this).animate({
			'font-size': '14px',
		});
		$(this).css({
			'cursor' : 'default'
		});
	});

});
