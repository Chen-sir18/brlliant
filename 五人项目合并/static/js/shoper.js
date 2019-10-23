let shopchangs = {
    changePapername: '.shop-tabbox-fen',
    changePaper: '.d-change-paper',
    left: '.d-change-btn-left',
    right: '.d-change-btn-right',
    n: 3,
    ajax: function (activeindex) {
        $.ajax({
            type: "get",
            url: 'http://192.168.97.218:3001/goods',
            //请根据要求传回参数
            data: {
                key: 'Arrivals'
            },
            datatype: 'json',
            success: function (res) {
                //请在这里进行回收数据的操作
                console.log(res)
            }
        });
    },
}
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
                $('.shoprow-chosen-drop').append(html)
                tabmeng()
            }
        }
    })
})