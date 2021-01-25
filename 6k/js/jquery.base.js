﻿islogin=0;
function checkcookie(){
	if(document.cookie.indexOf('auth=')>=0){
		islogin=1;
		return true;
	}
	return false;
}
checkcookie();

$(function($){
    $.fn.changeList = function(options){	
        var defaults = {
                    tag : 'li', // tab name
                    subName : '.utilTabSub', // sub class name
                    eventType : 'click', // event type
                    num : 4,
                    showType : 'show' // show effect type
                },
                opts = $.extend({}, defaults, options),
                that = $(this),
                subUl = that.find(opts.subName),
                subItems = subUl.find('li'),
                size = subItems.length,
                liW = subItems.outerWidth(true),
                ulW = liW * size,
                page = size + 1,
                n = opts.num,
                randNum = 0,
                m = 0;

        if(size > n){
            that.find(opts.tag)[opts.eventType](function() {
                randNum = mathRand(n, size);
                subItems.hide();
                $.each(randNum, function (i, el) {
                    subItems.eq(el).fadeIn(800);
                });
            });
        }
    };
}(jQuery));

/**
 * create Random number
 * @param bit: number
 * @param max: max number
 * @return {Array}
 */
function mathRand(bit, max){
    var num = 0,
            arr = [],
            ret = [];
    for(var i=0; i<bit; i++){
        num = Math.floor(Math.random() * max);
        if($.inArray(num, ret) == -1){
            ret.push(num);
        } else {
            i--;
            continue;
        }
    }
    return ret;
}
$(function(){
	// drop-down
	$(".drop-down").hover(function(){		
		$(this).find(".drop-title").addClass("drop-title-hover");
		$(this).find(".drop-box").show();
	},function(){
		$(this).find(".drop-title").removeClass("drop-title-hover");
		$(this).find(".drop-box").hide();
	});		
});

$(document).ready(function(){
		
	// ui-input
	$(".ui-input").focus(function(){
		$(this).addClass("ui-input-focus");
	}).hover(function(){
		$(this).addClass("ui-input-hover");
	},function(){
		$(this).removeClass("ui-input-hover");
	});
	$(".ui-input").blur(function(){
		$(this).removeClass("ui-input-focus");
	});			
	
	// ui-form-placeholder
	$(".ui-form-placeholder").each(function(){
		var _label = $(this).find(".ui-label");
		var _input = $(this).find(".ui-input");
		var _text =  $(this).find(".ui-input").val();
		
		if (_text != ""){
			_label.hide();
		}
		
		_label.css("z-index","3");
		_label.click(function(){
			$(this).hide();
			_input.focus();
		});	
		_input.focus(function(){
			_label.hide();
		});	
	});
		
	// ui-button
	$(".ui-button").hover(function(){
		$(this).addClass("ui-button-hover");
	},function(){
		$(this).removeClass("ui-button-hover");
	});
		
	// close-his	
	$(".close-his").click(function(){
		$(this).parents(".drop-box").hide();
	});
	// show-tipinfo
	$(".show-title a").hover(function(){
		$(this).parent().parent().find(".tipInfo").show();
	},function(){		
		$(this).parent().parent().find(".tipInfo").hide();
	});	
	
	$("#wish").trigger('click');
	
	
	
	// timeinfo
	$(".timeinfo").hover(function(){
		$(this).addClass("timeinfo-active");
	},function(){
		$(this).removeClass("timeinfo-active");
	});	
	
	// Date List Jquery
	$(".date-list").each(function(){
		$lis = $(this).find("li:last").index();		
		if($lis > 5){
			$(this).addClass("date-long");
		}	
	});
	
	$('.module-mov-new').changeList({							
    tag: '.mov-time',
    subName: '.mov-time-ul',
    num: 2
    });
	$('.new-mov-addtime').changeList({
    tag: '.module-mov-time',
    subName: '.module-mov-hot',
    num: 6
    });
	$('.new-tv-addtime').changeList({
    tag: '.module-tv-time',
    subName: '.module-tv-hot',
    num: 6
    });
	$('#star-new').changeList({
    tag: '.module-star-time',
    subName: '.index-star',
    num: 6
    });
	$('.star-rlist').changeList({
    tag: '.list-star-time',
    subName: '.star-right',
    num: 6
    });
	$('.index-jiaose').changeList({
    tag: '.module-jiaose-time',
    subName: '.index-jiaose-ul',
    num: 1
    });
	
});


// Tab Menu JS Common
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.style.display=i==cursel?"block":"none";
	}
}
// Tab Menu JS Common
function setTab2(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"active":"";
		con.style.display=i==cursel?"block":"none";
	}
}

// 顶部划过展开
function checkcookie2(){
	if(document.cookie.indexOf('mb_u=')>=0){
	islogin=1;
	return true;
	}
	return false;
}
$(function(){
	// drop-down
	$(".drop-down").hover(function(){		
		$(this).find(".drop-title").addClass("drop-title-hover");
		$(this).find(".drop-box").show();
	},function(){
		$(this).find(".drop-title").removeClass("drop-title-hover");
		$(this).find(".drop-box").hide();
	});	

});
$(function(){
	// drop-down
	$(".dhBox").hover(function(){		
		$(this).find(".drop-title").addClass("drop-title-hover");
		$(this).find(".navboxFirst-v3").show();
	},function(){
		$(this).find(".drop-title").removeClass("drop-title-hover");
		$(this).find(".navboxFirst-v3").hide();
	});	

});


//基因划过展开

$(function(){
	// drop-down
	$(".jiyin,.jiyin2,.jiyin3,.jiyin4").hover(function(){		
		$(this).find(".drop-title").addClass("drop-title-hover");
		$(this).find(".zjiyin").show();
	},function(){
		$(this).find(".drop-title").removeClass("drop-title-hover");
		$(this).find(".zjiyin").hide();
	});	

});






function qrsearch(id){
	if($("#xdwwd").val()=='请在此处输入影片片名或演员名称。'||$("#wd").val()==''){
		$("#xdwwd").val('');
		$("#xdwwd").focus();
	}else{
	document.location =Root + 'vod-search-wd-'+ encodeURIComponent($("#xdwwd").val())+".html";
	}
	return false;
}

$(document).ready(function(){
	// Baby Time Step A Tips
	$(".play-mode-list a").each(function(j,div){
			$(this).click(function(){
		//$("html,body").animate({scrollTop:$("#"+listid).offset().top}, 500); //我要平滑
		        if ($(this).parent().hasClass("current") ){
				return;
                }
				var txt=$(this).attr("title").split('-');
				$(".detail-pic .text").text(txt[1]);
				var listid=$(this).attr("id")+'-list';
				if(listid !='bdhd-pl-list' && listid!='qvod-pl-list'){
					$('#'+listid+' .txt').text('( 无需安装任何插件，即可快速播放 )');
				}
				$(this).parent().nextAll().removeClass("current");
				$(this).parent().prevAll().removeClass("current");
				$(this).parent().addClass("current")
				$('.play-list-box').hide().css("opacity",0);
				
				$('.play-list-box:eq('+j+')').show().animate({"opacity":"1"},1200);
	});
	});
		$(".play_list a").each(function(j,div){
			$(this).hover(function(){
		//$("html,body").animate({scrollTop:$("#"+listid).offset().top}, 500); //我要平滑
		        if ($(this).parent().hasClass("current") ){
					return;
                }
				
				var txt=$(this).attr("title").split('-');
				$(".detail-pic .text").text(txt[1]);
				var listid=$(this).attr("id")+'-list';
				if(listid !='bdhd-pl-list' && listid!='qvod-pl-list' && listid!='qiyi-pl-list' && listid!='letv-pl-list'){
					$('#'+listid+' .txt').text('( 无需安装任何插件，即可快速播放 )');
				}
				$(this).parent().nextAll().removeClass("current");
				$(this).parent().prevAll().removeClass("current");
				$(this).parent().addClass("current")
				$('.vodplaybox').hide().css("opacity",0);
				
				$('.vodplaybox:eq('+j+')').show().animate({"opacity":"1"},1200);
	});
			
	});
	//order
	$('#detail-list .order a').click(function(){
		if($(this).hasClass('asc')){
			$(this).removeClass('asc').addClass('desc').text('降序');
		}else{
			$(this).removeClass('desc').addClass('asc').text('升序');
		}
		var a=$('.play-list-box:eq('+$(this).attr('data')+') .play-list');
		var b=$('.play-list-box:eq('+$(this).attr('data')+') .play-list a');
		a.html(b.get().reverse());
		var c=$('.vodplaybox:eq('+$(this).attr('data')+') .player_list');
		var d=$('.vodplaybox:eq('+$(this).attr('data')+') .player_list a');
		c.html(d.get().reverse());
	});

	
});

function intval(v)
    {    
    v = parseInt(v);    
    return isNaN(v) ? 0 : v;
    } 
    // 获取元素信息
    function getPos(e)
    {    
    var l = 0;    
    var t  = 0;    
    var w = intval(e.style.width);    
    var h = intval(e.style.height);    
    var wb = e.offsetWidth;    
    var hb = e.offsetHeight;    
    while (e.offsetParent)
    {       
     l += e.offsetLeft + (e.currentStyle?intval(e.currentStyle.borderLeftWidth):0);        
     t += e.offsetTop  + (e.currentStyle?intval(e.currentStyle.borderTopWidth):0);        
     e = e.offsetParent;    
     }    
     l += e.offsetLeft + (e.currentStyle?intval(e.currentStyle.borderLeftWidth):0);    
     t  += e.offsetTop  + (e.currentStyle?intval(e.currentStyle.borderTopWidth):0);    
     return {x:l, y:t, w:w, h:h, wb:wb, hb:hb}; } 
     // 获取滚动条信息
     function getScroll() 
     {    
     var t, l, w, h;         
     if (document.documentElement && document.documentElement.scrollTop)
     {        
     t = document.documentElement.scrollTop;        
     l = document.documentElement.scrollLeft;        
     w = document.documentElement.scrollWidth;       
     h = document.documentElement.scrollHeight;    
     }
     else if (document.body)
     {        
     t = document.body.scrollTop;        
     l = document.body.scrollLeft;        
     w = document.body.scrollWidth;        
     h = document.body.scrollHeight;    
     }    
     return { t: t, l: l, w: w, h: h };
     } 
     // 锚点(Anchor)间平滑跳转
     function scroller(el, duration)
     {    
     if(typeof el != 'object')
     {
     el = document.getElementById(el);
     }     
     if(!el) return;     
     var z = this;    
     z.el = el;    
     z.p = getPos(el);    
     z.s = getScroll();    
     z.clear = function()
     {
     window.clearInterval(z.timer);z.timer=null
     };    
     z.t=(new Date).getTime();     
     z.step = function()
     {        
     var t = (new Date).getTime();        
     var p = (t - z.t) / duration;        
     if (t >= duration + z.t)
     {            
     z.clear();            
     window.setTimeout(function(){z.scroll(z.p.y, z.p.x)},13);         }
     else {            
     st = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.y-z.s.t) + z.s.t;            
     sl = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.x-z.s.l) + z.s.l;            
     z.scroll(st, sl);        
     }    
     };    
     z.scroll = function (t, l){window.scrollTo(l, t)};    
     z.timer = window.setInterval(function(){z.step();},13);
     }

$(document).ready(function(){			   
	// 异步加载图片
	$(".loading").lazyload({effect : "fadeIn"});
});

