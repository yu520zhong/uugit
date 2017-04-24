$(document).ready(function () {
	//日历控件
    $('.input-daterange').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    });

    //获取时间，月日补零
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
       $(".datatime").val(getDateWeek(0));


	//产品需求点击选择效果
	$(".goodstyle span").click(function() {
        if($(this).hasClass("selected-mark")) {
            $(this).removeClass("selected-mark");
        }
        else {
            $(this).addClass("selected-mark");
        }

    });

	//点击是否隐藏出现内容
	$(".warncon, .sourcebox").hide();
    $("#Radio1").on("click",function() {
        $(".warncon").show();
    });
    $("#Radio2").on("click",function() {
        $(".warncon").hide();
    });

    $("#UserMark").on("click",function() {
        $(".sourcebox").hide();
         $(".marinfo,.alerted").show();
    });
    $("#NouserMark").on("click",function() {
        $(".sourcebox").show();
        $(".marinfo").hide();
    });

    $(".chackTextarea").autoTextarea({
        maxHeight:220,
    });

    // jqGrid表格，数据为模拟
    var mydata = [
        { name: "此表以实际线上为准", note: "此表内容以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表内容以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表内容以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表内容以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表以实际线上为准"} ,
        { name: "此表以实际线上为准", note: "此表以实际线上为准"} ,

    ];

    $("#table_list_2").jqGrid({
        data: mydata,
        datatype: "local",
        height: 182,
        autowidth: true,
        shrinkToFit: true,
        rowNum: 20,

        rowList: [10, 20, 30],
        multiselect: true,
        onSelectRow: function (rowId, status, e) {
        var rowIds = jQuery("#table1").jqGrid('getGridParam', 'selarrrow');
        },
        colNames:['此表以实际在线页面为准','此表以实际在线页面为准'],
        colModel:[
            {name:'name',index:'name', editable: true, width:100,classes: 'add-jqgrid'},
            {name:'note',index:'note', editable: true, width:100, sortable:false,classes: 'add-jqgrid'}
        ],

    });

    $("#table_list_2").jqGrid('navGrid', '#pager_list_2',
        {edit: true, add: true, del: true, search: true},
        {height: 200, reloadAfterSubmit: true}
    );

    $(window).bind('resize', function () {
        var width = $('.jqGrid_wrapper').width();
        $('#table_list_2').setGridWidth(width);
    });

    // -----------------------------------jqGrid表格，数据为模拟
    var mydata2 = [
        { tax: "此表以实际在线页面为准",amount: "此表以实际在线页面为准",name: "此表以实际在线页面为准",note: "此表以实际在线页面为准", } ,
        { tax: "此表以实际在线页面为准",amount: "此表以实际在线页面为准",name: "此表以实际在线页面为准",note: "此表以实际在线页面为准", } ,
        { tax: "此表以实际在线页面为准",amount: "此表以实际在线页面为准",name: "此表以实际在线页面为准",note: "此表以实际在线页面为准", } ,
        { tax: "此表以实际在线页面为准",amount: "此表以实际在线页面为准",name: "此表以实际在线页面为准",note: "此表以实际在线页面为准", } ,
        { tax: "此表以实际在线页面为准",amount: "此表以实际在线页面为准",name: "此表以实际在线页面为准",note: "此表以实际在线页面为准", } ,
        { tax: "此表以实际在线页面为准",amount: "此表以实际在线页面为准",name: "此表以实际在线页面为准",note: "此表以实际在线页面为准", } ,
        { tax: "此表以实际在线页面为准",amount: "此表以实际在线页面为准",name: "此表以实际在线页面为准",note: "此表以实际在线页面为准", } ,
    ];

    $("#table_list_3").jqGrid({
        data: mydata2,
        datatype: "local",
        height: 182,
        autowidth: true,
        shrinkToFit: true,
        rowNum: 20,

        rowList: [10, 20, 30],
        colNames:['在线为准','在线为准','在线为准','在线为准'],
        colModel:[
            {name:'tax',index:'tax', editable: true, width:80, classes: 'add-jqgrid'},
            {name:'amount', index: 'amount', editable: true,width: 80,classes: 'add-jqgrid'},
            {name:'name',index:'name', editable: true, width:100,classes: 'add-jqgrid'},
            {name:'note',index:'note', editable: true, width:100,classes: 'add-jqgrid'}

        ],

    });

    $("#table_list_3").jqGrid('navGrid', '#pager_list_2',
        {edit: true, add: true, del: true, search: true},
        {height: 200, reloadAfterSubmit: true}
    );

    $(window).bind('resize', function () {
        var width = $('.jqGrid_wrapper').width();
        $('#table_list_3').setGridWidth(width);
    });





});


 //星星点击
    $(".starmack").click(function () {
        var obj = $(this);
        var info = $(this).find("span");
        var mark = $(this).find("i");
        var status = mark.attr("status");
        if(obj.hasClass('star-bgyellow')){
            obj.addClass('star-bggrey').removeClass('star-bgyellow');
            mark.html('&#xe644;');
            info.text("未标星号");
            status = 1;
            console.log(status);
        } else {
            obj.addClass('star-bgyellow').removeClass('star-bggrey');
            mark.html('&#xe63e;');
            info.text("已标星号");
            status = 0;
            console.log(status);
        }
    });

    $(".starmark").click(function () {
        var obj = $(this);
        var info = $(this).find("span");
        var mark = $(this).find("i");
        var status = mark.attr("status");
        if(obj.hasClass('star-bgyellow')){
            obj.addClass('star-bggrey').removeClass('star-bgyellow');
            mark.html('&#xe644;');
            info.text("未标星号");
            status = 1;
            console.log(status);
        } else {
            obj.addClass('star-bgyellow').removeClass('star-bggrey');
            mark.html('&#xe63e;');
            info.text("已标星号");
            status = 0;
            console.log(status);
        }
    });
    $(".star").click(function () {
        var obj = $(this);
        var status = obj.attr("status");
        if(obj.hasClass('star-grey')){
            obj.addClass('star-yellow').removeClass('star-grey').html('&#xe63e;');
            status = 1;
            console.log(status);
        } else {
            obj.addClass('star-grey').removeClass('star-yellow').html('&#xe644;');
            status = 0;
            console.log(status);
        }
    });

//添加删除上下家
var divIndex = 1;
function getAtr(obj){
    $str='';
    divIndex++;
    $str += '<div class="line" id="downHm'+divIndex+'">'
            + '<div class="form_content">'
            + '<label class="control-label sign_left_small mar24">姓名</label>'
            + '<input class=" input_type yuanwid" placeholder="" value="" >'
            + '</div>'
            + '<div class="form_content">'
            + '<label class="control-label sign_left_small mar24">电话</label>'
            + '<input class=" input_type yuanwid" placeholder="" value="" >'
            + '</div>'
            + '<a href="javascript:void(0)" class="add_space" onclick="getDel(this)">删除</a>'
            + '</div>'
    $("#topHome").append($str);
}

function getDel(k){
    $(k).parents('.line').remove();
}