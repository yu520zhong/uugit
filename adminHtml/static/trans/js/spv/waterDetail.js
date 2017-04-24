$(document).ready(function($) {
    var i = 1;
    $(document).on("click","#addBtn",function() {
        var str = "";
        str +=  '<div class="row clearfix">'
                + '<div class="form_content">'
                + '<div id="dateDiv_' + i +'">'
                + '<div class="sign_left">'
                + '<select name="case_date" class="form-control" id="case_date_0">'
                + '<option value="" selected="selected">'
                    + '请选择'
                + '</option>'
                + '<option value="">'
                    + '签约日期'
                + '</option>'
                + '<option value="">'
                    + '过户日期'
                + '</option>'
                + '<option value="">'
                    + '领证日期'
                + '</option>'
                + '</select>'
                + '</div>'
                + '<div id="datepicker_0" class="input-group input-medium date-picker input-daterange pull-left" data-date-format="yyyy-mm-dd">'
                + '<input id="dtBegin_0" name="dtBegin" class="form-control" style="font-size: 13px; width: 159px; border-radius: 0px;" type="text" value="" placeholder="起始日期">'
                + '<span class="input-group-addon">'
                + '到'
                + '</span>'
                + '<input id="dtEnd_0" name="dtEnd" class="form-control" style="font-size: 13px; width: 159px; border-radius: 0px;" type="text" value="" placeholder="结束日期">'
                + '<span class="input-group-addon remove_btn"><a href="javascript:void(0);"><font>删除</font></a></span>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
        $(this).parents(".row").before(str);
        i ++;
    });
    $(document).on("click",".remove_btn",function() {
        $(this).parents(".row").remove();
    })
});