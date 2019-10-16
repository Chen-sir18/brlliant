

$('.h-li').click(function(){
	console.log(this)
	$(this).addClass('active');
	$(this).siblings('.h-li').removeClass('active');
})


//home1 our last news 图片上蒙层的移入移出事件

$('.h-img').mouseenter(function(){
	
	$('.h-img-cover').addClass('on')
})

$('.h-img').mouseleave(function(){
	
	$('.h-img-cover').removeClass('on')
})