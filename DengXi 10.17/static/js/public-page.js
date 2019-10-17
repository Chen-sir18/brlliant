// 登录的验证
function validatetoken(){
	let token = window.localStorage.getItem('token')
	let userinfo = JSON.parse(window.localStorage.getItem('info'))
	if(token){
		$('.d-form-title').hide()
		$('.d-form-body').hide()
		$('.login-or-register').text('欢迎'+ userinfo.username + '到来')
		let html = `<div class="d-welcome-login">欢迎${userinfo.username}登录</div>
		             <div v-on:click="endLogin" class="d-end-login"> 退出登录 </div>  
		`
		$('.d-login-and-register').append(html) 
	}
}  
validatetoken()

//login or register
$('.login-or-register').click(function(){
	let text = $(this).text()
	if(text == 'Login or Register'){
		$('#d-body').load('LoginRegister.html')
	}
	else{
		if(confirm('是否退出登录')){
			window.localStorage.removeItem('token')
			window.localStorage.removeItem('info')
			window.location.href = window.location.href 
		}
		else{
			return false
		}
	}
})


//语言选择部分
var selectedLanguage =new Vue({
	el:'.d-language',
	data:{
		languageType:['French(EUR)','Japanese(JPY)'],
		activeLanguage:'English(USD)',
	},
	methods:{
		//控制语言选择框的方法
		languagetype:function(){
			partshow()
			let languageObj = {
				objname:'.languageType-box',
				marginshow:'0px',
				marginhide:'20px',
				showtime:'200',
				hidetime:'300'
			}
			showdrop(languageObj)
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
					marginTop:'20px',
				},400,function(){
						$('.languageType-box').css('display','none')
				})
		},
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
			partshow()
			let goodsTypesObj = {
				objname:'.d-goodstypes',
				marginshow:'-10px',
				marginhide:'20px',
				showtime:200,
				hidetime:100,
			}
			showdrop(goodsTypesObj)

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
		},
		
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
			partshow()
			let shopCarObj = {
				objname:'.d-shopcar .d-shopcar-box',
				marginshow:'16px',
				marginhide:'32px',
				showtime:200,
				hidetime:200,
			}
			showdrop(shopCarObj)
		},
		controllogin:function(){
			partshow()
			let shopCarObj = {
				objname:'.d-login-and-register',
				marginshow:'20px',
				marginhide:'32px',
				showtime:200,
				hidetime:200,
			}
		    showdrop(shopCarObj)
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
			partshow()
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
		},
		loginsubmit:function(e){
			let email = $('.d-email [type="email"]').val()
			let emailhtml = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    		let isemail = emailhtml.test(email)
			let password = $('.d-password [type="password"]').val()
			let passwordhtml = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/
			let ispassword = passwordhtml.test(password)
			let islogin = $(e.target).children('span').text() || $(e.target).text()
			if(islogin == 'LOGIN'){
				let ischecked = $(e.target).siblings('.d-readme').prop('checked') || $(e.target).parent().siblings('.d-readme').prop('checked')
				if(isemail && ispassword && ischecked){
					$.ajax({
						type:"post",
						url:"http://192.168.97.218:3001/login",
						data:{
							email:email,
							password:password
						},
						datatype:'json',
						success:function(res){
							window.localStorage.setItem('token',res.token)
							window.localStorage.setItem('info',JSON.stringify(res.info))
							validatetoken()
							window.location.href = window.location.href
							
						}
					});
				}
				else if(!ischecked){
					alert('请勾选已阅读协议')
				}
				else
				{
					alert('请输入正确的邮箱和密码')
				}
			}
			else{
		
			if(isemail && ispassword){
				$.ajax({
					type:"post",
					url:"http://192.168.97.218:3001/register",
					data:{
						email:email,
						password:password,
					},
					datatype:'json',
					success:function(res){
						
						console.log(res)
					}
				});
			}
			else
			    {
				    alert('请输入正确的邮箱和密码')
			    }
			} 
		},
		//点击退出登录
		endLogin:function(){
			window.localStorage.removeItem('token')
			window.localStorage.removeItem('info')
			console.log(window.location.href)
			window.location.href = window.location.href
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
//			partshow()
			let goodsClassObj = {
				objname:'.d-goods-class',
				marginshow:'0px',
				marginhide:'40px',
			}
			showdrop(goodsClassObj)
		},
		reload:function(e){
			let text =$(e.target).text()
			let arr = ['HOME','SHOP','PAGES','BLOGS']
			if(arr.indexOf(text) == -1){
//				去掉空格
				text = text.replace(/\s/g, "")
				//去掉斜杠
				text = text.replace(/[//]/g,'')
				let pagename = text + '.html'
				$('#d-body').load(pagename)
			}
		}
	}
})

//function newload(){
//	$('#d-body').load('about.html')
//}

//点击窗口界面，就让已经展开的下拉列表收缩回去
window.onclick = function(){
	partshow()
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
 function showdrop(options){
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
function hidedrop(options){
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
//点击某个下拉框，让其他下拉框消失
function partshow(){
	let hideLanguageObj = {
		objname : '.languageType-box',
		marginhide : '20px',
		hidetime : 300
	}
	hidedrop(hideLanguageObj)
	//控制商品类别的下拉框
	let goodsClassObj = {
		objname : '.d-goodstypes',
		marginhide : '20px',
		hidetime : 200
	}
	hidedrop(goodsClassObj)
	
	//控制购物框
	let shopCarObj = {
		objname : '.d-shopcar .d-shopcar-box',
		marginhide : '32px',
		hidetime : 200
	}
	hidedrop(shopCarObj)
	//控制登录注册
	let loginRegisterObj = {
		objname : '.d-login-and-register',
		marginhide : '32px',
		hidetime : 200
	}
	hidedrop(loginRegisterObj)
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
		},
		reload:function(e){
			let righttrangle = $(e.target).siblings('.d-right-trangle')
			if(righttrangle.length == 0){
				let text =$(e.target).text()
				let arr = ['HOME','SHOP','PAGES','BLOGS']
				if(arr.indexOf(text) == -1){
	//				去掉空格
					text = text.replace(/\s/g, "")
					//去掉斜杠
					text = text.replace(/[//]/g,'')
					let pagename = text + '.html'
					$('#d-body').load(pagename)
				}
			}
			else{
				return false
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

//关于回到页面最顶部的部分
let scrollTop = $(document).scrollTop()
let screenWidth = $(window).innerWidth()
	returnTop(scrollTop,screenWidth)


$(window).scroll(function(){
	scrollTop = $(document).scrollTop()
	returnTop(scrollTop,screenWidth)
})
window.onresize = function(){
	screenWidth = $(window).innerWidth()
	returnTop(scrollTop,screenWidth)
}

//控制回到顶部按钮出现消失的方法
 function returnTop(scrollTop,screenWidth){
 	if(scrollTop == 0 || screenWidth <=768){
		$('.d-return-top-box').css({
			display:'none'
		})
	}
	else{
		$('.d-return-top-box').css({
			display:'block'
		})
	}
 }
$('.d-return-top-box').click(function(){
	$('html,body').animate({
		scrollTop:0,
	},500)
})
//底部最小屏时出现的部分
let footermenu = new Vue({
	el:'.d-footer-device-mobile',
	data:{
			partdata:[{
				class:'d-footer-device-logo glyphicon glyphicon-home',
				text:'Home'
			},
			{
				class:'d-footer-device-logo glyphicon glyphicon-heart-empty',
				text:'Wishlist'
			},
			{
				class:'d-footer-device-logo glyphicon glyphicon-shopping-cart',
				text:'Cart'
			},
			{
				class:'d-footer-device-logo glyphicon glyphicon-user',
				text:'Account'
			}]
		},
	methods:{
		links:function(e){
			let text = $(e.target).text() || $(e.target).siblings().text()
			if(text=='Home'){
				$('#d-body').load('home01.html')
			}
			if(text=='Cart'){
				$('#d-body').load('ShoppingCart.html')
			}
		}
	}
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
