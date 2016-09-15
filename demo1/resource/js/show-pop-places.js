$(document).ready(function(){
  $('.pop-places-info').hide();
  $showing = false;
});
$(document).on('click', '#show', function() {
	console.log("test");
	$(".pop-places-info").slideToggle("easing");
	if ($showing == false) {
		$("#showing-button").removeClass("glyphicon-chevron-up");
		$("#showing-button").addClass("glyphicon-chevron-down");
		$showing = true;
	}
	else {
		$("#showing-button").removeClass("glyphicon-chevron-down");
		$("#showing-button").addClass("glyphicon-chevron-up");
		$showing = false;
	}
});
