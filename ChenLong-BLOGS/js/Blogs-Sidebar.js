//轮播
//左按钮
$('.an-left').click(function(){  //添加点击
	let leftwidth = parseInt($('.slick-item').outerWidth(true)) //得到内容盒子的宽度 + 上边距outerWidth(true)  转为整数
	let outerleft = parseInt($('.slick-track').css('left')) //得到内容盒子的left  转为整数
	outerleft = outerleft + leftwidth   //宽度加在left上
	if(outerleft >= 0){  //判断 值大于等于0
		$('.slick-track').animate({  //装内容的父级盒子运动
			left: outerleft   // left值
		},500,function(){  //时间，回调函数
			$('.slick-track').css({  //修改装内容的父级盒子left 为-1200
				left: '-1200px'
			})
		})
	}else{
		$('.slick-track').animate({  //否则装内容的父级盒子运动
			left: outerleft		//left为outerleft值
		},500)
	}
	
})
//右按钮
$('.an-right').click(function(){	
	let leftwidth = parseInt($('.slick-item').outerWidth(true))
	let outerleft = parseInt($('.slick-track').css('left'))
	outerleft = outerleft - leftwidth
	if(outerleft <= -1800){
		$('.slick-track').animate({
			left: outerleft
		},500,function(){
			$('.slick-track').css({
				left: '-600px'
			})
		})
	}else{
		$('.slick-track').animate({
			left: outerleft
		},500)
	}
	
})
	
	
	
/**
 *以下评论提交    评论区换页  为第二次修改添加内容
 */	
//点击评论提交
var send = $(".discuss")
send.click(function(){
	let value = $(".input-form").val();
	
	if(value){ //判断value值  有没有值
		
		if (confirm('是否确定提交')) {
			var html =`<li class="active">
				<div class="comment-item">
					<div class="item-view">
						<div class="view fl-l">
							<div class="avt fl-l">
								<img src="img/avt-blog1.png"/>
							</div>
							<h3 class="name">Adam Smith</h3>
						</div>
						<div class="date-reply-comment">
							<span class="date-comment">  Todays </span>
						</div>
					</div>
					<!--文字内容-->
					<div class="comment-body">
						<div class="main-item-text">
							<p>
								${value}  
							</p>
						</div>
						<div class="comment-link">
							<span class="ment">
								<i class="iconfont icon-fa-commenting-o"></i>
								Comment
							</span>
							<span class="ment">
								<i class="iconfont icon-fa-thumbs-o-up"></i>
								
							</span>
							<span class="ment">
								<i class="iconfont icon-fa-thumbs-o-down"></i>
								
							</span>
						</div>
					</div>
				</div>
			</li>`
			

			$(html).prependTo($(".comment-list"))  //追加到html页面中这个ul下
			
			$(".input-form").val('')   //追加完清空文本域内容
			
			
		}
		
	}
	
})

//评论区换页按钮      点击    换页评论
let comment = $(".comment-list > li")
let changeComment = {
	changePapername:'.d-change-box',
	changePaper:'.d-change-paper',
	left:'.d-change-btn-left',
	right:'.d-change-btn-right',
	n:3,
	ajax:function(activeindex){
		if(activeindex == 1){
			comment.siblings().removeClass('active')
			comment.eq(0).addClass('active')
		}else if(activeindex == 2){
			comment.siblings().removeClass('active')
			comment.eq(1).addClass('active')
		}else if(activeindex == 3){
			comment.siblings().removeClass('active')
			comment.eq(2).addClass('active')
		}
	}
}
//将最外面的那个盒子选中，调用changePaper方法，将定义好的对象传入即可
changePaper(changeComment)


///第二种渲染方法   渲染数据
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


