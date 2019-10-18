$(function(){
    // 右商品list轮播
    $('.shop-banner-box').thumbnailImg({
        large_elem: ".shop-large-box",
        small_elem: ".shop-small-list",
        left_btn: ".shop-left-btn",
        right_btn: ".shop-right-btn"
    })
    // 左边轮播
    // var boxWidth= $('.shop-carousel-box ul')
    var jsh =$('.shop-carousel-box').width()
    $('.shop-carousel-box ul li').css('width',jsh+'px')
    // 获取点击切换按钮
    $('.banshops').bnailImg({
        banleft:'.shop-shopleft',
        banright:'.shop-shopright'
    })
    // tab切换
    $(".tab-title").click(function () {
        //		$('.tab-title').removeClass('on')
        //addClass(类名)    添加类名  
        //removeClass(类名) 移除类名
        //siblings()  找到当前的兄弟姐妹 不包括自己
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
        //index()  获取当前元素的下标
        var index = $(this).index()

        //找到当前元素的祖先  tab-box
        var parent = $(this).parents('.tab-box')

        //从祖先中查找某个元素
        var ele = parent.find(".tab-list")
        ele.eq(index).addClass('on')

        ele.eq(index).siblings().removeClass('on')
    })
})