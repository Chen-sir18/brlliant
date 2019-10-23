function goodsinfo(){
	$('.h-search').click(function () {
    //获取文档的宽和高
    var maskWidth = '100%';
    var maskHeight = $(document).height();
    //遮罩层初始化
    $('<div class="shop-mask-cen"></div>').appendTo($('body'));
    $('.shop-mask-cen').css({
      'position': 'absolute',
      'top': 0,
      'left': 0,
      'background': 'black',
      'opacity': 0.5,
      'width': maskWidth,
      'height': maskHeight,
      'z-index': 2
    });
    $('body').css({'overflow-y': 'hidden'});
    var data = [];//保存数据的数组
    //将一行的数据添加到数据中
    $(this).parent().siblings().each(function () {
      data.push($(this).text())
    });
    //将内容显示到弹出层中
    $('.shop-proDiv-box').children().each(function (i) {
      $(this).children('span').text(data[i]);
    });
    $('.shop-proDiv-box').show();//显示弹出层
    //关闭操作
    $('.shop-close-btn').click(function () {
      $(this).parent().hide();
      $('.shop-mask-cen').remove();
      $('body').css({'overflow-y': 'inherit'});
    });
    $('.shop-mask-cen').click(function () {
      $('.shop-close-btn').parent().hide();
      $(this).remove();
      $('body').css({'overflow-y': 'inherit'});
    });
 });
}

//home2 bestselling
let api = "http://192.168.97.218:3001/goods"
	$.ajax({
		url:api,
		type:'get',
		data:{
			key:'Selling'
		},
		datatype:'json',
		success:function(res){
			let data = res.data
			$('.h-bestselling').empty()
			if(res.success == 200){
				for(let i=0;i<3;i++){
					let sellingImg = 'img/' + data[i].g_img;
					let sellingTitle = data[i].g_title;
					let sellingDetail = data[i].g_details;
					let sellingPrice = data[i].g_price;
					
					var html = `<div class="h-bestselling-con">
					<div class="h-bs-list">
						<div class="h-bs-imgbox">
							<img src="${sellingImg}" alt="img" />
							<div class="h-bs-circle">
								<span class="glyphicon glyphicon-search"></span>
							</div>
						</div>
						<div class="h-list-style">
							<h5 class="h-bs-title">
								<span>${sellingTitle}</span>
							</h5>
							<div class="h-group-ingo">
								<div class="h-group-icon">
									<span class=".h-list-star glyphicon glyphicon-star"></span>
									<span class=".h-list-star glyphicon glyphicon-star"></span>
									<span class=".h-list-star glyphicon glyphicon-star"></span>
									<span class=".h-list-star glyphicon glyphicon-star-empty"></span>
									<span class=".h-list-star glyphicon glyphicon-star-empty"></span>
									<span class="h-bs-number">(3)</span>
								</div>
							</div>
							<div class="h-bs-desc">${sellingDetail}</div>
							<div class="h-list-price">€${sellingPrice}</div>
							<a class="btn-shop-list">shop now</a>
						</div>
					</div>
				</div>`
					if(i == 0){
					var html1 = html;
					}
					if(i == 2){
					var html2 = html;
					}
					if(i == 1){
					var html3 = html;	
					}
					$('.h-bestselling').append(html)
				}
				
				$('.h-bestselling').append(html1)
				$('.h-bestselling').prepend(html2)
				$('.h-bestselling').append(html3)
				$('.h-bestselling').prepend(html3)
				goodsinfo()
				
$(function(){
	let outboxWidth = null
	let startLeft = null
	let reduce = 0
	let add = 0
	let boximg = $(".h-home2-big-box .h-bs-imgbox img");
		let imgindex = 0;
		boximg.each(function(){
			this.onload = function(){
				imgindex++ 
				if(imgindex >=boximg.length) {
					outboxWidth = $('.h-bestselling-con').innerWidth()
					startLeft = outboxWidth
					let screenwidth = $(window).width()
					if(screenWidth >=1200){
						$('.h-bestselling').css({
							marginLeft: -startLeft * 2  +  'px'
						})
					}
					else if(screenWidth < 1200){
						$('.h-bestselling-con').eq(0).remove()
						$('.h-bestselling-con').last().remove()
						$('.h-bestselling').css({
							marginLeft: -startLeft +  'px'
						})
						reduce = 1
						add = 1
					}
				}
			}	
		})
	//当屏幕大小发生变化时执行
	window.onresize = function(){
		let boximg = $(".h-home2-big-box .h-bs-imgbox img");
		let imgindex = 0;
		outboxWidth = $('.h-bestselling-con').innerWidth()
		startLeft = outboxWidth
		let screenWidth = $(window).width()
		if(screenWidth >=1200 && add == 1){
			$('.h-bestselling').append(html3)
			$('.h-bestselling').prepend(html3)
			$('.h-bestselling').css({
				marginLeft: -startLeft * 2  +  'px'
			})
			reduce = 0
			add = 0
		}
		else if(screenWidth >=1200){
			$('.h-bestselling').css({
				marginLeft: -startLeft * 2  +  'px'
			})
		}
		else if(screenWidth < 1200 && reduce == 0){
			$('.h-bestselling-con').eq(0).remove()
			$('.h-bestselling-con').last().remove()
			$('.h-bestselling').css({
				marginLeft: -startLeft +  'px'
			})
			reduce = 1
			add = 1
		}
		else if(screenWidth < 1200){
			$('.h-bestselling').css({
				marginLeft: -startLeft +  'px'
			})
		}
		boximg.each(function(){
			this.onload = function(){
				console.log(imgindex, boximg.length)
				imgindex++ 
				if(imgindex >=boximg.length) {
					outboxWidth = $('.h-bestselling-con').innerWidth()
					startLeft = outboxWidth
					console.log(startLeft,screenWidth)
					
				}
			}	
		})
	}
	
	$('.h-circle-btn').click(function(){
	let boxlength = $('.h-bestselling-con').length
	startLeft = parseInt($('.h-bestselling').css('margin-left')) 
	if($(this).index() == 1){
		let moveLeft = startLeft + outboxWidth
		$('.h-bestselling').animate({
			marginLeft : moveLeft + 'px',
		},400,function(){
			startLeft = parseInt($('.h-bestselling').css('margin-left'))
			if(startLeft >= -10){
				let screenWidth = $(window).width()
				let backLeft
				if(screenWidth >= 1200){
					backLeft = (boxlength - 4) * outboxWidth
				}
				else{
					backLeft = (boxlength - 2) * outboxWidth
				}
				$('.h-bestselling').css({
					marginLeft: -backLeft + 'px'
				})
			}
		})
	}
	else if($(this).index() == 2){
		let moveLeft = startLeft - outboxWidth
		$('.h-bestselling').animate({
			marginLeft : moveLeft + 'px',
		},400,function(){
			startLeft = parseInt($('.h-bestselling').css('margin-left'))
			let screenWidth = $(window).width()
			let overLeft
			if(screenWidth >= 1200){
				overLeft = (boxlength - 2) * outboxWidth
				if(startLeft <= -overLeft + 10 ){
				$('.h-bestselling').css({
					marginLeft: -outboxWidth * 2 + 'px'
				})
			}
			}
			else if(screenWidth < 1200){
				overLeft = (boxlength - 1) * outboxWidth
				if(startLeft <= - overLeft + 10 ){
				$('.h-bestselling').css({
					marginLeft: -outboxWidth  + 'px'
				})
			}
			
		}
	})
}
	
	
 }
	)







		})
		}
		
	}
		}
	)



//$('.h-bs-left').click(function(){
//	let moveLeft = 0
//	let moveboxLeft = setInterval(function(){
//		$('.h-bestselling').css({
//			marginLeft: -startLeft + moveLeft +  'px'
//		})
//		moveLeft = moveLeft + 20
//		if(moveLeft >= outboxWidth+10){
//			clearInterval(moveboxLeft)
//		}
//	},1)
//	var html = $('.h-bestselling-con:last').prop("outerHTML");
//	$('.h-bestselling-con:last').remove()
//	$('.h-bestselling').prepend(html)
//	$('.h-bestselling').css({
//			marginLeft:-startLeft + 'px'
//	})
//})
//
//$('.h-bs-right').click(function(){
//	let moveLeft = 0;
//	let moveRight = setInterval(function(){
//		$('.h-bestselling').css({
//			marginLeft: -startLeft - moveLeft +'px'
//		})
//		moveLeft = moveLeft + 20;
//		if(moveLeft >= outboxWidth + 10){
//			clearInterval(moveRight)
//		}
//	},1)
//	var html = $('.h-bestselling-con').eq(0).prop("outerHTML");
//	$('.h-bestselling-con').eq(0).remove()
//	$('.h-bestselling').append(html)
//	$('.h-bestselling').css({
//		marginLeft:-startLeft + 'px'
//	})
//})


