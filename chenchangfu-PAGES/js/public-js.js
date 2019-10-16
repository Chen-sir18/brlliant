//点击时间
	$(".add-btn").click(function(){ //拿到按钮类名
		let ainput = $(this).parent(".add-subtract-btn").find(".input-value"); //找到input 将input框定义一个变量  
		if($(this).hasClass('on')){ //点击时添加类名 on
			
			ainput.val(parseInt(ainput.val())+1); //点击一次加一
			console.log(111)
		}
	})
	
	$(".subract-btn").click(function(){
		let sinput = $(this).parent(".add-subtract-btn").find(".input-value");
		if($(this).removeClass('on')){
			if(parseInt(sinput.val()) < 1 ) { //小于1 终止程序
			return;  //返回终止     
			
		}
			sinput.val(parseInt(sinput.val())-1); //每次减一
			console.log(222)
	}
})
	
