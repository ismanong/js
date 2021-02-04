var ReadSet = {
    bgcolor: ["#E9FAFF", "#efefef", "#ffffff"],
    bgcname: ["绿雅天地", "灰色世界", "经典白色"],
    bgcvalue: "#FFFFFF", //默认背景
    fontsize: ["14px", "18px", "26px"],
    fontsname: ["小", "默认", "大"],
    fontsvalue: "18px", //默认字号
    pageid: "apage",
    textid: "atext",
    contentid: "ss-reader-main", //背景
    rtextid: "content", //正文字号
    SetBgcolor: function(color) {
        if (document.getElementById(this.pageid)) document.getElementById(this.pageid).style.backgroundColor = color;
        else document.getElementById(this.contentid).style.backgroundColor = color; if (this.bgcvalue != color) this.SetCookies("bgcolor", color);
        this.bgcvalue = color;
    },
    SetFontsize: function(size) {
        document.getElementById(this.rtextid).style.fontSize = size;
        if (this.fontsvalue != size) this.SetCookies("fontsize", size);
        this.fontsvalue = size;
    },
    LoadCSS: function() {
        var style = "";
        style += ".ss-readSet{padding:3px;clear:both;line-height:30px;text-align:center;margin:auto;}\n";
        style += ".ss-readSet .ss-rc{color:#333333;padding-left:20px;}\n";
        style += ".ss-readSet a.ra{border:1px solid #cccccc;display:inline-block;width:16px;height:16px;margin-left:6px;overflow:hidden;vertical-align: middle;}\n";
        style += ".ss-readSet span{float:unset!important;}\n";
        style += ".ss-readSet .ss-rt{padding:0px 5px;}\n";
        if (document.createStyleSheet) {
            var sheet = document.createStyleSheet();
            sheet.cssText = style;
        } else {
            var sheet = document.createElement("style");
            sheet.type = "text/css";
            sheet.innerHTML = style;
            document.getElementsByTagName("HEAD").item(0).appendChild(sheet);
        }
    },
    Show: function() {
        var output;
        output = '<div class="ss-readSet">';
        output += '<span class="ss-rc">背景色：</span>';
        for (i = 0; i < this.bgcolor.length; i++) {
            output += '<a style="background-color: ' + this.bgcolor[i] + '" class="ra" title="' + this.bgcname[i] + '" onclick="ReadSet.SetBgcolor(\'' + this.bgcolor[i] + '\')" href="javascript:;"></a>';
        }
        output += '<span class="ss-rc">字体：</span><span class="ss-rf">[';
        for (i = 0; i < this.fontsize.length; i++) {
            output += '<a class="ss-rt" onclick="ReadSet.SetFontsize(\'' + this.fontsize[i] + '\')" href="javascript:;">' + this.fontsname[i] + '</a>';
        }
        output += ']</span>';
        output += '<div style="font-size:0px;clear:both;"></div></div>';
        document.write(output);
    },
    SetCookies: function(cookieName, cookieValue, expirehours) {
        var today = new Date();
        var expire = new Date();
        expire.setTime(today.getTime() + 3600000 * 356 * 24);
        document.cookie = cookieName + '=' + escape(cookieValue) + ';expires=' + expire.toGMTString() + '; path=/';
    },
    ReadCookies: function(cookieName) {
        var theCookie = '' + document.cookie;
        var ind = theCookie.indexOf(cookieName);
        if (ind == -1 || cookieName == '') return '';
        var ind1 = theCookie.indexOf(';', ind);
        if (ind1 == -1) ind1 = theCookie.length;
        return unescape(theCookie.substring(ind + cookieName.length + 1, ind1));
    },
    SaveSet: function() {
        this.SetCookies("bgcolor", this.bgcvalue);
        this.SetCookies("fontcolor", this.fontcvalue);
        this.SetCookies("fontsize", this.fontsvalue);
    },
    LoadSet: function() {
        tmpstr = this.ReadCookies("bgcolor");
        if (tmpstr != "") this.bgcvalue = tmpstr;
        this.SetBgcolor(this.bgcvalue);
        tmpstr = this.ReadCookies("fontcolor");
        if (tmpstr != "") this.fontcvalue = tmpstr;
        // this.SetFontcolor(this.fontcvalue);
        tmpstr = this.ReadCookies("fontsize");
        if (tmpstr != "") this.fontsvalue = tmpstr;
        this.SetFontsize(this.fontsvalue);
    }
}
ReadSet.LoadCSS();
ReadSet.Show();

function LoadReadSet() {
    ReadSet.LoadSet();
}
if (window.attachEvent) {
    window.attachEvent('onload', LoadReadSet);
} else {
    window.addEventListener('load', LoadReadSet, false);
}