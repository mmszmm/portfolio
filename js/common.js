// JavaScript Document

$(function() {
	$('.nav-btn').click(function() {
		$(this).toggleClass('active');
		
		if ($(this).hasClass('active')) {
			$('.header_inner').addClass('open');
		} else {
			$('.header_inner').removeClass('open');
		}
	});
});

$(function () {
	var num = Math.ceil(3 * Math.random());
	$('.works').addClass('bg' + num);
});

