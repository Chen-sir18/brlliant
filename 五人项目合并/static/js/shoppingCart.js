 //ajax请求
 $.ajax({
   			//请求的方式 有get 和post
	        type:"get",
			//请求的路径
	        url:"http://192.168.97.218:3001/shopcar", 
			//后台给的数据
            data:{
	                        
	        },
			//跨域的解决
	        datatype:'json',
	        success:function(res){
	            console.log(res)   
				//判断 是否成功
				if( res.success == 200){
					//定义 拿到后台数据  定义data
					let  data = res.data
					console.log(data)
					//for 循环 
					for( let i = 0; i<4; i++){
						//拿到图片路径并重新定义图片路径
						let imgSrc='image/' + data[i].s_img
						
						//拿到名字路径并重新定义名字路径
						let name = data[i].s_name
						
						//拿到颜色路径并重新定义颜色路径
						let color = data[i].s_color						
						console.log(color)
						
						//拿到尺寸路径并重新定义尺寸路径
						let size = data[i].s_size
						console.log(size)
						
						//拿到库存路径并重新定义库存路径
						let store = data[i].s_store
						console.log(store)
						
						//拿到价格路径并重新定义价格路径
						let  Price = data[i].s_countPrice
						 console.log(Price)
						 
						 //模板字符串
						 let html =
						 			`<div class="ch-cont">
						<ul class="ch-list">
							<!--商品图片-->
							<li>
								<div class="ch-img "><img src="${imgSrc}" /></div>
							</li>
							<!--文字介绍-->
							<li class="ch-lists ">
								<div class="ch-text padding-p ">
									<div>
										<p>
											<a href="#" class="font-16 mouse">${name}</a>
										</p>
										<p class="ch-text-two">
											<span><a href="#" class="font-14 mouse">${color}</a></span>
											<span><a href="#" class="font-14 mouse">${size}</a></span>
										</p>
									</div>
								</div>
							</li>
							<!--数量按钮-->
							<li class="btn-add padding-p">
								<div class="add-subtract-btn">
									<a class="subract-btn on  btn">-</a>
									<input type="text" data-step="1" data-min="0" value="1" title="Qty" class="input-value" size="4">
									<a class="add-btn on btn">+</a>
								</div>

							</li>
							<!--商品价格-->
							<li class="ch-dollars  mar-t-30 font-20 padding-p">
								<div class="">
									<span>€${Price}</span>
								</div>
							</li>
							<!--删除键-->
							<li class="mar-t-30 font-20 padding-p ch-delet ">
								<div>
									<a href="#" class="mouse"><img src="image/删 除 (1).png" /></a>
								</div>
							</li>

						</ul>
					</div>`
						 
						 添加到前面
						$(".ch-con").prepend(html) 
						 
						 
						
					}
					
				}         
	  		  }
		});
		


