//瀑布流布局

function waterFall() {
        // 1 确定图片的宽度 - 滚动条宽度
        var pageWidth =  $(".masonry .blog-lists").width();
        console.log(pageWidth)
        var columns = 3; //3列
        var itemWidth = parseInt(pageWidth/columns); //设置item的宽度
        $(".masonry .slick-item").width(itemWidth); //设置到item的宽度
        var arr = [];
        $(".masonry .blog-lists .slick-item").each(function(i){
	    		var height = $(this).height();
	        	if (i < columns) {
	            // 2 第一行按序布局
	                $(this).css({
	                    top:0,
	                    left:(itemWidth) * i
	                });
	               
	                //将行高push到数组
	                arr.push(height);
	            } else {
	                // 其他行
	                // 3 找到数组中最小高度  和 它的索引
	                var minHeight = arr[0];
	                var index = 0;
	                for (var j = 0; j < arr.length; j++) {
	                    if (minHeight > arr[j]) {
	                        minHeight = arr[j];
	                        index = j;
	                    }
	                }
	                // 4 设置下一行的第一个盒子位置
	                // top值就是最小列的高度
	                $(this).css({
	                    top:arr[index]+30,//设置30的距离
	                    left:$(".masonry .blog-lists .slick-item").eq(index).css("left")
	                });
	
	                // 5 修改最小列的高度
	                // 最小列的高度 = 当前自己的高度 + 拼接过来的高度
	                arr[index] = arr[index] + height+30;//设置30的距离
	            }
	            
        		
        	
           
        });
        
    }
    //clientWidth 处理兼容性
    function getClient() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }
    // 页面尺寸改变时实时触发
    window.onresize = function() {
        //重新定义瀑布流
        waterFall();
    };
    //初始化
    $(window).load( function(){
        //实现瀑布流
        waterFall();
    } )
    
    

//换页按钮      点击    换页
let masonry = $(".blog-lists > div")
let changeMasonry = {
	changePapername:'.d-change-box',
	changePaper:'.d-change-paper',
	left:'.d-change-btn-left',
	right:'.d-change-btn-right',
	n:3,
	ajax:function(activeindex){
		if(activeindex == 1){
			masonry.siblings().removeClass('active')
			masonry.eq(0).addClass('active')
		}else if(activeindex == 2){
			masonry.siblings().removeClass('active')
			masonry.eq(1).addClass('active')
		}else if(activeindex == 3){
			masonry.siblings().removeClass('active')
			masonry.eq(2).addClass('active')
		}
	}
	
}
//将最外面的那个盒子选中，调用changePaper方法，将定义好的对象传入即可
changePaper(changeMasonry)



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
				$('.lists-mason').empty()
				
				for (let i = 0;i<=8;i++) {
					let imgsrc = 'img/' + data[i+6].b_img;
					let title = data[i+6].b_title;
					let txt = data[i+6].b_details;
					let userimgsrc = 'img/' + data[i+6].photo;
					let username = data[i+6].b_username;
					console.log(imgsrc)
					var html = `
								<div class="slick-item" style="">
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
				     $('.lists-mason').append(html)
				     
				     //实现瀑布流
        			waterFall();   //ajax请求时重新调用布局  解决刷新时挤在一起的问题
				     
				}
			
	               
			}
	        
	    }
});
