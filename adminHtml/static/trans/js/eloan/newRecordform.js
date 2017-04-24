
    //添加删除上下家
    function getAtr(obj){
        var str='';
        str +=  '<div class="line">'
            +   '<div class="form_content">'
            +   '<label class="control-label sign_left_small mar24">'
            +   '上家姓名'
            +   '</label>'
            +   '<input type="text" class="select_control sign_right_one">'
            +   ' </div>'
            +   '<div class="form_content">'
            +   '<label class="control-label sign_left_small mar24">'
            +   '上家电话'
            +   '</label>'
            +   '<input type="text" class="select_control sign_right_one" value="">'
            +   '</div>'
            +   '<a href="javascript:void(0)" class="add_space" onclick="getDel(this)">删除</a>'
            +   '</div>';
        $("#topHome").after(str);
    }

    function getNext(obj){
        var str='';
        str +=  '<div class="line">'
            +   '<div class="form_content">'
            +   '<label class="control-label sign_left_small mar24">'
            +   '下家姓名'
            +   '</label>'
            +   '<input type="text" class="select_control sign_right_one">'
            +   ' </div>'
            +   '<div class="form_content">'
            +   '<label class="control-label sign_left_small mar24">'
            +   '下家电话'
            +   '</label>'
            +   '<input type="text" class="select_control sign_right_one" value="">'
            +   '</div>'
            +   '<a href="javascript:void(0)" class="add_space" onclick="getDel(this)">删除</a>'
            +   '</div>';
        $("#downHome").after(str);
    }
    function getDel(k){
        $(k).parents('.line').remove();
    }

