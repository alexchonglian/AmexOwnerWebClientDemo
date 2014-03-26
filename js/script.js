$(document).ready(function(){
	$("a.new_window").attr("target", "_blank");
	$('.roles').hide();

	$('#manager').show('fast');


	$('#manager_ctrl').click(function() {
		$('.roles').hide();
		$('#manager').show('fast');
	});

	$('#waiter_ctrl').click(function() {
		$('.roles').hide();
		$('#waiter').show('fast');
	});

	$('#server_ctrl').click(function() {
		$('.roles').hide();
		$('#server').show('fast');
	});

	$('#chef_ctrl').click(function() {
		$('.roles').hide();
		$('#chef').show('fast');
	});

	$('#bartender_ctrl').click(function() {
		$('.roles').hide();
		$('#bartender').show('fast');
	});

	$('#delivery_ctrl').click(function() {
		$('.roles').hide();
		$('#delivery').show('fast');
	});

	$('#new_ctrl').click(function() {
		$('.roles').hide();
		$('#new').show('fast');
	});

	$('#new_ctrl2').click(function() {
		$('.roles').hide();
		$('#new').show('fast');
	});

});