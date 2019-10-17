; $(function () {
  //查看操作
  $('.shop-view-mengcen').click(function () {
    //获取文档的宽和高
    var maskWidth = '100%';
    var maskHeight = $(document).height();
    //遮罩层初始化
    $('<div class="shop-mask-cen"></div>').appendTo($('body'));
    $('.shop-mask-cen').css({
      'position': 'absolute',
      'top': 0,
      'left': 0,
      'background': 'black',
      'opacity': 0.5,
      'width': maskWidth,
      'height': maskHeight,
      'z-index': 2
    });
    $('body').css({ 'overflow-y': 'hidden' });
    var data = [];//保存数据的数组
    //将一行的数据添加到数据中
    $(this).parent().siblings().each(function () {
      data.push($(this).text())
    });
    //将内容显示到弹出层中
    $('.shop-proDiv-box').children().each(function (i) {
      $(this).children('span').text(data[i]);
    });
    $('.shop-proDiv-box').show();//显示弹出层
    //关闭操作
    $('.shop-close-btn').click(function () {
      $(this).parent().hide();
      $('.shop-mask-cen').remove();
      $('body').css({ 'overflow-y': 'inherit' });
    });
    $('.shop-mask-cen').click(function () {
      $('.shop-close-btn').parent().hide();
      $(this).remove();
      $('body').css({ 'overflow-y': 'inherit' });
    });
  });
  /* 商品轮播图（带缩略图的轮播效果） */
  $(".shop-banner").thumbnailImg({
    large_elem: ".large_box",
    small_elem: ".small_list",
    left_btn: ".left_btn",
    right_btn: ".right_btn"
  });
  $('.shop-input input[type=checkbox]')[0].checked = true
  $('.shop-input').find('input[type=checkbox]').bind('click', function () {
    var id = $(this).attr("id");
    //当前的checkbox是否选中
    if (this.checked) {
      //除当前的checkbox其他的都不选中
      $(".shop-input").find('input[type=checkbox]').not(this).attr("checked", false);

      //选中的checkbox数量
      var selectleng = $("input[type='checkbox']:checked").length;
      console.log("选中的checkbox数量" + selectleng);
    } else {
      //未选中的处理
      console.log("未选中的处理");
    }
  });
  $('.shoptab a').click(function () {
    var index = $(this).index();
    $(this).addClass("shop-btn-bag").siblings().removeClass("shop-btn-bag");
  })
  // .shop-btn-box.shop-btn-bag
  // 判断token是否存在
  $('.shop-btnwidth').click(function(){
    var token =window.localStorage.getItem('token')
    if(token){

    }else{
      window.location.href='jsjsj.html'
    }
  })
})