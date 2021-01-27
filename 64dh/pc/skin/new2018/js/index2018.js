/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function(){
	$(".g-tab-con").each(function(index, element) {
  	  $(this).find("li").eq(4).addClass("m-cen-sod");
	  $(this).find("li").eq(9).addClass("m-cen-sod")
	});
	
	//前三加背景
	$("ul.f-list-bg").each(function(){
      $(this).find("li:eq(0)").addClass('one');
      $(this).find("li:eq(1)").addClass('two');
      $(this).find("li:eq(2)").addClass('three');
 	});
	
	$(".g-top-dome").slide({mainCell:".g-domelist ul",autoPage:true,effect:"left",scroll:1,vis:10});//顶部滚动
	$(".g-banimg").slide({titCell:".g-banimg-ico ul",mainCell:".g-banimg-list ul",autoPage:true,autoPlay:true,effect:"left",titOnClassName:"m-hover"});//banner
	$(".g-fr-dome").slide({titCell:".g-fr-ico ul",mainCell:".g-fr-bd ul",autoPage:true,effect:"left",titOnClassName:"m-hover"});//right img
	$(".g-tjzq").slide({titCell:".g-dome-link li",mainCell:".g-tjzq-bd",titOnClassName:"m-hover"});//推荐专区
	$(".g-ivtab").slide({titCell:".g-ivtab-top li",mainCell:".g-ivtab-bd",titOnClassName:"m-hover"});//最近更新
	$(".g-special-dome").slide({mainCell:".g-special-cont ul",autoPage:true,effect:"left",scroll:1,vis:4});//软件专题
	$(".g-spftware-cont").slide({titCell:".g-spftware-top li",mainCell:".g-spftware-bd",titOnClassName:"m-hover"});//软件必备
	$(".g-android-cont").slide({titCell:".g-android-top li",mainCell:".g-android-bd",titOnClassName:"m-hover"});//安卓 苹果
	$(".g-article").slide({titCell:".g-article-top li",mainCell:".g-article-bd",titOnClassName:"m-hover"});//资讯教程
	//排行榜
	$(".f-list-hover").each(function(){
		$(this).find("li:first").addClass("m-hover");   
	})
	$(".f-list-hover li").hover(function() {
		$(this).addClass("m-hover").siblings("li").removeClass("m-hover"); 
	})
	
	
});

//友链上下
$(function(){
	var i=1;
	var ah=34;
	var c=$("#links-box").height()/ah-3;
	$(".r-bottom").click(function(){
		var t=(-ah*i)+'px';
		if(i<c){
			$("#links-box").stop(true).animate({top:t},300);
			i++;
		}else{return}
	});
	$(".r-top").click(function(){
		var t=parseInt(-ah*i+ah*2)+'px';
		if(i>1){
			$("#links-box").stop(true).animate({top:t},300);
			i--;
		}else{return}
	});
})


$(function($) {
  searchOver()
});

function searchOver(){	


	var moren = "软件";
	
	 $("#topForm dl:first").click(function(){	
	 	var liLast = $(this).children("dd").css("display");
	 	if(liLast=="none"){
	 		$(this).find("dd").show();
	 	}else{
	 		$(this).find("dd").hide();	
	 	}
	 })
	 $("#topForm dl dd").click(function(){
		moren = $(this).attr("data-type");	
	   $("#topForm dl dt").html(moren+"<i></i>")
	   if(moren=="文章"){
		   $('#bname').val('news');
		   $('#tid').val('1');
	   }else{
		   $('#bname').val('soft');
		   $('#tid').val('2');
	   }
	})

}




//首页右侧定位
function gotoTop(min_height){
	//预定义返回代码，样式默认为不显示
	var gotoTop_html = '<div id="gotoBox" class="f-gotoBox"><a href="javascript:;" class="Spftware m-hover">软件</a><a href="javascript:;" class="Android">安卓</a><a href="javascript:;" class="iOS">苹果</a><a href="javascript:;"  class="Personality">个性</a><a href="javascript:;"  class="Article">资讯</a><i class="" ></i></div>';
    $("body").append(gotoTop_html);
    $("#gotoBox i").click( 
        function(){$('html,body').animate({scrollTop:0},700);
    }).hover(
        function(){$(this).addClass("hover");},
        function(){$(this).removeClass("hover");
    });
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 600;
    
    //为窗口的scroll事件绑定处理函数
	$(window).scroll(function(){
        //获取窗口的滚动条的垂直位置
        var s = $(window).scrollTop();
        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
        if( s > min_height){
			//$("#gotoBox").addClass("u-block");
            $("#gotoBox").fadeIn();
        }else{
			//$("#gotoBox").removeClass("u-block");
            $("#gotoBox").fadeOut();
        };
		
		if(s >=$('#Spftware').offset().top-50 && s<$('#Android').offset().top-50){
	     	$('#gotoBox a').removeClass('m-hover').eq(0).addClass('m-hover'); 
	    }else if(s>=$('#Android').offset().top-50 && s<$('#iOS').offset().top-50){
			$('#gotoBox a').removeClass('m-hover').eq(1).addClass('m-hover'); 
		}else if(s>=$('#iOS').offset().top-50 && s<$('#Personality').offset().top-50){
			$('#gotoBox a').removeClass('m-hover').eq(2).addClass('m-hover'); 
		}else if(s>=$('#Personality').offset().top-50 && s<$('#Article').offset().top-150){
			$('#gotoBox a').removeClass('m-hover').eq(3).addClass('m-hover'); 
		}else if(s>=$('#Article').offset().top-150){
			$('#gotoBox a').removeClass('m-hover').eq(4).addClass('m-hover'); 
		}
    });
	 $('.Spftware').click(function(){
		var sTop=$('#Spftware').offset().top;
		$('html,body').animate({scrollTop:sTop+"px"},500)
	});
	$('.Android').click(function(){
		var sTop=$('#Android').offset().top;
		$('html,body').animate({scrollTop:sTop+"px"},500)
	});
	$('.iOS').click(function(){
		var sTop=$('#iOS').offset().top;
		$('html,body').animate({scrollTop:sTop+"px"},500)
	});
	$('.Personality').click(function(){
		var sTop=$('#Personality').offset().top;
		$('html,body').animate({scrollTop:sTop+"px"},500)
	});
	$('.Article').click(function(){
		var sTop=$('#Article').offset().top;
		$('html,body').animate({scrollTop:sTop+"px"},500)
	});
};
gotoTop();