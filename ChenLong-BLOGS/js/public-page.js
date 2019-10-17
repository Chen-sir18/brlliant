var selectedLanguage =new Vue({
	el:'.d-language',
	data:{
		languageType:['French(EUR)','Japanese(JPY)'],
		activeLanguage:'English(USD)',
	},
	methods:{
		//控制语言选择框的方法
		languagetype:function(){
			if($('.languageType-box').css('opacity') == 0){
					$('.languageType-box').css('display','block')
					$('.languageType-box').animate({
						opacity:1,
						marginTop:'0px',
					},200)
			}
			else{
				$('.languageType-box').animate({
						opacity:0,
						marginTop:'20px',
					},400,function(){
						$('.languageType-box').css('display','none')
					})
			}
		},
		//选择语言的方法
		languageselect:function(e){
			this.languageType.push(this.activeLanguage)
			this.activeLanguage = $(e.target).text()
			let index = this.languageType.indexOf(this.activeLanguage)
			if(index > -1){
				this.languageType.splice(index,1)	
			}
			$('.languageType-box').animate({
					opacity:0,
					marginTop:'20px',
				},400,function(){
						$('.languageType-box').css('display','none')
				})
		}
	},
})
//搜索框部分
var search = new Vue({
	el:'.d-search-box',
	data:{
		activegoodstype:'Accessoires',
		goodstype:['Accessoires','Chair','Tables','Sofas','New Arrivals','Storage']
	},
	methods:{
		controldrop:function(){
			let goodsTypesObj = {
				objname:'.d-goodstypes',
				marginshow:'-10px',
				marginhide:'20px',
				showtime:200,
				hidetime:100,
			}
			$('.d-goods-dropdown').showdrop(goodsTypesObj)

		},
		selectedgoodstype:function(e){
			this.activegoodstype = $(e.target).text()
			$('.d-goodstype').css({
				background:'#ffffff'
			})
			let activegoods = this.activegoodstype;
			let index = this.goodstype.indexOf(activegoods)
			$('.d-goodstype').eq(index).css({
				background:'#f6f6f6'
			})
		}
	},
	mounted:function(){
		let activegoods = this.activegoodstype;
		let index = this.goodstype.indexOf(activegoods)
		$('.d-goodstype').eq(index).css({
			background:'#f6f6f6'
		})
	}
})
//购物车和注册和登录部分
var shopcarlogonregister = new Vue({
	el:'.d-shopcar-logon-register',
	data:{
		
	},
	methods:{
		controlshopcar:function(){
			let shopCarObj = {
				objname:'.d-shopcar .d-shopcar-box',
				marginshow:'16px',
				marginhide:'32px',
				showtime:200,
				hidetime:200,
			}
			$('.d-shopcar').showdrop(shopCarObj)
		},
		controllogin:function(){
			let shopCarObj = {
				objname:'.d-login-and-register',
				marginshow:'20px',
				marginhide:'32px',
				showtime:200,
				hidetime:200,
			}
			$('.d-login-and-register').showdrop(shopCarObj)
			
		},
		login:function(e){
			e.target.nextElementSibling.classList.remove('active')
			e.target.classList.add('active')
			$('.d-readme,.readme,.d-lostpassword').css({
				display:'inline-block'
			})
			$('.d-login-btn span').text('LOGIN')
		},
		register:function(e){
			e.target.previousElementSibling.classList.remove('active')
			e.target.classList.add('active')
			$('.d-readme,.readme,.d-lostpassword').css({
				display:'none'
			})
			$('.d-login-btn span').text('REGISTER')
		},
		controlMainMenu:function(){
			if($('.d-left-main-menu').css('display') == 'none'){
				$('.d-left-main-menu').css('display','block');
				$('.d-left-main-menu').animate({
					left:'0',
				},400)
			}
		},
		controlsearchdrop:function(){
			let searchObj = {
				objname:'.d-search-drop',
				marginshow:'0',
				marginhide:'32px',
				showtime:200,
				hidetime:200
			}
			$('.d-search-drop').showdrop(searchObj)
		},
		controllanguagedrop:function(){
			let languageObj = {
				objname:'.d-language-drop',
				marginshow:'0',
				marginhide:'32px',
				showtime:200,
				hidetime:200
			}
			$('.d-language-drop').showdrop(languageObj)
		}
	},
	mounted:function(){
		
	}
})

//导航条的部分
var dnav = new Vue({
	el:'.d-nav',
	data:{
		navdata:{
			title:['HOME','SHOP','PAGES','BLOGS','ABOUT'],
			home:['Home 01','Home 02','Home 03'],
			shop:['Grid Fullwidth','Grid Left Sidebar','Grid Bannerslider','List'],
			pages:{
				shoppages:['Shopping Cart','Checkout','Contact us','404','Login/Register'],
				product:['Product Fullwidth','Product left sidebar','Product right sidebar'],
			},
			blogs:{
				title:['Blog Style','Post Layout'],
				blogstyle:['Grid','Masony','List','List Siderbar'],
				postlayout:['Left Siderbar','Right Siderbar']
			}
		},
		goodsclass:['New Arrivals','Hot Sale','Accessories','Chair','Lamp','Lighting','Homewares','Bottle']
	},
	methods:{
		controldrop:function(e){
			let index =$(e.target).index()
			if(index <= 3){
				$('.d-drop-menu .d-nav-ul').each(function(){
					$(this).css({
						display:'none'
					})
				})
				$('.d-drop-menu .d-nav-ul').eq(index).css({
					display:'block'
				})	
			}
		},
		leavenav:function(){
			$('.d-drop-menu .d-nav-ul').each(function(){
					$(this).css({
						display:'none'
					})
			})
		},
		controlGoodsClassDrop:function(){
			let goodsClassObj = {
				objname:'.d-goods-class',
				marginshow:'0px',
				marginhide:'40px',
			}
			$('.d-block-title').showdrop(goodsClassObj)
		}
	}
})

//点击窗口界面，就让已经展开的下拉列表收缩回去
window.onclick = function(){
	//	控制语言选择框
	if($('.languageType-box').css('opacity') != 0){
		$('.languageType-box').animate({
			opacity:0,
			marginTop:'20px',
		},400,function(){
			$('.languageType-box').css({
				display:'none'
			})
		})
	}
	//控制商品类别的下拉框
	if($('.d-goodstypes').css('display') !='none'){
		$('.d-goodstypes').animate({
					marginTop:'10px',
				},100,function(){
					$('.d-goodstypes').css({
						display:'none'
					})
				})
	}
	//控制购物框
	if($('.d-shopcar .d-shopcar-box').css('display') != 'none'){
		$('.d-shopcar .d-shopcar-box').animate({
					marginTop:'32px',
				},200,function(){
					$('.d-shopcar .d-shopcar-box').css({
					display:'none'
				})
				})
	}
	//控制登录注册
	if($('.d-login-and-register').css('display') == 'block'){
		$('.d-login-and-register').animate({
						marginTop:'32px',
					},200,function(){
						$('.d-login-and-register').css({
						display:'none'
					})
					})
	}
	//控制小屏幕时的主菜单消失
	if($('.d-left-main-menu').css('display') != 'none'){
		$('.d-left-main-menu').animate({
						left:'-100%',
					},400,function(){
						$('.d-left-main-menu').css({
						display:'none'
					})
					})
	}
}

//封装的上浮下沉式的页面弹框
$.fn.showdrop = function(options){
	if ($(options.objname).css('display') == 'none' ){
		$(options.objname).css({
			display:'block'
		})
		$(options.objname).animate({
			marginTop:options.marginshow,
		},options.showtime || 400)
	}
	else{
		$(options.objname).animate({
			marginTop:options.marginhide,
				},options.hidetime || 200,function(){
					$(options.objname).css({
					display:'none'
				})
				})
	}
}
//封装，如果出现，需要消失的功能
$.fn.hidedrop = function(options){
	if($(options.objname).css('display') != 'none' ){
		
		$(options.objname).animate({
			marginTop:options.marginhide,	
		},options.hidetime || 400,function(){
			$(options.objname).css({
				display:'none'
			})
		})
	}
}



//小屏幕的导航菜单
var mainMenu = new Vue({
	el:'.d-left-main-menu',
	data:{
		menudata:{
			title:['MAIN MENU'],
			content:['NEWS ARRIVALS','HOT SALE','ACCESSORIES','CHAIRS','LAMP','LIGHTING','HOMEWARES','BOTTLES','HOME','SHOP','PAGES','BLOGS','ABOUT'],	
		},
		maindata:{
			title:['MAIN MENU'],
			content:['NEWS ARRIVALS','HOT SALE','ACCESSORIES','CHAIRS','LAMP','LIGHTING','HOMEWARES','BOTTLES','HOME','SHOP','PAGES','BLOGS','ABOUT'],	
		},
		accessories:{
			title:['ACCESSORIES'],
			content:['CLOCK','CHAIRS','NEW ARRIVALS','STORAGE'],
		},
		home:{
			title:['HOME'],
			content:['HOME 01','HOME 02','HOME 03']
		},
		shop:{
			title:['SHOP'],
			content:['GRID FULLWIDTH','GRID LEFT SIDEBAR','GRID BANNERSLIDER','LIST']
			
		},
		pages:{
			title:['PAGES'],
			content:['SHOPPING CART','CHECKOUT','CONTACT US','404','LOGIN/REGISTER','PRODUCT FULLWIDTH','PRODUCT LEFT SIDEBAR','PRODUCT RIGHT SIDEBAR']
		},
		blogs:{
			title:['BLOGS'],
			content:['BLOG STYLE','POST LAYOUT']
		},
		blogstyle:{
			title:['BLOG STYLE'],
			content:['GRID','MASONRY','LIST','LIST SIDEBAR']
		},
		postlayout:{
			title:['POST LAYOUT'],
			content:['RIGHT SIDEBAR','LEFT SIDEBAR'],
		}
//		menuTitledata:['dengxi']
	},
	methods:{
		closemenu:function(){
			$('.d-left-main-menu').animate({
						left:'-100%',
					},400,function(){
						$('.d-left-main-menu').css({
						display:'none'
					})
					})
		},
		clicktrangle:function(e){
			let menuTitledata = e.target.previousElementSibling.innerHTML.toLowerCase().replace(/\s*/g,"")
			this.$set(this.$data,'menudata',this[menuTitledata])   
		},
		returnmenu:function(e){
			let menuTitle = e.target.previousElementSibling.innerHTML.toLowerCase().replace(/\s*/g,"")
			if(menuTitle == 'postlayout' || menuTitle == 'blogstyle')
				{
					this.$set(this.$data,'menudata',this.blogs)   
				}
			
			if(menuTitle != 'postlayout' && menuTitle != 'blogstyle')
				{
					this.$set(this.$data,'menudata',this.maindata)   
				}
		}
	},
	
})


//小屏幕时的搜索框
//当屏幕宽度发生变化时，执行
window.onresize = function(){
	$('.d-little-drop').css(
		'width','100%'
	)	
}
//点击关闭按钮进行回收下拉框
$('.d-search-drop .d-little-drop-close').click(function(){
	let searchObj = {
				objname:'.d-search-drop',
				marginshow:'0',
				marginhide:'32px',
				showtime:200,
				hidetime:200
			}
	$('.d-search-drop').hidedrop(searchObj)
})

$('.d-language-drop').click(function(){
	let languageObj = {
				objname:'.d-language-drop',
				marginshow:'0',
				marginhide:'32px',
				showtime:200,
				hidetime:200
			}
	$('.d-language-drop').hidedrop(languageObj)
})

//顶部部分结束


//按钮换页切换部分
$.fn.changePaper = function(options){
	let api = 'http://192.168.97.218:3001/'
	$(options.changePaper).remove()
	for (let i = 0; i < options.n; i++) {
		let changePaper = `<div class="d-change-btn d-change-paper">
							${i+1}
						</div>`
		$(options.right).before(changePaper)
	}
	//默认情况下当前显示第一页的内容
	$(options.changePaper).eq(0).addClass('active')
	
	//左右箭头页面切换
	
	//左边箭头
	let activeindex = $(options.changePapername).children('.active').index()
	changecursor(activeindex)
	$(options.left).click(function(){
		if(activeindex == 1){
			return false
		}
		else if(activeindex != 1){
			$(options.changePaper).removeClass('active')
			$(options.changePaper).eq(activeindex - 2).addClass('active')
			activeindex = $(options.changePapername).children('.active').index()
			changecursor(activeindex)
			options.ajax(activeindex)
		}
		
	})
	
	//右边箭头
	$(options.right).click(function(){
		if(activeindex == options.n){
			return false
		}
		else if(activeindex != options.n){
			$(options.changePaper).removeClass('active')
			$(options.changePaper).eq(activeindex).addClass('active')
			activeindex = $(options.changePapername).children('.active').index()
			changecursor(activeindex)
			options.ajax(activeindex)
		}
	})
	//点击当前的每一个页面
	$(options.changePaper).click(function(){
		if($(this).hasClass('active')){
			return false
		}
		else{
			$(this).siblings().removeClass('active')
			$(this).addClass('active')
			activeindex = $(options.changePapername).children('.active').index()
			changecursor(activeindex)
			options.ajax(activeindex)
		}
	})
	
	//改变两个按钮的状态
	function changecursor(activeindex){
		if(activeindex == 1){
			$(options.left).css({
				cursor:'not-allowed'
			})
			$(options.right).css({
				cursor:'pointer'
			})
		}
		else if(activeindex == options.n){
			$(options.left).css({
				cursor:'pointer'
			})
			$(options.right).css({
				cursor:'not-allowed'
			})
		}
		else if(activeindex != 1 && activeindex != options.n){
			$(options.left).css({
				cursor:'pointer'
			})
			$(options.right).css({
				cursor:'pointer'
			})
		}
	}
}


//使用的方法
//定义一个对象
//changePapername是换页部分最外面的大盒子的class名字
//changepaper是换页部分每一个具体的页面的class名字
//left 是换页部分左边按钮 上一页的class名字
//right 是换页部分右边按钮 下一页的class名字
//n就是一共存在的页面数量,是几个页面就写数字几
//url就是ajax的路由
let changePaperObj = {
	changePapername:'.d-change-box',
	changePaper:'.d-change-paper',
	left:'.d-change-btn-left',
	right:'.d-change-btn-right',
	n:3,
	ajax:function(activeindex){
		$.ajax({
			type:"get",
			url:'htpp://192.168.97.218:3001/test',
			//请根据要求传回参数
			data:{
				id:activeindex
			},
			datatype:'json',
			success:function(res){
				//请在这里进行回收数据的操作	
			}
		});
	},
}

//将最外面的那个盒子选中，调用changePaper方法，将定义好的对象传入即可
//$('.d-change-box').changePaper(changePaperObj)



//关于回到页面最顶部的部分
let scrollTop = $(document).scrollTop()
	if(scrollTop == 0){
		$('.d-return-top-box').css({
			display:'none'
		})
	}
	else{
		$('.d-return-top-box').css({
			display:'block'
		})
	}
	
$(window).scroll(function(){
	scrollTop = $(document).scrollTop()
	if(scrollTop == 0){
		$('.d-return-top-box').css({
			display:'none'
		})
	}
	else{
		$('.d-return-top-box').css({
			display:'block'
		})
	}
})


$('.d-return-top-box').click(function(){
	$('html,body').animate({
		scrollTop:0,
	},500)
})



//底部部分
let linksInformation = new Vue({
	el:'.d-footer',
	data:{
		hreflink:{
			links:{
				title:'Links',
				list:['Tables','Lighting','Gift Vouchers','Accessories']	
			},
			information:{
				title:'information',
				list:['FAQs','Track Order','Delivery','Contact Us','Return']
			}
		}
	},
	methods:{
		
	}
})
