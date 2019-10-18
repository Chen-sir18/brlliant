$(function(){
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
                    key:'Arrivals'
                },
                datatype: 'json',
                success: function (res) {
                    //请在这里进行回收数据的操作
                    console.log(res)	
                }
            });
        },
    }
    changePaper(shopchangs)
})