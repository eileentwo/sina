$(function(){
	$a = $('#Tnav').find('a');
	
	$a.on('mouseover click',function(){
		i = $(this).index();
		$a.css('background','');
		$a.css('text-decoration','none');
		$a.eq(i).css('background','#ddd');
		$a.removeClass('nav_bc');
	})
	
})
