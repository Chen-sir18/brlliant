//换页按钮      点击    换页
let blist = $(".cl-list > div")
let changeBlist = {
	changePapername:'.d-change-box',
	changePaper:'.d-change-paper',
	left:'.d-change-btn-left',
	right:'.d-change-btn-right',
	n:3,
	ajax:function(activeindex){
		if(activeindex == 1){
			blist.siblings().removeClass('active')
			blist.eq(0).addClass('active')
		}else if(activeindex == 2){
			blist.siblings().removeClass('active')
			blist.eq(1).addClass('active')
		}else if(activeindex == 3){
			blist.siblings().removeClass('active')
			blist.eq(2).addClass('active')
		}
	}
	
}
//将最外面的那个盒子选中，调用changePaper方法，将定义好的对象传入即可
changePaper(changeBlist)



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
				$('.lists-ajax').empty()
				
				for (let i = 0;i<=4;i++) {
					let imgsrc = 'img/' + data[i+15].b_img;
					let title = data[i+15].b_title;
					let txt = data[i+15].b_details;
					let userimgsrc = 'img/' + data[i+15].photo;
					let username = data[i+15].b_username;
					console.log(imgsrc)
					var html = `
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
				`
				     $('.lists-ajax').append(html)
				     
				     
				     
				}
			
	               
			}
	        
	    }
});
