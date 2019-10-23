/*
 * ajaxPackage  封装ajax请求  希望请求多次调用  调用这个请求不同的地方  不同的地方就以参数形式传入
 * @params  options   object
 * datatype json string
 * success  function  回调函数  在参数中传入一个方法  在数据处理完成后调用的 并将数据传入调用的方法
 * 
 * **/


//第一种渲染方法
//自己定义的ajax封装
//function ajaxPackage(options){
//	console.log(options)
//	//1.创建请求
//	var request = new XMLHttpRequest();
//	//2.打开请求 requset.open(请求类型，请求的地址，同步还是异步)
//	request.open(options.type || 'get',options.url,options.async || true)
//	//3.发送请求request.send(data)
//	request.send(options.data || null)
//	//4.请求监听状态
//	request.onreadystatechange = function (){
//		
//		if (request.readyState == 4 && request.status == 200) {
//			
//			var data = request.responseText
//			
//			if (options.dataType == 'json') {
//				
//				data = JSON.parse(data)
//				
//			}
//			//调用传入的方法  传回data数据
//			options.success(data)
//			
//		}
//		
//		
//	}
//
//}



//下面是调用自己定义的封装
//var requestUrl = " http://192.168.97.218:3001/";
//	
		//请求的数据
//		ajaxPackage({
//			url:requestUrl + 'blogs',
//			async: true,
//			dataType: 'json',
//			success: function(res){
//				if(res.success == 200){
//					let data = res.data
//					console.log(data)
//					$('.slick-track').empty()
//					
//					for (let i = 1;i<=2;i++) {
//						let imgsrc = 'img/' + data[i-1].b_img;
//						let title = data[i-1].b_title;
//						let txt = data[i-1].b_details;
//						let userimgsrc = 'img/' + data[i-1].photo;
//						let username = data[i-1].b_username;
//						console.log(username)
//						var html = `
//					<div class="slick-item">
//									<div class="photo fl-l">
//									    <a href="#"><img src="${imgsrc}"></a>
//									</div>
//									<div class="item-info">
//										<!--/*图片下的小标题文字*/-->
//										<div class="category-blog f-12">
//											<a href="#" class="text-a fontwight-700">LIFE STYLE</a>
//										</div>
//										<!--/*图片下的大标题文字*/-->
//										<h3 class="infor-title item-title">
//											<a href="#"class="fontwight-600 text-a"> ${title} <span style="color: #aaa;">[...]</span></a>
//										</h3>
//										<div class="main-item-text">
//											<p>
//												${txt}
//											</p>
//										</div>
//										<div class="item-view">
//											<div class="view fl-l">
//												<div class="avt fl-l">
//													<img src="${userimgsrc}"/>
//												</div>
//												<h3 class="name">${username}</h3>
//											</div>
//										</div>
//									</div>
//								</div>
//					`
//					     $('.slick-track').append(html)
//					     if(i == 1){
//					     	var html1 = html
//					     }
//					     
//					     
//					}
//					$('.slick-track').prepend(html)
//					$('.slick-track').append(html1)
//                     
//				}
//				
//			}
//		})
	


///第二种渲染方法
$.ajax({
	    type:"get",
	    url:"http://192.168.97.218:3001/blogs",
	    datatype:'json',
	    success:function(res){
	    	console.log(res)
	        if(res.success == 200){
				let data = res.data
				console.log(data)
				$('.slick-track').empty()
				
				for (let i = 1;i<=2;i++) {
					let imgsrc = 'img/' + data[i-1].b_img;
					let title = data[i-1].b_title;
					let txt = data[i-1].b_details;
					let userimgsrc = 'img/' + data[i-1].photo;
					let username = data[i-1].b_username;
					console.log(username)
					var html = `
				<div class="slick-item">
								<div class="photo fl-l">
								    <a href="#"><img src="${imgsrc}"></a>
								</div>
								<div class="item-info">
									<!--/*图片下的小标题文字*/-->
									<div class="category-blog f-12">
										<a href="#" class="text-a fontwight-700">LIFE STYLE</a>
									</div>
									<!--/*图片下的大标题文字*/-->
									<h3 class="infor-title item-title">
										<a href="#"class="fontwight-600 text-a"> ${title} <span style="color: #aaa;">[...]</span></a>
									</h3>
									<div class="main-item-text">
										<p>
											${txt}
										</p>
									</div>
									<div class="item-view">
										<div class="view fl-l">
											<div class="avt fl-l">
												<img src="${userimgsrc}"/>
											</div>
											<h3 class="name">${username}</h3>
										</div>
									</div>
								</div>
							</div>
				`
				     $('.slick-track').append(html)
				     if(i == 1){
				     	var html1 = html
				     }
				     
				     
				}
				$('.slick-track').prepend(html)
				$('.slick-track').append(html1)
	               
			}
	        
	    }
});
