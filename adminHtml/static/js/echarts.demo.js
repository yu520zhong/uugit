$(function() {

        var myChart1 = echarts.init(document.getElementById('char1'));
        // 指定图表的配置项和数据
        var option1 = {
            color: ['#ffae6b','#275da5','#4dbcbe', '#0a8dc9', '#f989a5','#13bfa1'],
            series : [
                {
                    name: 'E+贷款',
                    type: 'pie',
                    radius: ['30%', '55%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter : '{b}\n{c}',
                            textStyle: {
                                fontSize: '12',
                            }}
                        },
                        labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:[
                        {value:3.00, name:'税费卡'},
                        {value:1.00, name:'消费贷'},
                        {value:1.00, name:'首付贷'},
                        {value:1.00, name:'委托贷'},
                        {value:1.00, name:'首付贷（抵押类）'}
                    ],
                    itemStyle: {
                        emphasis: {
                            show: true,
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart1.setOption(option1);




        var myChart2 = echarts.init(document.getElementById('char2'));
        var option2 = {
            color: ['#ffae6b','#275da5','#4dbcbe', '#0a8dc9', '#f989a5','#13bfa1'],
            series : [
                {
                    name: 'E+贷款',
                    type: 'pie',
                    radius: ['30%', '55%'],
                    avoidLabelOverlap: false,

                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter : '{b}\n{c}',
                            textStyle: {
                                fontSize: '11',
                            }}
                        },
                        labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:[
                        {value:3.00, name:'税费卡'},
                        {value:1.00, name:'消费贷'},
                        {value:1.00, name:'首付贷'},
                        {value:1.00, name:'委托贷'},
                        {value:1.00, name:'首付贷（抵押类）'}
                    ],
                    itemStyle: {
                        emphasis: {
                            show: true,
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart2.setOption(option2);



        var myChart3 = echarts.init(document.getElementById('char3'));
        var option3 = {
            color: ['#ffae6b','#275da5','#4dbcbe', '#0a8dc9', '#f989a5','#13bfa1'],
            series : [
                {
                    name: 'E+贷款',
                    type: 'pie',
                    radius: ['30%', '55%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter : '{b}\n{c}',
                            textStyle: {
                                fontSize: '10',
                            }}
                        },
                        labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data:[
                        {value:3.00, name:'税费卡'},
                        {value:1.00, name:'消费贷'},
                        {value:1.00, name:'首付贷'},
                        {value:1.00, name:'委托贷'},
                        {value:1.00, name:'首付贷（抵押类）'}
                    ],
                    itemStyle: {
                        emphasis: {
                            show: true,
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart3.setOption(option3);

})