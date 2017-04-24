$(function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('TypeOne'));
        var myChart2 = echarts.init(document.getElementById('TypeTwo'));
        var myChart3 = echarts.init(document.getElementById('Cont'));

        // 指定图表的配置项和数据
        var option1 = {
            title: {
                text: '贷款类型分析（金额）',
                subtext:'',
                padding: [25, 10],
                x:'center',
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                /*alwaysShowContent:true,*/
                hideDelay: 1500,
                enterable: true,
                formatter: "{b}: {c} ({d}%)"
            },

            legend: {
                orient: 'vertical',
                x: 'right',
                y: 'top',
                top: 15,

                data:['商贷（收单）','商贷（流失）','公积金']
            },
            color:[
                '#f784a5', '#ffad6b', '#52bdbd', '#295aa5',
            ],
            series: [

                {
                    name:'贷款类型分析(金额)',
                    type:'pie',
                    radius: ['35%', '55%'],
                    animation: true,
                    selectedMode: 'multiple',
                    data:[
                        {value:125111, name:'商贷（收单）'},
                        {value:114724, name:'商贷（流失）'},
                        {value:80212, name:'公积金'}
                    ]
                }
            ]
};

       // 指定图表的配置项和数据
        var option2 = {
            title: {
                text: '贷款类型分析（单数）',
                subtext:'',
                padding: [25, 10],
                x:'center',
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                /*alwaysShowContent:true,*/
                hideDelay: 1500,
                formatter: "{b}: {c} ({d}%)"
            },

            legend: {
                orient: 'vertical',
                x: 'right',
                y: 'top',
                top: 15,

                data:['商贷（收单）','商贷（流失）','公积金']
            },
            color:[
                '#f784a5', '#ffad6b', '#52bdbd', '#295aa5',
            ],
            series: [

                {
                    name:'贷款类型分析（单数）',
                    type:'pie',
                    radius: ['35%', '55%'],
                    animation: true,
                    selectedMode: 'multiple',
                    data:[
                        {value:80, name:'商贷（收单）'},
                        {value:90, name:'商贷（流失）'},
                        {value:100, name:'公积金'}
                    ]
                }
            ]
};

    // 指定图表的配置项和数据
        var option3 = {
            title: {
                text: '贷款类型分析（单数）',
                subtext:'',
                padding: [15, 20],
                x:'center',
            },
            tooltip : {
                trigger: 'item',
                hideDelay: 100,
                showDelay : 0,
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'       // 默认为直线，可选为：'line' | 'shadow'
                },
            },

    //数据视图
    toolbox : {
            show : true,
            feature : {
                dataView : {
                    show : true,
                    readOnly : false
                },
                restore : {
                    show : true
                },
                saveAsImage : {
                    show : true
                }
            }
        },
    barBorderRadius:0,
    legend : {
            orient : 'vertical',
            x : 'right',
            y : 'center',
            data : [ '接单', '签约', '过户', '结案' ],
            selected : {
                '结案' : false
            }

        },
    grid : {
            left : '1%',
            right : '10%',
            bottom : '1%',
            containLabel : true
        },
    xAxis : [
        {
            type : 'category',
            data : ['上半年','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    color:[
        '#f784a5', '#ffad6b', '#52bdbd', '#295aa5',
    ],
    series : [
        {
            name:'接单',
            type:'bar',
            barWidth: 30,
            stack: '7月',
            data:[120,10,51, 20, 32, 10, 83]
        },
        {
            name:'签约',
            type:'bar',
            barWidth: 30,
            stack: '7月',
            data:[14,3,5, 6, 8, 33, 29]
        },
        {
            name:'过户',
            type:'bar',
            barWidth: 30,
            stack: '7月',
            data:[12,2,2, 3, 0, 5, 9]
        },
        {
            name:'结案',
            type:'bar',
            barWidth: 30,
            stack: '7月',
            data:[30,2,5, 8, 7, 18, 17]
        },

    ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);



})