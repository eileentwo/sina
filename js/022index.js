$(function(){
	$app = $('#App').find('.app');
	$p = $('#App').find('.triangle');
	$detail = $('#App').find('.detail');
	
	console.log($p);
	$p.eq(0).css('display','block');
	$detail.eq(0).css('display','block');
	$app.mouseover(function(){
		i = $(this).index();
		
		$detail.css('display','none');
		$detail.eq(i).css('display','block');
		$p.css('display','none');
		$p.eq(i).css('display','block');
		if(i<2){
			$detail.eq(0).css('left','0');
			$detail.eq(1).css('left','0');
		}
		if(i>=2){
			$detail.eq(5).css('right','0');
			$detail.eq(4).css('right','-80px');
			$detail.eq(3).css('right','-280px');
			$detail.eq(2).css('right','-440px');
		}
	})
})
