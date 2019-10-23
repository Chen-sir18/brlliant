

//$('.h-li').click(function(){
//	console.log(this)
//	$(this).addClass('active');
//	$(this).siblings('.h-li').removeClass('active');
//})


//home1 our last news 图片上蒙层的移入移出事件

//$('.h-img').mouseenter(function(){
//	
//	$('.h-img-cover').addClass('on')
//})
//
//$('.h-img').mouseleave(function(){
//	
//	$('.h-img-cover').removeClass('on')
//})

//home bestseller new arrays
// 点击切换的功能
$('.h-new-text').click(function(){
	$(this).find('.h-new-font').addClass('action');
	$(this).siblings().find('.h-new-font').removeClass('action');
	$(this).find('.h-new-hover').addClass('active');
	$(this).siblings().find('.h-new-hover').removeClass('active')
	let showPage = $(this).attr('data-on');
	$('.'+ showPage).addClass('show').siblings().removeClass('show')
})

//自动获取遮罩的高度
//let imgBoxHeight = $('.h-img-bock').innerHeight() 
//	console.log(imgBoxHeight)
//	$('.h-img-cover').css({
//		height:imgBoxHeight + 'px'
//	})
window.onresize = function(){
	imgBoxHeight = $('.h-img-bock').innerHeight()
	console.log(imgBoxHeight)
	$('.h-img-cover').css({
		height:imgBoxHeight + 'px'
	})
}

//latest news 轮播部分
//$('.h-last-li').click(function(e){
//	if($(this).hasClass('on')){
//		return false;
//	}
//	else{
//
//		$(this).siblings().removeClass('on')
//		$(this).addClass('on')
//		let boxLeft = $('.h2-img-box').outerWidth() || $('.h-last-we').outerWidth()
//	    let activeIndex = $(this).index()
//	    let moveLeft = -activeIndex*boxLeft
//	    $(this).parent().prev().animate({
//	    	marginLeft:moveLeft + 'px'
//	    },400)
//	}
//})

$('.h-last-li').click(function(){
	
	if($(this).hasClass('on')){
		return false;
	}else{
		
		$(this).siblings().removeClass('on')
		$(this).addClass('on')
		let dealboxLeft = $(this).parents().prev().children().children().outerWidth()
		console.log(dealboxLeft)
		let activeIndex = $(this).index()
		let lastLeft = -activeIndex*dealboxLeft
		$(this).parent().prev().children().animate({
			marginLeft:lastLeft + 'px'
		},400)
		
	}
	
})

//best Selling



//$(function(){
//	outboxWidth = $('.h-bestselling-con').width()
//	startLeft = outboxWidth
//	console.log(outboxWidth)
//	
//})




	
	
//    	var hwidth = $('.h-bestselling-con').outerHeight()()
//    	console.log(hwidth)

	




//	let sellingIndex = $('.h-bestselling-con').index()
//	console.log(sellingIndex)
//	if(sellingIndex>=0){
//		$('.h-bestselling').animate({
//			marginLeft:outWidth + 'px'
//		},400)
//	}

//$('.h-bs-right').click(function(){
//	
//	let outWidth = $('.h-bestselling-con').outerWidth()
//	console.log(outWidth)
//	let sellingIndex = $('.h-bestselling-con').index()
//	console.log(sellingIndex)
//	if(sellingIndex>=0){
//		$('.h-bestselling').animate({
//			marginLeft:-outWidth + 'px'
//		},400)
//	}
//})