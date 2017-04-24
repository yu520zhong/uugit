$(function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('TypeOne'));
        var myChart2 = echarts.init(document.getElementById('TypeTwo'));
        var myChart3 = echarts.init(document.getElementById('LoansOne'));
        var myChart4 = echarts.init(document.getElementById('LoansTwo'));

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
        text: '组织报表分析（金额）',
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

        data:['贵宾服务部A组','贵宾服务部B组','贵宾服务部C组']
    },
    color:[
        '#f784a5', '#ffad6b', '#52bdbd', '#295aa5',
    ],
    series: [
        {
            name:'贵宾服务部',
            type:'pie',
            radius: ['35%', '55%'],
            animation: true,
            selectedMode: 'multiple',
            data:[
                {value:125111, name:'贵宾服务部A组'},
                {value:114724, name:'贵宾服务部B组'},
                {value:80212, name:'贵宾服务部C组'}
            ]
        }
    ]
};

// 指定图表的配置项和数据
        var option4 = {
            title: {
        text: '组织报表分析（单数）',
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

        data:['贵宾服务部A组','贵宾服务部B组','贵宾服务部C组']
    },
    color:[
        '#f784a5', '#ffad6b', '#52bdbd', '#295aa5',
    ],
    series: [
        {
            name:'贵宾服务部',
            type:'pie',
            radius: ['35%', '55%'],
            animation: true,
            selectedMode: 'multiple',
            data:[
                {value:12, name:'贵宾服务部A组'},
                {value:14, name:'贵宾服务部B组'},
                {value:18, name:'贵宾服务部C组'}
            ]
        }
    ]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
        myChart2.setOption(option2);
         myChart3.setOption(option3);
        myChart4.setOption(option4);



})