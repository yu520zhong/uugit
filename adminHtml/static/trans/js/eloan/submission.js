$(function(){
    //select change 类型变化
    $(".toggle_icon").hide();

    $("#goodsType").change(function () {
        var goods = $("#goodsType option:selected").text();
        if(goods == "请选择") {
            $(".goods_one").hide();
            $(".goods_two").hide();
        }
        if(goods == "类型1") {
            $(".goods_one").show();
            $(".goods_two").hide();
        }
        if(goods == "类型2") {
            $(".goods_one").hide();
            $(".goods_two").show();
        }
    });
})