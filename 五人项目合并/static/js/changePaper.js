//按钮换页切换部分
function changePaper(options){
	let api = 'http://192.168.97.218:3001/'
	$(options.changePaper).remove()
	for (let i = 0; i < options.n; i++) {
		let changePaper = `<div class="d-change-btn d-change-paper">
							${i+1}
						</div>`
		$(options.right).before(changePaper)
	}
	//默认情况下当前显示第一页的内容
	$(options.changePaper).eq(0).addClass('active')
	//左右箭头页面切换
	//左边箭头
	let activeindex = $(options.changePapername).children('.active').index()
	changecursor(activeindex)
	$(options.left).click(function(){
		if(activeindex == 1){
			return false
		}
		else if(activeindex != 1){
			$(options.changePaper).removeClass('active')
			$(options.changePaper).eq(activeindex - 2).addClass('active')
			activeindex = $(options.changePapername).children('.active').index()
			changecursor(activeindex)
			options.ajax(activeindex)
		}
		
	})
	
	//右边箭头
	$(options.right).click(function(){
		if(activeindex == options.n){
			return false
		}
		else if(activeindex != options.n){
			$(options.changePaper).removeClass('active')
			$(options.changePaper).eq(activeindex).addClass('active')
			activeindex = $(options.changePapername).children('.active').index()
			changecursor(activeindex)
			options.ajax(activeindex)
		}
	})
	//点击当前的每一个页面
	$(options.changePaper).click(function(){
		if($(this).hasClass('active')){
			return false
		}
		else{
			$(this).siblings().removeClass('active')
			$(this).addClass('active')
			activeindex = $(options.changePapername).children('.active').index()
			changecursor(activeindex)
			options.ajax(activeindex)
		}
	})
	
	//改变两个按钮的状态
	function changecursor(activeindex){
		if(activeindex == 1){
			$(options.left).css({
				cursor:'not-allowed'
			})
			$(options.right).css({
				cursor:'pointer'
			})
		}
		else if(activeindex == options.n){
			$(options.left).css({
				cursor:'pointer'
			})
			$(options.right).css({
				cursor:'not-allowed'
			})
		}
		else if(activeindex != 1 && activeindex != options.n){
			$(options.left).css({
				cursor:'pointer'
			})
			$(options.right).css({
				cursor:'pointer'
			})
		}
	}
}

//使用的方法
//定义一个对象
//changePapername是换页部分最外面的大盒子的class名字
//changepaper是换页部分每一个具体的页面的class名字
//left 是换页部分左边按钮 上一页的class名字
//right 是换页部分右边按钮 下一页的class名字
//n就是一共存在的页面数量,是几个页面就写数字几
//url就是ajax的路由
let changePaperObj = {
	changePapername:'.d-change-box',
	changePaper:'.d-change-paper',
	left:'.d-change-btn-left',
	right:'.d-change-btn-right',
	n:3,
	ajax:function(activeindex){
		$.ajax({
			type:"get",
			url:'htpp://192.168.97.218:3002/test',
			//请根据要求传回参数
			data:{
				id:activeindex
			},
			datatype:'json',
			success:function(res){
				//请在这里进行回收数据的操作	
			}
		});
	},
}

//将最外面的那个盒子选中，调用changePaper方法，将定义好的对象传入即可
//changePaper(changePaperObj)