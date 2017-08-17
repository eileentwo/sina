$(function(){
	$ul1 = $('#item5').find('.app');
	$ul2 = $('#item5').find('.app-view');
	$aLi1 = $ul1.find('li');
	$aLi2 = $ul2.find('li');
	
	$aLi2.eq(0).css('display','block');
	$aLi1.mouseover(function(){
		i = $(this).index();
		$aLi2.css('display','none');
		$aLi2.eq(i).css('display','block');
	})
	
})