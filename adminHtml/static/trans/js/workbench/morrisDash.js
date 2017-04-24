$(function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            tooltip : {
                trigger: 'item',
                hideDelay: 100,
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
            data : ['3月','4月','5月','6月','7月']
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
            data:[5, 0, 3, 10, 93]
        },
        {
            name:'签约',
            type:'bar',
            barWidth: 30,
            stack: '7月',
            data:[1, 1, 8, 33, 29]
        },
        {
            name:'过户',
            type:'bar',
            barWidth: 30,
            stack: '7月',
            data:[1, 3, 0, 5, 9]
        },
        {
            name:'结案',
            type:'bar',
            barWidth: 30,
            stack: '7月',
            data:[1, 8, 7, 18, 17]
        },

    ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

})