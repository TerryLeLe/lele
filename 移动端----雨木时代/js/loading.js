!function(){	
	//获取浏览器页面可见高度和宽度
	var _PageHeight = document.documentElement.clientHeight,
	    _PageWidth = document.documentElement.clientWidth;
	//在页面未加载完毕之前显示的loading Html自定义内容
	var _LoadingHtml = '<div id="loadingDiv" style="position:fixed;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:rgba(0,0,0,0.8);opacity:1;filter:alpha(opacity=80);z-index:99999999;"><div  class="line-scale-party" style="position: absolute;  left: 46%; top:45%; "><div></div><div></div><div></div><div></div></div></div>';
//	禁止滑动事件
	document.addEventListener('touchmove',touch, false); 
	function touch(event){
		 event.preventDefault();
	};
	//监听加载状态改变
	document.onreadystatechange = completeLoading;				 
	//呈现loading效果
	document.write(_LoadingHtml);
	//加载状态为complete时移除loading效果
	function completeLoading() {
	    if (document.readyState == "complete") {
	    	var time = setTimeout(function(){	
		        var loadingMask = document.getElementById('loadingDiv');
		        loadingMask.parentNode.removeChild(loadingMask);
		        document.removeEventListener('touchmove',touch, false); 
		        clearTimeout(time); 
			},1000)
	    }
	}
}();