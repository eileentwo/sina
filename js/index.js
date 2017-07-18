window.onload = function(){
	var Nav = document.getElementById('Tnav');
	var aA = Nav.getElementsByTagName('a');
	var aUl = Nav.getElementsByTagName('ul');
	
	var m=0;
	
	
	for ( var i=0; i<aUl.length; i++ ){
		
		
		aA[i].index = i;
		aA[i].onmouseover =Over;
		function Over(){
			m=this.index;
			clearTimeout(Nav.timer);
			for ( var i=0; i<aUl.length; i++ ){
				aUl[i].style.display = 'none'
			}
			aUl[m].style.display = 'block';
		}
		aA[i].onmouseout =Out;
		function Out(){
			Nav.timer = setTimeout(function(){
				for ( var m=0; m<aUl.length; m++ ){
					aUl[m].style.display = 'none';
				}
			},400)
		}
		aUl[i].onmouseover=function (){
			clearTimeout( Nav.timer);
			this.style.display = 'block'
		}
		aUl[i].onmouseout =Out;
	}
	//导航部分结束
	//轮播图部分开始
	var autoplay = document.getElementById('autoplay');
	var oDimg = autoplay.getElementsByTagName('div')[0];
	var oDul = autoplay.getElementsByTagName('ul')[0];
	var aDLi = oDul.getElementsByTagName('li');
	var str ='';
	var num =0;
	
	var arrUrl = [
		"<a href='02.html'><img src='img/img2/7197.jpg'/></a>",
		"<a href='02-2.html'><img src='img/img2/67110a0cjw1f52x6wtpx7j215o09qgso.jpg'/></a>",
		"<a href='02-3.html'><img src='img/img2/banner_6.png'/></a>",
		"<a href='02-4.html'><img src='img/img2/banner_5.png'/></a>",
		"<a href='02-5.html'><img src='img/img2/banner_2.png'/></a>"
	]
	
	for ( var i=0; i<arrUrl.length; i++ ){
		oDul.innerHTML +='<li></li>';
	}
	
	function fnTab(){
		oDimg.innerHTML = arrUrl[num];
		for (var i=0; i<aDLi.length; i++ ){
			aDLi[i].style.backgroundColor = '';
		}
		aDLi[num].style.backgroundColor = '#82CBF2';
	} fnTab();
	
	for( var i=0; i<aDLi.length; i++ ){
		aDLi[i].index = i;			// 索引值
		aDLi[i].onmouseover = function (){
			clearInterval( autoplay.timer );
			num = this.index;
			fnTab();
		};
	}
	
	function autoPlay(){
		autoplay.timer = setInterval(function(){
			num++;
			num%= arrUrl.length;
			fnTab();
		},1500)
	}
	setTimeout(autoPlay,1500)
	oDimg.onmouseover = function(){
		clearInterval( autoplay.timer );
	}
	aDLi.onmouseover =oDimg.onmouseover;
	oDimg.onmouseout = autoPlay;
	
	//轮播图部分结束
	//box5部分开始
		var oBox5 = document.getElementById('box5');
		var aLi = oBox5.getElementsByTagName('li');
		var aEm = oBox5.getElementsByTagName('em')[0];
		var aP= oBox5.getElementsByTagName('p');
		
		
		var n=0;
		function over(){
			aP[n].style.display = 'block';
			
		}
		over();
		
		for (var i =0; i<aLi.length;i++){
			aLi[i].index = i;
			aLi[i].onmouseover = function(){
				n=this.index;
				for ( var i=0; i<aP.length; i++ ){
						aP[i].style.display = 'none';
					}
				over();
				for (var i =0; i<aLi.length; i++){
					aLi[i].index = i;
						if(aLi[i] !=this){
							aLi[i].getElementsByTagName('em')[0].className=' ';
						}
					}
					this.getElementsByTagName('em')[0].className='opci';
			};
		
		};	
		
	}
		