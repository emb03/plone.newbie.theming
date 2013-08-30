var imgs = ['++theme++gender_studies_web/imgs/homeBGImg.jpg', '++theme++gender_studies_web/imgs/gm_322975ex1_d_copyright.jpg',
'++theme++gender_studies_web/imgs/gm_322975ex1_d_copyright.jpg'];

$(function(){
	function changeBg(i) {
		$("img.bgimg").attr('src', imgs[i]);
	}

	$(".contentpaneopen:even").each(function(i){
		$(this).css({'cursor': 'pointer','-moz-opacity':'.80', 'filter':'alpha(opacity=80)', 'opacity':'.80'});
		$(this).click(function(){
			$(".contentpaneopen:odd").slideUp(1000);
			$(this).next('.contentpaneopen').slideDown(1000);
			$(".contentpaneopen:even").slideDown(1000);
			changeBg(i);
			$(this).hide();
		});
		$(this).bind('mouseover',function(){
			$(this).css('background','#eee');
		});
		$(this).bind('mouseout',function(){
			$(this).css('background','#ffffff');
		});
	});
	$(".contentpaneopen:odd").hide();
	$(".contentpaneopen:odd:first").show();
	$(".contentpaneopen:even:first").hide();
	$(".blog").wrap("<div></div>").parent("div").height(400);

	window.onresize = function() {
		$("img.bgimg").width($(window).width());
	}
	$("img.bgimg").width($(window).width());

});

window.onscroll = function () {
	var x = window.scrollY || document.documentElement.scrollTop;
	var px = (-1 * x) + 'px';
	var f = document.getElementById('footer');
	f.style.bottom = px;
}
