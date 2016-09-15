$(document).on('click', '#moreinfo', function() {
	$('#popup').popup('show');
	$('#popup-title').text($('#moreinfo').val());
});

$(document).on('click', '#close', function() {

	$('#popup').popup('hide');
});

