$(function() {
     //点击变换颜色&&默认当前月份
    var $month_list = $(".calendar-month span");
    $month_list.on("click",function() {
        $(this).addClass("select-blue").siblings().removeClass('select-blue');
    });
    var monthnow = function (){
        var now   = new Date();
        var month = now.getMonth();
        return month;
    }
    var month = monthnow();
    for (var i=0; i<$month_list.length; i++) {
        if(i == month) {
            $month_list.eq(i).addClass("select-blue");
        }
        return false;
    }
})