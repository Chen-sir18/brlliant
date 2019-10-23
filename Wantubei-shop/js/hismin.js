(function ($) {
    var defban = {
        boxWidth: '.shop-carousel-box',
        banleft: '.shop-shopleft',
        banright: '.shop-shopright'
    }
    $.fn.extend({
        "bnailImg": function (option) {
            var opts = $.extend({}, defban, option);
            return this.each(function () {
                var ls = $(opts.boxWidth).find("ul li").length;
                var wls =$(opts.boxWidth).find("ul li").innerWidth()
                var w = $(opts.boxWidth).find("ul li").outerWidth(true)
                $(opts.boxWidth).find("ul").css('width', ls * w + 'px');
                var i = 0;
                $(opts.banright).click(function () {
                    i++;
                    if (i >= ls) {
                        $(opts.boxWidth).find("ul").stop().animate({ left: 0 }, 100, function () {
                            i = 0
                        })

                    } else {
                        $(opts.boxWidth).find("ul").stop().animate({ left: -i * wls }, 100)
                    }
                })
                $(opts.banleft).click(function () {
                    if (i == 0) {
                        i = ls
                    }
                    i--;
                    $(opts.boxWidth).find("ul").stop().animate({ left: -i * wls }, 100, function () {
                    })
                })
            })
        }
    })
})(jQuery)