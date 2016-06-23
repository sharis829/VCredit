$( document ).ready(function() {
   $('header h1').fitText(1,{maxFontSize: '72px', minFontSize: '20px'});
   smoothScroll();
});


function smoothScroll(){
	$('nav a').on('click', function(event){
		var $this = $(this);
		event.preventDefault();
		var scrollTop = $($this.attr('href')).offset().top;
		
		$('body').animate({
			scrollTop: scrollTop
		},{
			duration: 1000,
			complete: function(){
				console.log('cool, it animates!');
			}
		});
	})
}

(function($){
	$.fn.fitText = function(k, options){
		var compressor = k | 1;
		
		this.each(function(){
			var $this = $(this);
		
			var resizer = function(){
				var fontSize = Math.max(Math.min($this.width()/(compressor * 10),parseFloat(options.maxFontSize)), parseFloat(options.minFontSize));
				$this.css('fontSize', fontSize+'px');
			}
			
			//页面load完 就resize一次
			resizer();
			
			$(window).on('resize.fitText', resizer);
		});
		
	}
})(jQuery);


