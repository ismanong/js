//=================ͶƱ===============================================
var isVote=false;  //�Ƿ��Ѿ�Ͷ��Ʊ��
//ͶƱBEGIN
function sEval(softid,num,din,cai,Tpye)
{
	if(isVote)
	{
		//alert('���Ѿ�Ͷ��Ʊ��,�벻Ҫ�ظ�ͶƱ,��л����֧��!!')
		//return
	}
	var Temp="Action=0&softid="+ escape(softid) + "&num=" +escape(num)+"&type="+ Tpye; //���͵�����
	
	var RequestFunction=function() {  //���ش�����
		if (http_request.readyState == 4) { // �ж϶���״̬
            if (http_request.status == 200) { // ��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ
					ReadMark(softid,din,cai,Tpye);
				 
				  alert('ͶƱ�ɹ�!!');
            } else { //ҳ�治����
			      
                // alert("���������ҳ�����쳣��");
            }
        }
	 };
	send_request("../ajax.asp",Temp,RequestFunction,false);
	isVote = true;
	//alert(Temp);
}
//ͶƱEnd

//��ȡͶƱ���� Begin
function ReadMark(softid,din,cai,Tpye)
{	
	var Temp="Action=1&softid="+ escape(softid)+"&type="+ Tpye; //���͵�����
	 
	var objTemp=document.getElementById(din).getElementsByTagName("div")[1].getElementsByTagName("div");
	
	var AbetImg=objTemp[0].getElementsByTagName("span")[0];
	var AbetNum=objTemp[1];
	
		 objTemp=document.getElementById(cai).getElementsByTagName("div")[1].getElementsByTagName("div");
	var ArgueImg=objTemp[0].getElementsByTagName("span")[0];;
	var ArgueNum=objTemp[1];
	
	var RequestFunction=function() {  //���ش�����
		if (http_request.readyState == 4) { // �ж϶���״̬
            if (http_request.status == 200) { // ��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ
				var TempText=http_request.responseText;
 
				var	 TempText_1=TempText.split("|")[0];
				var  TempText_2=TempText.split("|")[1];
					
				var TempText_3= parseInt(TempText_1) + parseInt(TempText_2);
				if (TempText_3 == 0)
				{
					var a =50;
					var b=50;
				}else
				{
				var a =parseInt(parseInt(TempText_1) /TempText_3*100)
				var b= (100 - parseInt(parseInt(TempText_1) /TempText_3*100))
				}
    
				    AbetNum.innerHTML  = "%" + a +"(" + TempText_1 +")";
					ArgueNum.innerText = "%" +b +"(" + TempText_2 +")";;

					AbetImg.style.width = a+"%";
					ArgueImg.style.width = b+"%" ;
                
            } else { //ҳ�治����
                // alert("���������ҳ�����쳣");
            }
        }
	 };
	 
	 send_request("../ajax.asp",Temp,RequestFunction,false);
	//AbetNum.innerText="5645";	
}
//��ȡͶƱ���� End


//==========ͶƱ�ڶ��ַ��� Begin=================
function ngsEval(id,goodid,badid,verid,type)
{
	var objgood = $(goodid);
	var objbad = $(badid);

   
	 objgood.css({cursor:"pointer"});
	
	 ngSendEval(id,goodid,badid,verid,0,type);
	 
	objgood.click(function (){ ngSendEval(id,goodid,badid,verid,1,type) ; isVote=true; });
	objbad.click(function (){ ngSendEval(id,goodid,badid,verid,2,type); isVote=true; });
}


//ͶƱ
function ngSendEval(id,goodid,badid,verid,num,type)
{
   if(isVote && num>0)
	{
		 alert('���Ѿ�Ͷ��Ʊ��,�벻Ҫ�ظ�ͶƱ,��л����֧��!!')
		 return true;
	}
	
 var url="action=3&id="+id+"&num="+num+"&type="+type;
 
  $.ajax({
   type: "POST",
   url: "/ajax.asp",
   data: url,
   success: function(msg){
      ListEval(goodid,badid,verid,msg);
   }
}); 
}

function ListEval(goodid,badid,verid,msg){
	var objgoodimg = $(goodid + " img");
	var objgoodem = $(goodid + " em");

	var objgoodb = $(goodid + " b");
 
	
	var objbadimg = $(badid + " img");
	var objbadem = $(badid + " em");

	var objbadb = $(badid + " b");
	
	
	var objver = $(verid);
	
	var dataObj=eval("("+msg+")");//ת��Ϊjson����
	
	
	objgoodimg.eq(0).animate({width: "1%"},200);
	objgoodimg.eq(0).animate({width: +dataObj.Percentage[0]+ "%"},"slow");
	
	objbadimg.eq(0).animate({width: "1%"},200);
	objbadimg.eq(0).animate({width: +dataObj.Percentage[1]+ "%"},"slow");
	
	objgoodem.eq(0).html(dataObj.Percentage[0]+ "%" + "("+ dataObj.Num[0] +")");
	objbadem.eq(0).html(dataObj.Percentage[1]+ "%"+ "("+ dataObj.Num[1] +")");
	
	objgoodb.eq(0).html(dataObj.Num[0] );
	objbadb.eq(0).html(dataObj.Num[1] );
	
	objver.html(dataObj.Very[0])	
	 
	
}
//==========ͶƱ�ڶ��ַ��� End=================
