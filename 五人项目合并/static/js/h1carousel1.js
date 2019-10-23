// home1轮播的渲染
$(function(){
	
	
	
	let api = "http://192.168.97.218:3001/goods"
	$.ajax({
		
		url:api,
		type:'get',
		data:{
			key:'轮播1'
		},
		datatype:'json',
		success:function(res){
			console.log(res)
			let data = res.data
			console.log(data)
			
			if(res.success == 200){
				
				for(let i=0;i<3;i++){
						
//						
							let hcarImg = $('.h-item').eq(i).css({
							background:'url(img/'+data[i].g_img +')'
						})
//							
//					
					
					let hcarTitle = data[i].g_title;
					let hcarBtitle = data[i].g_details;
					let hcarPrice = data[i].g_price;
					var html = `!--<div class=" clearfix" >-->
							<div class="item active">
							<div class="h-item1 h-item fl-l">
								<div class="h-info">
									<h5 class="h-title-small bounceInDown animated">${hcarTitle}</h5>
									<h3 class="h-title-big bounceInLeft animated">${hcarBtitle}</h3>
									<div class="h-title-price bounceInRight animated">
										New Price:
										<span class="h-number-price">€${hcarPrice}</span>
									</div>
									<a class="h-button-c bounceInUp animated">Browse</a>
									<a class="h-button-c bounceInUp animated">Shop Now</a>
								</div>
							</div>
							</div>
							<div class="item">
							<div class="h-item2 h-item fl-l">
								<div class="h-info">
									<h5 class="h-title-small  bounceInDown animated">${hcarTitle}</h5>
									<h3 class="h-title-big bounceInLeft animated">${hcarBtitle}</h3>
									<div class="h-title-price bounceInRight animated">
										Save Price:
										<span class="h-number-price">€${hcarPrice}</span>
									</div>
									<a class="h-button-c bounceInUp animated">Shop Now</a>
								</div>
							</div>
							</div>
							<div class="item">
							<div class="h-item3 h-item fl-l">
								<div class="h-info">
									<h5 class="h-title-small  bounceInDown animated">${hcarTitle}</h5>
									<h3 class="h-title-big bounceInLeft animated">${hcarBtitle}</h3>
									<br>
									<a class="h-button-c bounceInUp animated">Shop Now</a>
								</div>
							</div>
							</div>
					    <!--</div>-->`
					
					
				}
				
				$('.h-imgbox').append(html)
				
			}
			
		}
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})