$(function() {
	$("#productType").hide();
	$("#more").click(function() {
		$("#productType").toggle();
	});
})

// select控件
var config = {
	'.chosen-select' : {},
	'.chosen-select-deselect' : {
		allow_single_deselect : true
	},
	'.chosen-select-no-single' : {
		disable_search_threshold : 10
	},
	'.chosen-select-no-results' : {
		no_results_text : 'Oops, nothing found!'
	},
	'.chosen-select-width' : {
		width : "95%"
	}
};


// 查询
$('#searchButton').click(function() {
	searchMethod();
});
// 添加日期查询条件
var divIndex = 1;
var count = $('#case_date_0 option:last').index();
function addDateDiv() {

	var txt = '<div class="row clearfix add_group"><div id="dateDiv_' + divIndex + '" class="input-group">';
	txt += '<div class="add_sign">';
	txt += '    <select id="case_date_'
			+ divIndex
			+ '" class="form-control sign_radius" name="case_date" >';
	txt += $("#case_date_0").html()
	txt += '</select></div>';
	txt += '<div id="datepicker_'
			+ divIndex
			+ '" class="input-group input-medium date-picker input-daterange" data-date-format="yyyy-mm-dd">';
	txt += '    <input id="dtBegin_'
			+ divIndex
			+ '" name="dtBegin" class="form-control date_sign" type="text" value="" placeholder="起始日期"> ';
	txt += '    <span class="input-group-addon">到</span>';
	txt += '    <input id="dtEnd_'
			+ divIndex
			+ '" name="dtEnd" class="form-control date_sign" type="text" value="" placeholder="结束日期"/>';
	txt += '<span class="input-group-addon"><a href="javascript:removeDateDiv('
			+ divIndex + ');"><font>删除</font></a></span>';
	txt += '</div></div></div>';
	// alert(txt);
	$(".date-info").after(txt);
	// 日期控件
	$('#datepicker_' + divIndex).datepicker({
		format : 'yyyy-mm-dd',
		weekStart : 1,
		autoclose : true,
		todayBtn : 'linked',
		language : 'zh-CN'
	});

	divIndex++;
}

// 查看未被选择的日期类型
function findFirstNoCheckVal() {

	var onUseArray = new Array();
	if (divIndex > count)
		return 0;
	for (var r = 0; r < divIndex; r++) {
		var onUse = $('#case_date_' + r + ' option:selected').index();
		onUseArray.push(onUse);

	}
	for (var s = 0; s < count; s++) {
		var onUseFlag = false;
		for (var m = 0; m < onUseArray.length; m++) {
			if (s == onUseArray[m]) {
				onUseFlag = true;
				break;
			}
		}
		if (!onUseFlag)
			return s;
	}
	return 0;
}
 //删除日期控件
function removeDateDiv(index) {
	$("#dateDiv_" + index).parent().remove();
}

 //查询
function searchMethod(page) {
	if(!page) {
		page = 1;
	}
	if (getSearchDateValues()) {
		var params = getParamsValue();
		params.page = page;
		params.rows = 12;
		params.queryId = "queryCastListItemList";
		// jqGrid reload
		/*$("#table_list_1").setGridParam({
			"postData" : params,
			"page":1
		}).trigger('reloadGrid');*/
		reloadGrid(params);
	} else {
		alert("请不要选择同样的日期类型！");
	}

};




function initpage(totalCount,pageSize,currentPage,records)
{
	if(totalCount>1500){
		totalCount = 1500;
	}
	var currentTotalstrong=$('#currentTotalPage').find('strong');
	if (totalCount<1 || pageSize<1 || currentPage<1)
	{
		$(currentTotalstrong).empty();
		$('#totalP').text(0);
		$("#pageBar").empty();
		return;
	}
	$(currentTotalstrong).empty();
	$(currentTotalstrong).text(currentPage+'/'+totalCount);
	$('#totalP').text(records);


	$("#pageBar").twbsPagination({
		totalPages:totalCount,
		visiblePages:9,
		startPage:currentPage,
		first:'<i class="icon-step-backward"></i>',
		prev:'<i class="icon-chevron-left"></i>',
		next:'<i class="icon-chevron-right"></i>',
		last:'<i class="icon-step-forward"></i>',
		showGoto:true,
		onPageClick: function (event, page) {
			 //console.log(page);
			searchMethod(page);
	    }
	});
}


function getParamsValue() {
	// 贷款需求选择
	var mortageType = $('#mortageService option:selected').val();
	if(mortageType==null || mortageType=='') {
		mortageType = -1;
	}
	// 案件类型
	var caseProperty = $('#caseProperty option:selected').val();
	// 服务阶段选择
	var status = $('#status option:selected').val();
	var yuCuiOriGrpId =  $('#yuCuiOriGrpId').val();
	// 全选情况
	if (caseProperty == '30003006')
		caseProperty = null;
	// 如果不是选择结案
	var isNotResearchCloseCase;
	if(caseProperty != '30003002') {
		isNotResearchCloseCase = "true";
	}
	if (status == '30001006')
		status = null;

	// 产品类型
	getCheckBoxValues("srvCode");

	// 客户姓名 物业地址 经纪人
	var inTextVal = $('#inTextVal').val();
	var hVal = $('#inTextVal').attr('hVal');
	var guestName = "";
	var agentName = "";
	var proName = "";
	var propertyAddr = "";
	var agentOrgName = "";
	// caseCode与ctmCode
	var caseCode =  "";
	var ctmCode = "";
	if (inTextVal != null && inTextVal.trim() != "") {
		var inTextType = $('#inTextType').val();
		if (inTextType == '0') {
			guestName = inTextVal.trim();
		} else if (inTextType == '1') {
			propertyAddr = inTextVal.trim();
		} else if (inTextType == '2') {
			agentName = inTextVal.trim();
		}else if (inTextType == '3') {
			agentOrgName = hVal.trim();
		}else if (inTextType == '4') {
			proName = hVal.trim();
		}else if (inTextType == '5') {
			caseCode = inTextVal.trim();
		}else if (inTextType == '6') {
			ctmCode = inTextVal.trim();
		}
	}

	//设置查询参数
	var params = {
		argu_mortageType : mortageType,
		search_caseCode : caseCode,
		search_ctmCode : ctmCode,
		search_caseProperty : caseProperty,
		search_status : status,
		argu_guestname : guestName,
		search_agentName :agentName,
		argu_proName : proName,
		argu_agentOrgName : agentOrgName,
		search_propertyAddr : propertyAddr,
		argu_srvCode1 : srvCode1,
		argu_srvCode2 : srvCode2,
		argu_srvCode3 : srvCode3,
		argu_srvCode4 : srvCode4,
		argu_srvCode5 : srvCode5,
		argu_srvCode6 : srvCode6,
		argu_srvCode7 : srvCode7,
		argu_srvCode8 : srvCode8,
		argu_srvCode9 : srvCode9,
		argu_srvCode11 : srvCode11,
		argu_srvCode12 : srvCode12,
		argu_srvCode13 : srvCode13,
		argu_srvCode14 : srvCode14,
		argu_srvCode15 : srvCode15,
		search_createTimeStart : createTimeStart,
		search_resDateStart : resDateStart,
		search_approveTimeStart : approveTimeStart,
		search_createTimeEnd : createTimeEnd,
		search_resDateEnd : resDateEnd,
		search_approveTimeEnd : approveTimeEnd,

		argu_realConTimeStart : realConTimeStart,
		argu_realConTimeEnd : realConTimeEnd,
		argu_realConTime : (realConTimeStart == null && realConTimeEnd == null ? null : true),

		argu_realHtTimeStart : realHtTimeStart,
		argu_realHtTimeEnd : realHtTimeEnd,
		argu_realHtTime : (realHtTimeStart == null && realHtTimeEnd == null ? null : true),

		argu_realPropertyGetTimeStart : realPropertyGetTimeStart,
		argu_realPropertyGetTimeEnd : realPropertyGetTimeEnd,
		argu_realPropertyGetTime : (realPropertyGetTimeStart == null && realPropertyGetTimeEnd == null ? null : true),

		argu_signDateStart : signDateStart,
		argu_signDateEnd : signDateEnd,
		argu_lendDateStart : lendDateStart,
		argu_lendDateEnd : lendDateEnd,
		argu_signlendDate : (signDateStart == null && signDateEnd == null && lendDateStart == null && lendDateEnd == null ? null : true),

		argu_guohuApproveTimeStart : guohuApproveTimeStart,
		argu_guohuApproveTimeEnd : guohuApproveTimeEnd,
		argu_guohuApproveTime : (guohuApproveTimeStart == null && guohuApproveTimeEnd == null ? null : true),

		argu_yuCuiOriGrpId : yuCuiOriGrpId,
		argu_isNotResearchCloseCase : isNotResearchCloseCase

	};
	return params;
}
// 日期类型
var createTimeStart, resDateStart, realHtTimeStart, realPropertyGetTimeStart, realConTimeStart, signDateStart, lendDateStart, approveTimeStart,guohuApproveTimeStart;
var createTimeEnd, resDateEnd, realHtTimeEnd, realPropertyGetTimeEnd, realConTimeEnd, signDateEnd, lendDateEnd, approveTimeEnd,guohuApproveTimeEnd;

// 日期控件取值
function getSearchDateValues() {
	createTimeStart = null;
	resDateStart = null;
	realHtTimeStart = null;
	realPropertyGetTimeStart = null;
	realConTimeStart = null;
	signDateStart = null;
	lendDateStart = null;
	approveTimeStart = null;
	createTimeEnd = null;
	resDateEnd = null;
	realHtTimeEnd = null;
	realPropertyGetTimeEnd = null;
	realConTimeEnd = null;
	signDateEnd = null;
	lendDateEnd = null;
	approveTimeEnd = null;
	guohuApproveTimeStart = null;
	guohuApproveTimeEnd = null;
	var codeStr = "";
	for (var r = 0; r < divIndex; r++) {
		var val = $('#case_date_' + r + ' option:selected').val();
		if (val == undefined)
			continue;
		var start = $('#dtBegin_' + r).val();
		var end = $('#dtEnd_' + r).val();
		if(end&&end!=''){
			end=end+' 23:59:59';
		}
		if (codeStr.indexOf(val) != -1)
			return false;
		codeStr += val;
		if (start != "") {
			if (val == '30005001') {
				createTimeStart = start;
			} else if (val == '30005002') {
				resDateStart = start;
			} else if (val == '30005003') {
				realConTimeStart = start;
			} else if (val == '30005004') {
				realHtTimeStart = start;
			} else if (val == '30005005') {
				realPropertyGetTimeStart = start;
			} else if (val == '30005006') {
				signDateStart = start;
			} else if (val == '30005007') {
				lendDateStart = start;
			} else if (val == '30005008') {
				approveTimeStart = start;
			} else if (val == '30005009') {
				guohuApproveTimeStart = start;
			}
		}
		if (end != "") {
			if (val == '30005001') {
				createTimeEnd = end;
			} else if (val == '30005002') {
				resDateEnd = end;
			} else if (val == '30005003') {
				realConTimeEnd = end;
			} else if (val == '30005004') {
				realHtTimeEnd = end;
			} else if (val == '30005005') {
				realPropertyGetTimeEnd = end;
			} else if (val == '30005006') {
				signDateEnd = end;
			} else if (val == '30005007') {
				lendDateEnd = end;
			} else if (val == '30005008') {
				approveTimeEnd = end;
			} else if (val == '30005009') {
				guohuApproveTimeEnd = end;
			}
		}
	}
	return true;
}

// 产品类型
var srvCode1;
var srvCode2;
var srvCode3;
var srvCode4;
var srvCode5;
var srvCode6;
var srvCode7;
var srvCode8;
var srvCode9;
var srvCode11;
var srvCode12;
var srvCode13;
var srvCode14;
var srvCode15;
function getCheckBoxValues(name) {
	srvCode1 = "";
	srvCode2 = "";
	srvCode3 = "";
	srvCode4 = "";
	srvCode5 = "";
	srvCode6 = "";
	srvCode7 = "";
	srvCode8 = "";
	srvCode9 = "";
	srvCode11 = "";
	srvCode12 = "";
	srvCode13 = "";
	srvCode14 = "";
	srvCode15 = "";
	//$("input[name=" + name + "].selected").each(function() {
	$("span[name='srvCode'].selected").each(function() {
		var val = $(this).attr('value');
		if (val == '30004001') {
			srvCode1 = val;
		} else if (val == '30004002') {
			srvCode2 = val;
		} else if (val == '30004003') {
			srvCode3 = val;
		} else if (val == '30004004') {
			srvCode4 = val;
		} else if (val == '30004005') {
			srvCode5 = val;
		} else if (val == '30004006') {
			srvCode6 = val;
		} else if (val == '30004007') {
			srvCode7 = val;
		} else if (val == '30004008') {
			srvCode8 = val;
		} else if (val == '30004009') {
			srvCode9 = val;
		} else if (val == '30004011') {
			srvCode11 = val;
		} else if (val == '30004012') {
			srvCode12 = val;
		} else if (val == '30004013') {
			srvCode13 = val;
		} else if (val == '30004014') {
			srvCode14 = val;
		} else if (val == '30004015') {
			srvCode15 = val;
		}
	});
}

// 清空表单
function cleanForm() {
	$("input[name='case_property'][value=30003006]").prop("checked", true);
	$("input[name='case_status'][value=30001006]").prop("checked", true);
	$("input[name='srvCode']").removeAttr("checked");
	$("input[name='dtBegin']").val("");
	$("input[name='dtEnd']").val("");
	$("#inTextVal").val("");
	checkAllItem();
}
//全选
function checkAllItem() {
		$(".excel_in").prop("checked", true);
		 $("#checkAll").hide();
		 $("#unCheckAll").show();
}
//反选
function unCheckAllItem() {
		$(".excel_in").removeAttr("checked");
		 $("#unCheckAll").hide();
		 $("#checkAll").show();

}
//show modal
function showExcelIn() {
	checkAllItem();
	$('#modal-form').modal("show");
}

//Excel显示列
var colNames = {
	30010001 : [ 'AGENT_NAME', 'AGENT_ORG', 'AGENT_FHJL', 'AGENT_QYJL',
		 			'AGENT_QYZJ','AGENT_QYDS','AGENT_QDORG' ],
	30010002 : [ 'OP_NAME', 'OP_CODE', 'OP_ORG', 'OP_MANAGER','OP_AS',
	             'OP_PARENT_ORG','SRV_STR','PROCESSOR_ID'],
	30010003 : [ 'PROPERTY_ADDR', 'SELLER', 'SELLER_PHONE', 'BUYER',
			'BUYER_PHONE' ],
	30010004 : 'CREATE_TIME',
	30010005 : 'RES_DATE',
	30010006 : 'CASE_PROPERTY',
	30010007 : 'STATUS',
	30010008 : 'AGENT_QDORG',
	30011001 : ['LOAN_REQ','MORT_TYPE2','LOAN_LOST_TYPE'],
	//30011009 : ,
	30011002 : [ 'MORT_TOTAL_AMOUNT', 'COM_AMOUNT', 'PRF_AMOUNT' ],
	30011003 : [ 'BANK_NAME', 'PARENT_BANK_NAME' ],
	30011004 : [ 'LOANER_NAME', 'IS_LOANER_ARRIVE' ],
	30011005 : 'EVA_NAME',
	30011006 : [ 'CUST_NAME', 'CUST_PHONE' ],
	30011007 : [ 'SIGN_DATE', 'APPR_DATE', 'LEND_DATE' ],
	30011008 : 'COM_DISCOUNT',
	30011010 : 'REC_LETTER_NO',
	30012001 : [ 'REAL_PRICE', 'CON_PRICE','CHECK_PRICE','UNIT_PRICE' ],
	30012002 : [ 'REAL_CON_TIME', 'TAX_TIME', 'PRICING_TIME', 'REAL_PLS_TIME',
			'REAL_HT_TIME', 'GUOHU_CREATE_TIME','GUOHU_COMMENT','REAL_PROPERTY_GET_TIME','CLOSE_TIME' ],
	30013001 : 'SPV_TYPE',
	30013002 : 'AMOUNT',
	30013003 : 'SIGN_TIME',
	30012003:['GUOHU_APPROVER','GUOHU_APPROVER_TIME']
};

function exportToExcel() {
	if (getSearchDateValues()) {
		var url = "/quickGrid/findPage?xlsx&";
		var ctx = $("#ctx").val();
		//excel导出列
		var displayColomn = new Array;
		displayColomn.push('CASE_CODE');
		displayColomn.push('CTM_CODE');
		$("input[name='basic_info_item']:checked").each(function() {
			var val = this.value;
			displayColomn.push(colNames[val]);
		});
		$("input[name='mortage_info_item']:checked").each(function() {
			var val = this.value;
			displayColomn.push(colNames[val]);
		});
		$("input[name='trade_info_item']:checked").each(function() {
			var val = this.value;
			displayColomn.push(colNames[val]);
		});
		$("input[name='fund_info_item']:checked").each(function() {
			var val = this.value;
			displayColomn.push(colNames[val]);
		});
		displayColomn.push('EVAL_FEE');
		displayColomn.push('RECORD_TIME');

		var queryOrgFlag = $("#queryOrgFlag").val();
		var isAdminFlag = $("#isAdminFlag").val();
		var queryOrgs = $("#queryOrgs").val();
		var arguUserId=null;
		if(queryOrgFlag == 'true'){
			arguUserId=null;
			if(isAdminFlag == 'true'){
				queryOrgs=null;
			}
		}else{
			queryOrgs= null;
			arguUserId="yes";
		}

		var orgArray = queryOrgs==null?'':queryOrgs.split(",");

		var argu_idflag = '&argu_idflag='+arguUserId;

		if(arguUserId==null)argu_idflag='&argu_idflag=';
		var argu_queryorgs = "&"+jQuery.param({argu_queryorgs:orgArray});
		if(argu_queryorgs==null)argu_queryorgs='&argu_queryorgs=';
		var params = getParamsValue();
		var queryId = '&queryId=queryCaseExcelItemList';
		var colomns = '&colomns=' + displayColomn;


		url = ctx + url + jQuery.param(params) + queryId +argu_idflag+argu_queryorgs + colomns;
		//url+= "&_s(earch=true";
		//url= decodeURI(url);
//		alert(url);
		$('#excelForm').attr('action', url);

		$('#excelForm').method="post" ;
		$('#excelForm').submit();
	} else {
		alert("请不要选择同样的日期类型！");
	}
}
function intextTypeChange(){
	var inTextType = $('#inTextType').val();
	var ctx = $("#ctx").val();
	if(inTextType=='4'){
		initAutocomplete(ctx+"/labelVal/queryUserInfo");
	}else if (inTextType=='3'){
		initAutocomplete(ctx+"/labelVal/queryOrgInfo");
	}
}
function initAutocomplete(url){
	$("#inTextVal").AutoComplete({
		data:url,
		'itemHeight': 20,
        'width': 280,
        maxItems:10,
        ajaxType:'POST',
        beforeLoadDataHandler:function(){
        	$("#inTextVal").attr('hVal','');
        	return true;
        },
        afterSelectedHandler:function(data){
        	if(data&&data.value){
        		$("#inTextVal").attr('hVal',data.value);
        	}else{
        		$("#inTextVal").attr('hVal','');
        	}
		}
    }).AutoComplete('show');
}
//选业务组织的回调函数
function radioYuCuiOrgSelectCallBack(array){
    if(array && array.length >0){
        $("#teamCode").val(array[0].name);
		$("#yuCuiOriGrpId").val(array[0].id);

		var userSelect = "userSelect({displayId:'oriAgentId',displayName:'radioUserNameCallBack',startOrgId:'"+array[0].id+"',nameType:'long|short',jobIds:'',jobCode:'JWYGW,JFHJL,JQYZJ,JQYDS',orgType:'',departmentType:'',departmentHeriarchy:'',chkStyle:'radio',callBack:checkboxUser})";
		$("#oldactiveName").attr("onclick",userSelect);
	}else{
		$("#teamCode").val("");
		$("#yuCuiOriGrpId").val("");
	}
}
//清空
$('#cleanButton').click(function() {
	$("input[id='inTextVal']").val('');
	$("input[name='teamCode']").val('');
	$("input[name='dtBegin']").val('');
	$("input[name='dtEnd']").val('');
	$("select").val("");
});