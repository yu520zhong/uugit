    // 柱状图表，初始化echarts实例
function echartData (id) {
    var myChart = echarts.init(document.getElementById(id));
    // 指定图表的配置项和数据
    var option = {
        title : {
            text: '11月与10月过户量比较',
            textStyle: {
                color: '#555',
                fontSytle: 'normal',
                fontWeight: 'normal',
                fontSize: '16'
            },
            x:'left',
            y: 'top',
            padding: [
                0,  // 上
                10, // 右
                10,  // 下
                0, // 左
            ],
        },
        legend: {
            y: '10%',
            data:['蒸发量','降水量','平均温度','温差'],
            x:'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '48',
            top: '30%',
            right: '84',
            bottom: '15%'
        },
        xAxis: [
            {
                type: 'category',
                borderColoe:'#333',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis: [
            {
                type: 'value',//左边
                name: '水量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',//右边
                name: '温度',
                min: 0,
                max: 30,
                interval: 6,
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name:'蒸发量',
                type:'bar',
                itemStyle:{//顔色
                  normal : {
                  color : '#52bdbd'
                      }
                },
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]//数据
            },
            {
                name:'降水量',
                type:'bar',
                itemStyle:{//顔色
                  normal : {
                  color : '#ff9696'
                      }
                },
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'平均温度',
                type:'line',
                yAxisIndex: 1,
                itemStyle:{//顔色
                  normal : {
                  color : '#7aa6ea'
                      }
                },
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
            ,
            {
                name:'温差',
                type:'line',
                yAxisIndex: 1,
                itemStyle:{//顔色
                  normal : {
                  color : '#ffac88'
                      }
                },
                data:[3.0, 1.2, 6, 7, 3, 2, 20, 30, 20, 30, 10, 20]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

// 饼图，初始化echarts实例
function echartSet (id) {
    var myChart = echarts.init(document.getElementById(id));
    // 指定图表的配置项和数据
    var option = {
            title : {
                text: '11月过户总量',
                x:'left',
                y: 'top',
                padding: [
                    0,  // 上
                    10, // 右
                    10,  // 下
                    0, // 左
                ],
                textStyle: {
                    color: '#555',
                    fontSytle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16'
                },
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {//工具栏
                x:'right',
                feature: {
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                orient: 'horizontal',
                x : 'left',
                y: '14%',
                data: ['无贷款','纯公积金','商业贷款']
            },
            color:['#52bdbd','#ffd480','#bfd8ff'],
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '30%',
                    center: ['50%', '60%'],
                    animation: true,
                    selectedMode: 'multiple',
                    data:[
                        {value:100, name:'无贷款'},
                        {value:120, name:'纯公积金'},
                        {value:300, name:'商业贷款',selected:true}
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{b}:\n{c}个 ({d}%)"
                             }
                          }
                    }
                }
            ]
        };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}