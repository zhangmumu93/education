$(function(){
	/*未元素的首尾添加补白*/
	var $panels				= $('#slider .scrollContainer > li');
	var $parent=$panels.parent();//或许当前li的最近一级的父元素
	var $length=$panels.length;//获取指定length值
	var $first=$panels.eq(0).clone().addClass("panel cloned").attr("id",'panel_'+($length+1));//获取第一个元素并复制
	var $last=$panels.eq($length-1).clone().addClass("cloned").attr("id",'panel_0');;//获取最后一个元素并复制
	$parent.append($first);//将li序列中的第一个添加到ul元素中的最后一个  $("#slide02").scrollLeft(0);
	$parent.prepend($last);//将li序列中的最后一个添加到ul元素中的第一个
	var totalPanels			= $(".scrollContainer").children().size();//所有子元素的数字，滚动元素的个数 7
	var regWidth			= $(".panel").css("width");//获取li元素的宽度
	var regImgWidth			= $(".panel img").css("width");//获取其中图片的宽度
	var movingDistance	    = 190;//每次移动的距离
	var curWidth			= 230;//当前中间li的宽度为350px
	var curHeight         =174;//当前中间li的高度未312  
	var curImgWidth  =226;
	var curImgHeight  =170;
	var othersW           =190;//其他li的宽度
	var othersH           =137;//高度
	var othersImgW           =186;//其他li的宽度
	var othersImgH           =133;//高度
	var $panels				= $('#slider .scrollContainer > li');//此处作用是将复制进来补白的元素重新赋值
	var $container			= $('#slider .scrollContainer');
	$panels.css({'float' : 'left','position' : 'relative'});
	$("#slider").data("currentlyMoving", false);//是否正在运动中
	$container.css('width', (($panels[0].offsetWidth+25) * $panels.length) + 60 ).css('left','0');//计算容器的总的宽度 PS：25为margin值 offsetWidth
	var scroll = $('#slider .scroll').css('overflow', 'hidden');
	function returnToNormal(element) {//li元素返回到正常状态
		$(element).animate({ width: othersW,height: othersH}).find("img").animate({width:othersImgW,height:othersImgH});
	};
	function growBigger(element) {//当前元素之间变大
		$(element).addClass("current").animate({ width: curWidth,height:curHeight}).siblings().removeClass("current")
		.end().find("img").animate({width:curImgWidth,height:curImgHeight})
	}
	//direction true = right, false = left
	function change(direction) {
		//if not at the first or last panel
		if((direction && !(curPanel < totalPanels-2)) || (!direction && (curPanel <= 1))) {
			return false;
		}	
		//if not currently moving
		if (($("#slider").data("currentlyMoving") == false)) {
			$("#slider").data("currentlyMoving", true);
			var next         = direction ? curPanel + 1 : curPanel - 1;
			var leftValue    = $(".scrollContainer").css("left");
			var movement	 = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
			$(".scrollContainer").stop().animate({"left": movement}, function() {
				$("#slider").data("currentlyMoving", false);
			});
			returnToNormal("#panel_"+curPanel);
			growBigger("#panel_"+next);
			curPanel = next;
			//remove all previous bound functions
			$("#panel_"+(curPanel+1)).unbind();	
			//go forward
			$("#panel_"+(curPanel+1)).click(function(){ change(true); });
			//remove all previous bound functions															
			$("#panel_"+(curPanel-1)).unbind();
			//go back
			$("#panel_"+(curPanel-1)).click(function(){ change(false); }); 
			//remove all previous bound functions
			$("#panel_"+curPanel).unbind();
		}
	}
	// Set up "Current" panel and next and prev 设置当前元素和上下
	growBigger("#panel_2");	
	var curPanel = 2;
	$("#panel_"+(curPanel+2)).click(function(){ change(true);return false;});
	$("#panel_"+(curPanel-2)).click(function(){ change(false);return false;});
	//when the prev/next arrows are clicked
	$("#slider .next").click(function(){ change(true);});	
	$("#slider .prev").click(function(){ change(false);});
	
});