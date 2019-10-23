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
				$('.row').empty()
				
				for (let i = 0;i<=5;i++) {
					let imgsrc = 'img/' + data[i].b_img;
					let title = data[i].b_title;
					let txt = data[i].b_details;
					let userimgsrc = 'img/' + data[i].photo;
					let username = data[i].b_username;
					console.log(imgsrc)
					var html = `
							<div class="pad-0 col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div class="slick-item">
									<div class="photo fl-l post-format">
										<a href="#"><img src="${imgsrc}"/></a>
									</div>
									<div class="item-info">
										<!--/*图片下的小标题文字*/-->
										<div class="category-blog f-12">
											<a href="#" class="text-a fontwight-700">LIFE STYLE</a>
										</div>
										<!--/*图片下的大标题文字*/-->
										<h3 class="infor-title item-title">
											<a href="#"class="fontwight-600 text-a">${title} <span style="color: #aaa;">[...]</span></a>
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
							</div>
				`
				     $('.row').append(html)
				     
				     
				     
				}
			
	               
			}
	        
	    }
});
