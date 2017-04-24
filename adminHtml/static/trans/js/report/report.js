/*头部固定滚动*/
jQuery(function($) {
    $(document).ready( function() {
       $('.stickup-nav-bar').stickUp({
          parts: {
            0:'reportOne',
            1:'reportTwo',
            2:'reportThree',
            3:'reportFour',
            4:'reportFive',
            5:'reportSix',
          },
          itemClass: 'menuItem',
          itemHover: 'active',
          marginTop: 'auto'
        });

    });
});
function getAtr(i){
var j = 1;

  $str='';
  $str+="<div class='line' id='#div'+j'><div class='form_content'>";
  $str+="<label class='control-label sign_left_small'>共有人</label>";
  $str+="<input type='text' class='select_control' style='width: 105px;margin-left:4px;'></div>";
  $str+="<div class='form_content'><label class='control-label sign_left_small'>邮政编码</label>";
  $str+="<input type='text' class='select_control' style='width: 105px;margin-left:4px;'></div>";
  $str+="<div class='form_content'><label class='control-label sign_left_small'>房产地址</label><input type='text' class='select_control' value='' style='width: 255px;margin-left:4px;'></div>";
  $str+="<a href='javascript:void(0)' class='btn btn-default' onclick='getDell(this)'>删除</a>";
  $("#addLine").before($str);
}
function getDel(k){
    $(k).parent().parent().remove();
}
function getDell(k){
    $(k).parent().remove();
}

