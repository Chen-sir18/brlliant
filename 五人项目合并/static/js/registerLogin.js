$(function(){
	$(".ch-form-lable").validate({
		rules:{
			email:{
				 email:{
                required:true,
                email:true
            },

           		password:{
                required:true,
                rangelenght:[6,18]
            }
         		
			}
		}				
	})
		//注册
		
	
	})
	
})
