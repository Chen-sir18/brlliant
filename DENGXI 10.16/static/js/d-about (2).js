var person = new Vue({
	el:'.d-important-person',
	data:{
		importantPerson:[
		{
			img:'img/member1.png',
			name:'DENG XI',
			position:'CEO'
		},{
			img:'img/member2.png',
			name:'Mr Claudio',
			position:'CFO'
		},{
			img:'img/member3.png',
			name:'YANG XI',
			position:'COO'
		},{
			img:'img/product-item-1.jpg',
			name:'CHAIR',
			position:'CTO'
		},
		{
			img:'img/member1.png',
			name:'DENG XI',
			position:'CEO'
		},{
			img:'img/member2.png',
			name:'Mr Claudio',
			position:'CFO'
		},{
			img:'img/member3.png',
			name:'YANG XI',
			position:'COO'
		},{
			img:'img/product-item-1.jpg',
			name:'CHAIR',
			position:'CTO'
		},{
			img:'img/member1.png',
			name:'DENG XI',
			position:'CEO'
		},{
			img:'img/member2.png',
			name:'Mr Claudio',
			position:'CFO'
		},{
			img:'img/member3.png',
			name:'YANG XI',
			position:'COO'
		},{
			img:'img/product-item-1.jpg',
			name:'CHAIR',
			position:'CTO'
		},
		]
	},
	methods:{
		moveLeft:function(e){
			carouselMove(e.target)
			
			
		},
		moveRight:function(e){
			carouselMove(e.target)
		}
	},
	mounted:function(){
		changewidth()
		window.onresize = function(){
			changewidth()
		}
	}
})
//改变轮播的宽度
function changewidth (){
				let innerWidth = $('.d-content').innerWidth()
				let itemLength = $('.d-important-person-item').length
				if(innerWidth >= 718){
					let itemWidth = innerWidth / 3
					let outerWidth = itemWidth * itemLength
					console.log(innerWidth,outerWidth)
					$('.d-person-carousel-inner').css({
						width:outerWidth + 'px',
						marginLeft:-itemWidth * itemLength / 3 +'px'
					})
					$('.d-important-person-item').css({
						width:itemWidth + 'px'
					})
				}
				else{
					let innerWidth = $('.d-important-person').innerWidth()
					let itemWidth = innerWidth / 2
					let outerWidth = itemWidth * itemLength
					console.log(innerWidth,outerWidth)
					$('.d-person-carousel-inner').css({
						width:outerWidth + 'px',
						marginLeft:- itemWidth * itemLength / 3 +'px'
					})
					$('.d-important-person-item').css({
						width:itemWidth + 'px'
					})
				}
			}
//重要人物，移动的轮播
function carouselMove(target){
	let arrow = $(target).hasClass('glyphicon-menu-left') || $(target).hasClass('d-carousel-left')
	let left = parseInt($('.d-person-carousel-inner').css('margin-left')) 
	let itemLength = $('.d-important-person-item').length
	let itemWidth = $('.d-important-person-item').innerWidth()
	if(arrow){
		left = left + itemWidth + 'px'

		$('.d-person-carousel-inner').animate({
			marginLeft:left,
		},500,function(){
			if(parseInt(left)> parseInt(-itemWidth)){
				let hideLeft = -itemLength * itemWidth / 3 +'px'
				$('.d-person-carousel-inner').css({	
					marginLeft:hideLeft,
				})
			}
		})
	}
	else{
		left = left - itemWidth + 'px'
		$('.d-person-carousel-inner').animate({
			marginLeft:left,
		},500,function(){
			if(parseInt(left) < parseInt(-itemWidth * itemLength * 2/3 + itemWidth)){
				let hideLeft = -itemLength * itemWidth / 3 +'px'
				$('.d-person-carousel-inner').css({	
					marginLeft:hideLeft,
				})
			}
		})
	}
}
