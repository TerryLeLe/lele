
$(function(){
	//tab切换
	$('.js_tab_detail').hide();
	$('.js_tab_detail:eq(0)').show();
	$('.js_tab li').on('click',function(){
		$(this).addClass('check').siblings().removeClass('check');
		var index = $(this).index();
		$('.js_tab_detail').hide();
		$('.js_tab_detail:eq('+index+')').show();
	});
	//众投内页百分比
	$('.js_colorw').each(function(){
		var wid=$(this).siblings('.js_rate').text();		
		$(this).css('width',wid);
	});
	var length=$('.juben_tab li').length;
	var a=640/length;
	$('.juben_tab li').css({'width':a});
//	视频播放
	$('.jishu li').on('click',function(){
		var Url=$(this).attr('data-id');
		$(this).siblings().removeClass('check');
		$(this).addClass('check');
		$('iframe').attr('src',Url);
	});
	//搜索切换
	var ua = navigator.userAgent.toLowerCase();	
	if (/iphone|ipad|ipod/.test(ua)) {	
		touch('touchstart');
	}else{
		touch('click');
	};
	function touch(info){
		$('.search_tab li').on(info,function(e){
			if($(this).hasClass('check')){	
				$("body").css("overflow","auto");
				$('.tab_box').hide();
				$(this).removeClass('check');
				$('.shadow').hide();			
				$("body").unbind("touchmove"); 
			}else{
				$("body").css("overflow","hidden");
				$(this).addClass('check').siblings().removeClass('check');
				var index = $(this).index();
				$('.tab_box').hide();
				$('.tab_box:eq('+index+'),.shadow').show();
			}
		});	
	};
	$('.shadow').click(function(){
		$(this).hide();
		$('.tab_box').hide();
		$('.search_tab li.check').removeClass('check');
		$("body").unbind("touchmove"); 
	});
	//宣传页实现
	$('#js_nav li').eq(0).click(function(){
		$('#js_ym').show();
		$('#js_layer').show();
	})
	$('#js_nav li').eq(1).click(function(){
		$('#js_wd').show();
		$('#js_layer').show();
	})
	$('#js_layer').click(function(){
		$('#js_ym').hide();
		$('#js_wd').hide();
		$('#js_layer').hide();
	})
});