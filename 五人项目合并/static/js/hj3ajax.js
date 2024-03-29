function goodsinfo(){
 $('.glyphicon.glyphicon-search').click(function () {
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

$(function(){
	//home3 顶部轮播
	let api = "http://192.168.97.218:3001/goods"
	$.ajax({
		
		url:api,
		type:'get',
		data:{
			key:'轮播3'
		},
		datatype:'json',
		success:function(res){
//			console.log(res)
			let data = res.data
//			console.log(data)
			$('.h-car3-centent').empty()
			if(res.success == 200){
				
				for(i=0;i<3;i++){
					
					let hcarImg = $('.h-car3-item').eq(i).css({
						background:'url(img/'+data[i].g_img +')'
					})
					let hcarTitle = data[i].g_title;
					let hcarBtitle = data[i].g_details;
					let hcarPrice = data[i].g_price;
					var html = `<div class="item active ">
						<div class="h-car3-item1">
							<div class="h-car3-info">
								<h5 class="h-info-title bounceInDown animated">${hcarTitle}</h5>
								<h3 class="h3-info-big bounceInRight animated">
									${hcarBtitle}
								</h3>
								<div class="h-info-price bounceInLeft animated">
									Price From:
									<span class="h-info-span">€${hcarPrice}</span>
								</div>
								<a class="h-info-botton bounceInUp animated">browse</a>
								<a class="h-info-botton bounceInUp animated">show now</a>
							</div>
						</div>
					</div>
					<div class="item ">
							<div class="h-car3-item2">
								<div class="h-car3-info">
								<h5 class="h-info-title bounceInDown animated">${hcarTitle}</h5>
								<h3 class="h3-info-big bounceInRight animated">
									${hcarBtitle}
								</h3>
								<!--<div class="h-info-price bounceInLeft animated">
									WEHN USE CODE:
									<span class="h-info-span">VERSEEA</span>
								</div>-->
								<!--<a class="h-info-botton bounceInUp animated">browse</a>-->
								<a class="h-info-botton bounceInUp animated">shop now</a>
							</div>
							</div>
					</div>
					<div class="item ">
						<div class="h-car3-item3">
							<div class="h-car3-info">
								<h5 class="h-info-title bounceInDown animated">${hcarTitle}</h5>
								<h3 class="h-info-big bounceInRight animated">
									${hcarBtitle}
								</h3>
								<div class="h-info-price bounceInLeft animated">
									Price From:
									<span class="h-info-span">€${hcarPrice}</span>
								</div>
								<a class="h-info-botton bounceInUp animated">browse</a>
								<a class="h-info-botton bounceInUp animated">Let's create</a>
							</div>
						</div>
					</div>
				
					<!--轮播按钮-->
					<a class="carousel-control h-conctrol-pub left" href=".h-up-box" data-slide="prev">
						<span><</span>
					</a>
					<a class="carousel-control h-conctrol-pub right" href=".h-up-box" data-slide="next">
						<span>></span>
					</a>
				`

				}
				
				$('.h-car3-centent').append(html)
				
				$('.carousel').carousel({
  					interval: 5000
				})
			}
			
		}
		
	})

	//home3 bestseller
	console.log(123)
	$.ajax({
		url:api,
		type:'get',
		data:{
			key:'Bestseller'
		},
		datatype:'json',
		success:function(res){
//			console.log(res)
			let data = res.data;
//			console.log(data)
			$('.h-bestseller-outer').empty()
			if(res.success == 200){
				
				for(let i=0;i<8;i++){
					
					let bestsellerImg = 'img/' + data[i].g_img;
					let bestsellerPrice = data[i].g_price;
					let bestsellerTitle = data[i].g_title;
					
					var html = `<div class="h-new-box">
						<div class="h-new-inner">
							<div class="h-new-imgbox mar-b-15">
								<img class="h-new-img" src="${bestsellerImg}" />
								<a class="h-new">new</a>
								<a class="glyphicon glyphicon-heart-empty"></a>
								<a class="glyphicon glyphicon-heart hover"></a>
								<a class="glyphicon glyphicon-search h-search"></a>
							</div>
						
							<div class="h-new-info">
								<h5 class="f-16 h-plastic">${bestsellerTitle}</h5>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star-empty"></span>
								<span class=".h-list-stars glyphicon glyphicon-star-empty"></span>
								<span>(3)</span>
								<div>
									<span class="h-new-abandon">${bestsellerPrice}</span>
									<span class="h-new-now">${bestsellerPrice}</span>
								</div>
							</div>
							
							<div class="h-add-cart">add to cart</div>
							
						</div>
					</div>`
					
					$('.h-bestseller-outer').append(html)
					
				}
			goodsinfo()
			}
		}
		
	})

	//home3 arrays
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
			$('.h-arrays-outer').empty()
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
									<span class="h-new-abandon">${arraysPrice}</span>
									<span class="h-new-now">${arraysPrice}</span>
								</div>
							</div>
							
							<div class="h-add-cart">add to cart</div>
							
						</div>
					</div>`
					
					$('.h-arrays-outer').append(html)
					
				}
				goodsinfo()
			}
		}
		
	})
	
	//home3 top rated
	$.ajax({
		url:api,
		type:'get',
		data:{
			key:'Rated'
		},
		datatype:'json',
		success:function(res){
//			console.log(res)
			let data = res.data;
//			console.log(data)
			$('.h-rated-outer').empty()
			if(res.success == 200){
				
				for(let i=0;i<8;i++){
					
					let ratedImg = 'img/' + data[i].g_img;
					let ratedPrice = data[i].g_price;
					let ratedTitle = data[i].g_title;
					
					var html = `<div class="h-new-box">
						<div class="h-new-inner">
							<div class="h-new-imgbox mar-b-15">
								<img class="h-new-img" src="${ratedImg}" />
								<a class="h-new">new</a>
								<a class="glyphicon glyphicon-heart-empty"></a>
								<a class="glyphicon glyphicon-heart hover"></a>
								<a class="glyphicon glyphicon-search h-search"></a>
							</div>
						
							<div class="h-new-info">
								<h5 class="f-16 h-plastic">${ratedTitle}</h5>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star"></span>
								<span class=".h-list-stars glyphicon glyphicon-star-empty"></span>
								<span class=".h-list-stars glyphicon glyphicon-star-empty"></span>
								<span>(3)</span>
								<div>
									<span class="h-new-abandon">${ratedPrice}</span>
									<span class="h-new-now">${ratedPrice}</span>
								</div>
							</div>
							
							<div class="h-add-cart">add to cart</div>
							
						</div>
					</div>`
					
					$('.h-rated-outer').append(html)
					
				}
				goodsinfo()
			}
		}
		
	})
	
	//home3 featured products
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
			$('.h-last-commondity').empty()
			if(res.success == 200){
				
				for(let i=0;i<6;i++){
					
					let featureImg = 'img/' + data[i].g_img;
					let featurePrice = data[i].g_price;
					let featureTitle = data[i].g_title;
					
					var html = `<div class="h-last-lists">
					<div class="h-last-list">
						<div class="h-list-imgbox">
							<img src="${featureImg}" alt="img" />
							<div class="h-last-cirle">
								<span class="glyphicon glyphicon-search"></span>
							</div>
						</div>
						<div class="h-list-content">
							<h5 class="h-list-title">
								<span>${featureTitle}</span>
							</h5>
							<div class="h-group-ingo">
								<div class="h-group-icon">
									<span class=".h-list-star glyphicon glyphicon-star"></span>
									<span class=".h-list-star glyphicon glyphicon-star"></span>
									<span class=".h-list-star glyphicon glyphicon-star"></span>
									<span class=".h-list-star glyphicon glyphicon-star-empty"></span>
									<span class=".h-list-star glyphicon glyphicon-star-empty"></span>
									<span>(3)</span>
								</div>
							</div>
							<div class="h-list-price">€${featurePrice}</div>
							<a class="btn-shop-list">shop now</a>
						</div>
					</div>
				</div>`
					
					$('.h-last-commondity').append(html)
					
				}
				goodsinfo()
			}
		}
		
	})

	//home1 home3 our last news 数据渲染
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
			$('.h-last-outbox').empty()
			if(res.success == 200){
				
				for(let i=0;i<4;i++){
				let laimgSrc = 'img/'+ data[i].l_img
				let laTitle = data[i].l_title
				let laDetail = data[i].l_details
				var html = `<div class="h-last-we">
						<div class="h-last-outer">
							<div class="h-img-bock">
								<img class="h-img" src="${laimgSrc}" />
								<div class="h-img-cover"></div>
								<a class="h-how-a">skincare</a>
							</div>
							<div class="h-last-content">
								<div class="h-last-meta clearfix">
									<a class="fl-l h-time">Agust 17, 09:14 am</a>
									<a class="fl-r h-last-number">84</a>
									<a class="fl-r h-last-message"></a>
								</div>
								<div class="h-we-bring mar-b-15">${laTitle}</div>
								<div class="h-last-info mar-b-20">
									<p class="h-last-des">${laDetail}</p>
								</div>
							</div>
						</div>
					</div>
					`
					if(i == 0){
					var html1 = html;
					}
					if(i == 1){
					var html2 = html;
					}
					$('.h-last-outbox').append(html)
			}
				$('.h-last-outbox').append(html1)
				$('.h-last-outbox').append(html2)

			
			}
			
		}
	})
	
	




})
