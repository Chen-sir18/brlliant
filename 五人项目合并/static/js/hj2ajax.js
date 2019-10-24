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

//home2 数据渲染
$(function(){
	
	let api = "http://192.168.97.218:3001/goods"
	//home2 顶部轮播
	$.ajax({
		
		url:api,
		type:'get',
		data:{
			key:'轮播2'
		},
		datatype:'json',
		success:function(res){
//			console.log(res)
			let data = res.data
//			console.log(data)
			$('.h-carousel-centent').empty()
			if(res.success == 200){
				
				for(i=0;i<3;i++){
					
					let hcarImg = $('.h-car2-item').eq(i).css({
						background:'url(img/'+data[i].g_img +')'
					})
					let hcarTitle = data[i].g_title;
					let hcarBtitle = data[i].g_details;
					let hcarPrice = data[i].g_price;
					var html = `<div class="item active ">
					<div class=" h-carousel-item1 h-car2-item">
						<div class="h-crousel-info">
							<h5 class="h-info-title bounceInDown animated">${hcarTitle}</h3>
							<h3 class="h-info-big bounceInRight animated">
								${hcarBtitle}
							</h3>
							<div class="h-info-price bounceInLeft animated">
								New Price:
								<span class="h-info-span">€${hcarPrice}</span>
							</div>
							<a class="h-info-botton bounceInUp animated">browse</a>
							<a class="h-info-botton bounceInUp animated">show now</a>
						</div>
					</div>
				</div>
				<div class="item">
						<div class="h-carousel-item2 h-car2-item">
							<div class="h-crousel-info">
							<h5 class="h-info-title bounceInDown animated">${hcarTitle}</h3>
							<h3 class="h-info-big bounceInRight animated">
								${hcarBtitle}
							</h3>
							<div class="h-info-price bounceInLeft animated">
								WEHN USE CODE:
								<span class="h-info-span">VERSEEA</span>
							</div>
							<a class="h-info-botton bounceInUp animated">browse</a>
							<a class="h-info-botton bounceInUp animated">view all</a>
						</div>
						</div>
				</div>
				<div class="item ">
					<div class="h-carousel-item3 h-car2-item">
						<div class="h-crousel-info">
							<h5 class="h-info-title bounceInDown animated">${hcarTitle}</h3>
							<h3 class="h-info-big bounceInRight animated">
								${hcarBtitle}
							</h3>
							<div class="h-info-price bounceInLeft animated">
								Template Price:
								<span class="h-info-span">€${hcarPrice}</span>
							</div>
							<a class="h-info-botton bounceInUp animated">browse</a>
							<a class="h-info-botton bounceInUp animated">Let's create</a>
						</div>
					</div>
				</div>
				<a class="carousel-control h-conctrol-pub left" href=".h-carousel-box" data-slide="prev">
					<span><</span>
				</a>
				<a class="carousel-control h-conctrol-pub right" href=".h-carousel-box" data-slide="next">
					<span>></span>
				</a>
				`

				}
				
				$('.h-carousel-centent').append(html)
				
				$('.carousel').carousel({
  					interval: 5000
				})
			}
			
		}
		
	})
	
	

	//home2 new arrays
	$.ajax({
		url:api,
		type:'get',
		data:{
			key:'Arrivals'
		},
		datatype:'json',
		success:function(res){
//			console.log(res)
			let data = res.data;
//			console.log(data)
			$('.h-bestller-outer').empty()
			if(res.success == 200){
				
				for(let i=0;i<8;i++){
					
					let arraysImg = 'img/' + data[i].g_img;
					let arraysPrice = data[i].g_price;
					let arraysTitle = data[i].g_title;
					
					var html = `<div class="h-new-box">
						<div class="h-new-inner">
							<div class="h-new-imgbox mar-b-15">
								<img class="h-new-img" src="${arraysImg}" />
								<a class="h-new">new</a>
								<a class="glyphicon glyphicon-heart-empty"></a>
								<a class="glyphicon glyphicon-heart hover"></a>
								<a class="glyphicon glyphicon-search h-search"></a>
							</div>
						
							<div class="h-new-info">
								<h5 class="f-16 h-plastic">${arraysTitle}</h5>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star-empty"></span>
								<span class=".h-list-stars glyphicon glyphicon-star-empty"></span>
								<span>(3)</span>
								<div>
									<span class="h-new-abandon">€${arraysPrice}</span>
									<span class="h-new-now">€${arraysPrice}</span>
								</div>
							</div>
							
							<div class="h-add-cart">add to cart</div>
							
						</div>
					</div>`
					
					$('.h-bestller-outer').append(html)
					
				}
				goodsinfo()
			}
		}
		
	})
	
	//home2 our last news
	$.ajax({
		url:"http://192.168.97.218:3001/news",
		type:'get',
		data:{
			
		},
		datatype:'json',
		success:function(res){
//			console.log(res)
			let data = res.data
//			console.log(data)
			$('.h2-last-box').empty()
			if(res.success == 200){
				
				for(let i=0;i<4;i++){
				let laimgSrc = 'img/'+ data[i].l_img
				
				let laDetail = data[i].l_details
				var html = `<div class="h2-img-box clearfix">
						<div class="h2-img-boll">
							<img class="h2-img" src="${laimgSrc}" />
							<div class="h2-img-cover"></div>
						</div>
						<div class="h2-last-content">
							<a class="h-last-lamp">new arrivals</a>
							<div class="h2-last-title">Agust 17, 09:14 am</div>
							<p class="h-we-bring h-please">${laDetail}</p>
							<div class="h-header clearfix">
								<span>
									<img  class="fl-l" src="img/avt-blog1.png" />Adam Smith
								</span>
								<!--<img  class="fl-l" src="img/avt-blog1.png" />
								<a class="h-header-name mar-l-10">Adam Smith</a>-->
								<a class="h-header-numder fl-r">84</a>
							</div>
						</div>
					</div>`
					
					
					$('.h2-last-box').append(html)
			}
				
			
			}
			
		}
	})
	
	
	
	
})
