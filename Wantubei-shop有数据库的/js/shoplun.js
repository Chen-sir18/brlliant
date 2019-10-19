$(function(){
    $.ajax({
        url:'http://192.168.97.218:3001/goods',
        data: {
            key:'轮播4'
        },
        dataType: 'json',
        success:function(res){
            var data = res.data
            console.log(res)
            var html= ''
           if(res.success==200){
               for(var index in data){
                $('.shop-bulik-lunboItem1').eq(index).css({
                    background:'url(img/'+data[index].g_img+')'
                })
               }
           }
        }
    })
    $.ajax({
        url: 'http://192.168.97.218:3001/goods',
        data: {
            key: 'Rated'
        },
        dataType: 'json',
        success: function (res) {
            if(res.success==200){
                let data= res.data
                var html= ''
                for(var index in data){
                    html += `<li>
                    <div class="shop-product-inner">
                        <div class="shop-product-header shop-flex-space-between shop-flex">
                            <div class="shop-product-headerleft">
                                new
                            </div>
                            <div class="glyphicon glyphicon-heart-empty"></div>
                        </div>
                        <div class="shop-product-thumb">
                            <a href="javascript:;">
                                <img class="shop-img" src="img/${data[index].g_img}">
                            </a>
                        </div>
                        <div class="shop-product-info">
                            <h5><a href="#">${data[index].g_title}</a></h5>
                            <div class="">
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star-empty"></span>
                            <span class="glyphicon glyphicon-star-empty"></span>
                                <span class="iconfontxing">(${data[index].class})</span>
                            </div>
                            <div>
                                <del class="mar-r-6">
                                   ${data[index].g_price}
                                </del>
                                <span>
                                    ${data[index].g_price}
                                </span>
                            </div>
                        </div>
                        <div class="shop-wiew-button shop-view-mengcen">
                            <a href="javascript:;" class="glyphicon glyphicon-search"></a>
                        </div>
                        <div class="shop-wiew-buttonbox">
                            <span class="shop-wiew-butn">Add to cart</span>
                        </div>
                    </div>
                </li>` 
                }
                $('.shop-chosen-drop').append(html)
                tabmeng()
            }
        }
    })
})