
function getAtr(i){
    $str='';
    $str+="<tr>";
    $str+=" <td><input class='table-input-one' type='text' value='请输入姓名' /></td>";
    $str+="<td><p><input class='table_input' type='text' value='请输入银行卡号' /></p><p><input class='table_input' type='text' value='请输入银行名称' /></p></td>";
    $str+="<td><input style='border:none;width: 50px;' type='text' value='金额' />万元</td>";
    $str+="<td><input class='table_input' type='text' value='请输入编号' /></td>";
    $str+="<td><select name='' class='table-select'><option value=''>请选择</option><option value=''>转账凭证</option></select></td>";
    $str+= "<td>"
       $str+= "<p>"
           $str+= "<button type='button' class='btn btn-sm btn-default clickMe'>凭证3<i class='icon iconfont icon_x'>&#xe60a;</i></button>"
           $str+= "<span style='display:none;'><img class='sourceimg' src='../static/trans/img/11.png'></span>"
       $str+= "</p>"
       $str+= "<p>"
            $str+= "<button type='button' class='btn btn-sm btn-default clickMe' >凭证4<i class='icon iconfont icon_x'>&#xe60a;</i></button>"
           $str+= "<span style='display:none;'><img class='sourceimg' src='../static/trans/img/12.png'></span>"
       $str+= "</p>"
       $str+= "<span class='btn_file'>"
           $str+= "<input type='file' class='file' />"
           $str+= "<i class='iconfont icon-file'>&#xe641;</i>"
       $str+= "</span>"
    $str+= "</td>"
    $str+="<td>2016-10-25 17:30</td>"
    $str+="<td class='btn-height'><a href='javascript:void(0)'  onClick='getAtr(this)'>添加</a><a onClick='getDel(this)' class='grey' href='javascript:void(0)'>删除</a></td>";
    $str+="</tr>";
    $("#addTr").append($str);
    $("#sum").html(sum);


}

function getDel(k){
    $(k).parents('tr').remove();
    $("#sum").html(sum);
}


