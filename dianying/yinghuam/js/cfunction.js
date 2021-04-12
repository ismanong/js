$(function(){
    var cur_status = "less";
    var charNumbers = $(".txtDesc").text().length; //������
    var limit = 50; //��ʾ����
    if (charNumbers > limit) {
        var orgText = $(".txtDesc").text(); //ԭʼ�ı�
        var orgHeight = $(".txtDesc").height(); //ԭʼ�߶�
        var showText = orgText.substring(0, limit)+'...'; //������ʾ���ı�
        $(".txtDesc").html(showText);
        var contentHeight = $(".txtDesc").height(); //��ȡ���ݺ�ĸ߶�
        $(".openBtn,.txtDesc").click(function() {
            if (cur_status == "less") {
                $(".txtDesc").height(contentHeight).text(orgText).animate({
                    height: orgHeight
                });
                $(".openBtn").html('<i class="am-icon-chevron-up"></i>');
                cur_status = "more";
            } else {
                $(".txtDesc").height(orgHeight).text(showText).animate({
                    height: contentHeight
                });
                $(".openBtn").html('<i class="am-icon-chevron-down"></i>');
                cur_status = "less";
            }
        });
    } else {
        $(".openBtn").css("background","#fff").css("height","10px");
    }
	hideinit();
	$('.showmore').click(function(){
		$('.am-active .mvlist').children("li:gt(18)").show();
		$(this).remove();
	});
});

function hideinit(){
	$('.mvlist').each(function(){
		if($(this).find('li').length > 19){
			hidelist(this);
		}
		//console.log($(this).find('li').length);
	})
	
}
function hidelist(obj){
		$(obj).children("li:gt(18)").hide();
		$(obj).append('<li class="showmore">...</li>');
}