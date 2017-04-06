//下拉选框
$(function(){

	$(".nav_bbs p").click(function(){
		var ul=$(".new");
		if(ul.css("display")=="none"){
			ul.slideDown();
		}else{
			ul.slideUp();
		}
	});
	
	$(".set").click(function(){
		var _name = $(this).attr("name");
		if( $("[name="+_name+"]").length > 1 ){
			$("[name="+_name+"]").removeClass("select");
			$(this).addClass("select");
		} else {
			if( $(this).hasClass("select") ){
				$(this).removeClass("select");
			} else {
				$(this).addClass("select");
			}
		}
	});
	
	$(".nav_bbs li").click(function(){
		var li=$(this).text();
		$(".nav_bbs p").html(li);
		$(".new").hide();
		/*$(".set").css({background:'none'});*/
		$("p").removeClass("select") ;   
	});
})

//二级下啦
$(function(){
	var mark=1;
	$("#nav-left h2").click(function(){
		//alert("sss");//弹窗
		if(mark==1){//把他展开
			$("#navol").slideDown();
			mark=2;
		}else if(mark==2){//收缩
			$("#navol").slideUp();
			mark=1;
		}
	});
});




//搜索框1111111111111111111111111
function test1()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="雅思刷分季")
	{
		document.getElementById('test').value="";
	}

}

function test2()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="")
	{
		document.getElementById('test').value="雅思刷分季";
	}
}
$(document).ready(function(){
	var $tab_li = $('#c_tab ul li');
	$tab_li.hover(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = $tab_li.index(this);
		$('div.c_tab_box > div').eq(index).show().siblings().hide();
	});	
});