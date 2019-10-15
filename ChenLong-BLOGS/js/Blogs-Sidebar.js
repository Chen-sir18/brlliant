//轮播
//左按钮
$('.an-left').click(function(){  //添加点击
	let leftwidth = parseInt($('.slick-item').outerWidth(true)) //得到内容盒子的宽度 + 上边距outerWidth(true)  转为整数
	let outerleft = parseInt($('.slick-track').css('left')) //得到内容盒子的left  转为整数
	outerleft = outerleft + leftwidth   //宽度加在left上
	if(outerleft >= 0){  //判断 值大于等于0
		$('.slick-track').animate({  //装内容的父级盒子运动
			left: outerleft   // left值
		},500,function(){  //时间，回调函数
			$('.slick-track').css({  //修改装内容的父级盒子left 为-1200
				left: '-1200px'
			})
		})
	}else{
		$('.slick-track').animate({  //否则装内容的父级盒子运动
			left: outerleft		//left为outerleft值
		},500)
	}
	
})
//右按钮
$('.an-right').click(function(){	
	let leftwidth = parseInt($('.slick-item').outerWidth(true))
	let outerleft = parseInt($('.slick-track').css('left'))
	outerleft = outerleft - leftwidth
	if(outerleft <= -1800){
		$('.slick-track').animate({
			left: outerleft
		},500,function(){
			$('.slick-track').css({
				left: '-600px'
			})
		})
	}else{
		$('.slick-track').animate({
			left: outerleft
		},500)
	}
	
})
	

