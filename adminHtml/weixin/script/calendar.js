/**
 * calendar.js
 * 日历参数设置
 */
function show(){
	var mydate = new Date();
	var str = "" + mydate.getFullYear() + "-";
	str += "0" + (mydate.getMonth()+1) + "-";
	str += mydate.getDate();
	return str;
}
$("#SelDate").val(show());

$(function () {
	var currYear = (new Date()).getFullYear();
	start=currYear - 20;
	end= currYear + 20 ;
	$("#SelDate").mobiscroll().date({
		theme: 'android-ics light', //皮肤样式
		display: 'modal', //显示方式
		mode: 'scroller', //日期选择模式
		dateFormat: 'yyyy-mm-dd',
		lang: 'zh',
		showNow: true,
		dateOrder: 'yymmdd', //面板中日期排列格式(可以设置)
		nowText: "今天",
		dayText: '日', monthText: '月', yearText: '年', //面板中年月日文字
		yearText: '年', monthText: '月', dayText: '日', //面板中年月日文字

		headerText: function (valueText) { array = valueText.split('-'); return array[0] + "年" + array[1] + "月"+array[2]+"日"; }, //自定义弹出框头部格式
		//点击确定的事件
		//
		onSelect:function(valueText,inst){
			alert(valueText);
		}
	});
})