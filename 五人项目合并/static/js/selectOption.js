
//闭合空间
(function($,w){
	
	$.fn.selectExamp = function(option){
		
		var options = $.extend({
			title:'.select_title',
			list:'.select_lists'
		}, option);
		
		var _this = this;
		
		var selectTitle = $(this).find(options.title)
		
		var lists = $(this).find(options.list).children()
		
		selectTitle.click(function(event){
			
			
			event.stopPropagation()
			
			$(this).next().toggleClass('show')
			
			
			$(this).closest(options.parent).siblings(options.parent).find(options.list).removeClass('show')
			
		})
		
		lists.click(function(){
			var aInput = $(this).closest(options.parent).find('input')

			
			aInput.val($(this).html())
			
			
			$(options.list).removeClass('show')
			
		})
		
	
	$(document).click(function(){
		
		$(options.list).removeClass('show')
	})
	
	}
	
})($, window)
