// 柱状图表，初始化echarts实例

function echartData (id,option) {
    var myChart = echarts.init(document.getElementById(id));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

var option1 = {
    title : {
        text: '签约、贷款数据',
        x:'left',
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        data: ['一次性付款','纯公积金','公司办理','客户自办','贷款待办'],
        top:'50',
    },
    series : [
        {
            name: '签约、贷款数据',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'一次性付款'},
                {value:310, name:'纯公积金'},
                {value:234, name:'公司办理'},
                {value:135, name:'客户自办'},
                {value:48, name:'贷款待办'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#52bdbd','#f784a5','#fead6b','#52cdec','#428fcc'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};


echartData("signChart",option1);