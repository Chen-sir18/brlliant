$(function(){
    $.ajax({
        url:'http://192.168.97.218:3001/goods',
        data: {
            key:'轮播4'
        },
        dataType: 'json',
        success:function(res){
            console.log(res)
        }
    })
})