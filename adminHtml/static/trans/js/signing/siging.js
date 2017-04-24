$(function () {
    //选择切换
    $(".choices span").click(function() {
        if($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
    });

    function show(){
        var mydate = new Date();
        var str = "" + mydate.getFullYear() + "-";
        str += "0" + (mydate.getMonth()+1) + "-";
        str += mydate.getDate();
        return str;
    }
    $(".datatime").val(show());

    //今天明天选择
    function Appendzero (obj) {
        if (obj < 10) return "0" + obj; else return obj;
    }
    function getDateWeek (x) {
        var now = new Date();
        var year = now.getFullYear ();//获取四位数年数
        var month = now.getMonth () + 1;
        var date = now.getDate () + x;
        var s = year + "-" + Appendzero (month) + "-" + Appendzero (date) ;
        return s;
    }
    $("#today").click(function(){
        $(".datatime").val(getDateWeek(0));
    });
    $("#tommrow").click(function(){
        $(".datatime").val(getDateWeek(1));
    });



})