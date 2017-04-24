$(document).ready(function(){
    $("#range_1").ionRangeSlider({
        type: 'single',//设置类型
        values : [ "一月", "二月", "三月", "四月", "五月", "六月",
            "七月", "八月", "九月", "十月", "十一月", "十二月"
        ],
        dateType : 'single',
        hasGrid : true
    });

});