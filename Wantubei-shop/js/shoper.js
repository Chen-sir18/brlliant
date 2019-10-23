$(function () {
    $.ajax({
        url: 'http://192.168.97.218:3001/goods',
        data: {
            key: 'Arrivals'
        },
        dataType: 'json',
        success: function (res) {
            if (res.success == 200) {
                console.log(res)
                var data = res.data
                var html = ''
                for (var index in data) {
                    html += ` <li>
                <div class="shop-product-inner">
                    <div class="shop-product-header shop-flex-space-between shop-flex">
                        <div class="shop-product-headerleft">
                            new
                        </div>
                        <div class="iconfont icon-aixin1"></div>
                    </div>
                    <div class="shop-product-thumb">
                        <a href="javascript:;">
                            <img class="shop-img" src="img/${data[index].g_img}">
                        </a>
                    </div>
                    <div class="shop-product-info">
                        <h5><a href="#">${data[index].g_title}</a></h5>
                        <div class="">
                            <span class="iconfont iconfontxing icon-xingxing"></span>
                            <span class="iconfont iconfontxing icon-xingxing"></span>
                            <span class="iconfont iconfontxing icon-xingxing"></span>
                            <span class="iconfont iconfontxing icon-xingxing1"></span>
                            <span class="iconfont iconfontxing icon-xingxing1"></span>
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
                        <a href="javascript:;" class="iconfont icon-search"></a>
                    </div>
                    <div class="shop-wiew-buttonbox">
                        <span class="shop-wiew-butn">Add to cart</span>
                    </div>
                </div>
            </li>`
                }
                $('.shoprow-chosen-drop').append(html)
            }
        }
    })
})