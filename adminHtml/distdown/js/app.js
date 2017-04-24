$(function () {
    //判断访问终端
    var browser={
        versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                safari: u.indexOf('Safari') > -1,
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
    }

    //判断内核

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //ios端
        //模拟判断是否safari浏览器
        var result = browser.versions.webKit&&browser.versions.safari&&(!browser.versions.qq);
        if(!result){
            $("#andrIcon").click(function() {
                alert('此下载与您的手机系统不符！');
            });
            $("#iosIcon").click(function() {
                 $("#showModal").show();
            });
        } else {
            $("#andrIcon").click(function() {
                alert('此下载与您的手机系统不符！');
            });
            $("#iosIcon").click(function() {
                window.location.href = 'itms-services://?action=download-manifest&url=https://git.oschina.net/hujunnan/AppInHouse/raw/master/YcParApp/manifest.plist';
            });
        }
    } else if (/(Android)/i.test(navigator.userAgent)) {
        //安卓端
        if(browser.versions.weixin){
            $("#andrIcon").click(function() {
                alert("请使用浏览器打开！");
            });
            $("#iosIcon").click(function() {
                alert("此下载与您的手机系统不符！");
            });
        } else {
            $("#andrIcon").click(function() {
            window.location.href = 'https://git.oschina.net/hujunnan/AppInHouse/raw/master/YcParApp/app-release.apk';
            });
            $("#iosIcon").click(function() {
                alert("此下载与您的手机系统不符！");
            });
        }

    } else {
        //pc端
        if(browser.versions.webKit){
            $("#andrIcon").click(function() {
                 $("#showModal").show();
            });
            $("#iosIcon").click(function() {
                 $("#showModal").show();
            });
        }
    };
    $("#showModal").click(function (e) {
        $(this).hide();
    });
});