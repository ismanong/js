var sid='0006';var apps={};function checkKeys(id,aid,str){if(typeof apps!="object"||typeof apps.all!="object"){return 0}var appid=0;var p=0;var name="";if(apps.all.hasOwnProperty(aid)){p=1;appid=aid}if(!isNaN(id)&&appid==0){if(apps.bind.hasOwnProperty(id)){p=1;appid=apps.bind[id]}}if(appid==0){p=0;var arr_appid_m_p=Array();var arr_appid_m_l=Array();var strs=str.split(",");for(var i=0;i<strs.length;i++){if(apps.keys.hasOwnProperty(strs[i])){arr_appid_m_p[arr_appid_m_p.length]=apps.keys[strs[i]]}else{var ii;for(ii in apps.keys){if(is_exists(strs[i],ii)==1){name=ii;arr_appid_m_l[arr_appid_m_l.length]=apps.keys[ii]}}}}appid=get_matchAppid(arr_appid_m_p);if(appid<=0){appid=get_matchAppid(arr_appid_m_l)}}return gainTn(appid,name,p)}function get_matchAppid(arr){var appid=0;for(var i=0;i<arr.length;i++){if(apps.qz.hasOwnProperty(arr[i])){appid=arr[i];if(apps.qz[arr[i]]==1){break}}}return appid}function gainTn(id,name,p){var tns=[];var data={};if(id==0){data={"tn":[],name:"","p":2};return data};for(var i=0;i<apps.all[id].length;i++){tns[i]={"name":apps.tn[apps.all[id][i]],"address":apps.xz+sid+"/"+id+"/"+apps.all[id][i]}}data.tn=tns;data.p=p;data.name=name;return data}function is_exists(str1,str2){if(str1.indexOf(str2)>=0||str2.indexOf(str1)>=0){return 1}else{return 0}};