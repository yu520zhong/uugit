hide();
var x = 1;
function getAtr(i){
    $str='';
    $str+= '<div class="line" status="mark" id="addTr_' + x + '">'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">物品类别</label>'
        + '<select name="" class="select_control sign_right_one mark" onclick="change(this)">'
        + '<option value="0">请选择</option>'
        + '<option value="1">身份证</option>'
        + '<option value="2">银行卡</option>'
        + '</select>'
        + '</div>'
        + '<a href="javascript:void(0)" class="add_space" onclick="getAtr(this)">添加</a><a href="javascript:void(0)" class="add_space" onclick="getDel(this)">删除</a>'
        + '<div class="entry">'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">姓名</label>'
        + '<input type="text" class="select_control sign_right_one">'
        + '</div>'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '身份证号'
        + '</label>'
        + '<input type="text" class="select_control teamcode">'
        + '</div>'
        + '</div>'
        + '<div class="entry">'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '户名'
        + '</label>'
        + '<input type="text" class="select_control sign_right_one">'
        + '</div>'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '银行卡号'
        + '</label>'
        + '<input type="text" class="select_control teamcode">'
        + '</div>'
        +  '</div>'
        + '</div>'
    $(".form_list").append($str);
    x++;
}
function getAdd(i){
    $str='';
    $str+= '<div class="line" status="mark" id="addTr_' + x + '">'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">物品类别</label>'
        + '<select name="" class="select_control sign_right_one mark" onclick="change(this)">'
        + '<option value="0">请选择</option>'
        + '<option value="1">房地产权证</option>'
        + '<option value="2">他项权利证</option>'
        + '</select>'
        + '</div>'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '物品名称'
        + '</label>'
        + '<input type="text" placeholder="" class="select_control teamcode">'
        + '</div>'
        + '<a href="javascript:void(0)" class="add_space" onclick="getAdd(this)">添加</a><a href="javascript:void(0)" class="add_space" onclick="getDel(this)">删除</a>'
        + '<div class="entry">'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">产权编号</label>'
        + '<input type="text" class="select_control sign_right_one">'
        + '</div>'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '产权人姓名'
        + '</label>'
        + '<input type="text" class="select_control teamcode">'
        + '</div>'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '房屋地址'
        + '</label>'
        + '<input type="text" class="select_control teamcode">'
        + '</div>'
        + '</div>'
        + '<div class="entry">'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '他证编号'
        + '</label>'
        + '<input type="text" class="select_control sign_right_one">'
        + '</div>'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '他项权利人'
        + '</label>'
        + '<input type="text" class="select_control teamcode">'
        + '</div>'
        + '<div class="form_content">'
        + '<label class="control-label sign_left_small mar24">'
            + '房屋地址'
        + '</label>'
        + '<input type="text" class="select_control teamcode">'
        + '</div>'
        +  '</div>'
        + '</div>'
    $(".form_list").append($str);
    x++;
}

function getDel(k){
    var status = $(k).parents('.line').attr("status");
    console.log(status);
    if(text = "mark" ) {
         $(k).parents('.line').hide();
    }
}

function change(boj) {
    var $entry = $(boj).parents(".line").find(".entry");
    var $mark = $(boj).val();
    if ($mark == 0) {
      $entry.hide();
    }
    if ($mark == 1) {
      $entry.eq(0).show();
      $entry.eq(1).hide();
    }
    if ($mark == 2) {
      $entry.eq(1).show();
      $entry.eq(0).hide();
    }
}
function hide() {
    $(".entry").hide();
}


