// Create a new directed graph
var g = new dagreD3.graphlib.Graph().setGraph({});
 g.setGraph({
    nodesep: 70,
    ranksep: 50,
    rankdir: "LR",
    marginx: 20,
    marginy: 20
  });

// States and transitions from RFC 793
var states = {
    //picture-7
  "开始7": {
    description: "" ,
    style: "fill: #f4f4f4",
  },
  "结束7": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "X7": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "X77": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "主管审批1": {
    description: "" ,
    style: "fill: #ffeeee",
  },

  "高级主管审批": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #ffeeee",
  },
   "总监审批": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #ffeeee",
  },

  //picture-1
  "开始": {
    description: "" ,
    style: "fill: #f4f4f4",
     shape: "circle"
  },

  "商业贷款办理": {
    description: "2016年，张晓辉商业贷款申请中" ,
    style: "fill: #ffeeee",
  },

  "结束": {
    description: "" ,
    style: "fill: #d9f8fd",
  },

  //picture-2
  "开始2": {
    description: "" ,
    style: "fill: #f4f4f4",
  },
  "结束2": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "E+贷款申请": {
    description: "" ,
    style: "fill: #ffeeee",
  },

  "E+申请确认": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #d9f8fd",
  },

  "X1": {
    description: "" ,
    style: "fill: #d9f8fd",
    shape: "diamond"
  },

  "X2": {
    description: "" ,
    style: "fill: #d9f8fd",
    shape: "diamond"
  },

  "X3": {
    description: "" ,
    style: "fill: #d9f8fd",
    shape: "diamond"
  },

  "E+贷款签约": {
    description: "" ,
    style: "fill: #ffeeee",
  },

  "E+签约确认": {
    description: "" ,
    style: "fill: #d9f8fd",
  },

  "E+贷款放款": {
    description: "" ,
    style: "fill: #ffeeee",
  },

  "E+放款确认": {
    description: "" ,
    style: "fill: #d9f8fd",
  },

//picture-3
  "开始3": {
    description: "" ,
    style: "fill: #f4f4f4",
  },
  "结束3": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "贷款流失申请": {
    description: "" ,
    style: "fill: #ffeeee",
  },

  "贷款流失审批-主管": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #ffeeee",
  },

  "X4": {
    description: "" ,
    style: "fill: #d9f8fd",
    shape: "diamond"
  },

  "贷款流失审批-总监": {
    description: "" ,
    style: "fill: #ffeeee",
    shape: "diamond"
  },

  "X5": {
    description: "" ,
    style: "fill: #d9f8fd",
    shape: "diamond"
  },

  "自办贷款审批": {
    description: "" ,
    style: "fill: #ffeeee",
  },


  //picture-4
  "开始4": {
    description: "" ,
    style: "fill: #f4f4f4",
  },
  "结束4": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "纯公积金贷款申请": {
    description: "" ,
    style: "fill: #ffeeee",
  },

  "纯公积金贷款签约": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #ffeeee",
  },

  "纯公积金贷款审批": {
    description: "" ,
    style: "fill: #ffeeee",
    shape: "diamond"
  },

  //picture-5
  "开始5": {
    description: "" ,
    style: "fill: #f4f4f4",
  },
  "结束5": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "服务变更申请": {
    description: "" ,
    style: "fill: #ffeeee",
  },

  "服务变更审批": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #ffeeee",
  },

  //picture-6
  "开始6": {
    description: "" ,
    style: "fill: #f4f4f4",
  },
  "结束6": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "X6": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "服务重启申请": {
    description: "" ,
    style: "fill: #ffeeee",
  },

  "服务重启审批": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #ffeeee",
  },



//picture-8
  "开始8": {
    description: "" ,
    style: "fill: #f4f4f4",
  },
  "结束8": {
    description: "" ,
    style: "fill: #d9f8fd",
  },
  "资金监管申请": {
    description: "" ,
    style: "fill: #ffeeee",
  },
  "资金监管审批": {
    description: "" ,
    style: "fill: #ffeeee",
  },
  "X8": {
    description: "" ,
    style: "fill: #d9f8fd",
  },

  "资金监管签约": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #ffeeee",
  },
   "信封": {
    description: "2016年，张晓辉贷款申请确认" ,
    style: "fill: #ffeeee",
  },










  /*"首次跟进": {
    description: "2016年8月27日，张晓敏首次跟进，已完成" ,
    style: "fill: #f6eac4",
     shape: "circle"
  },

  "无效案件审批": {
    description: "2016年8月29日，张晓敏无效案件审批，已完成" ,
    style: "fill: #f6eac4",
    shape: "ellipse"
  },

  "签约": {
    description: "2016年8月28日，张晓敏成功签约" ,
    style: "fill: #f6eac4",
    shape: "diamond"
  },

  "贷款需求选择": {
    description: "2016年8月30日，张晓敏填写贷款需求选择" ,
    style: "fill: #c4ecf6",
  },

  "填写交易计划": {
    description: "2016年8月29日，张晓敏填写填写交易计划" ,
    style: "fill: #f6eac4"
  },


  "查限购": {
    description: "2016年8月31日，张晓敏查限购" ,
    style: "fill: #c4ecf6"
  },

  "核价": {
    description: "2016年9月1日，核价进行中" ,
    style: "fill: #fefbdc"
  },

  "上家贷款结清": {
    description: "上家贷款结清进行中" ,
    style: "fill: #c4ecf6"
  },

  "审税": {
    description: "2016年9月1日审税" ,
    style: "fill: #c4ecf6"
  },

  "过户": {
    description: "过户未完成" ,
    style: "fill: #ccc"
  },

  "过户审批": {
    description: "过户审批未完成" ,
    style: "fill: #ccc"
  },

  "过户信息修改": {
    description: "过户信息修改未完成" ,
    style: "fill: #ccc"
  },

  "领证": {
    description: "领证未完成" ,
    style: "fill: #ccc"
  },

  "发起报告类评估": {
    description: "发起报告类评估未完成" ,
    style: "fill: #ccc"
  },

  "放款": {
    description: "放款未完成" ,
    style: "fill: #ccc"
  },

  "结案归档": {
    description: "结案归档未完成" ,
    style: "fill: #ccc"
  },

  "结案审核": {
    description: "结案审核未完成" ,
    style: "fill: #ffeeee"
  },

  "主管审批": {
    description: "主管审批未完成" ,
    style: "fill: #ccc"
  },*/
};

// Add states to the graph, set labels, and style
Object.keys(states).forEach(function(state) {
  var value = states[state];
  value.label = state;
  value.rx = value.ry = 5;
  g.setNode(state, value);
});

// Set up the edges
/*g.setEdge("首次跟进",     "主管审批",     { label: "open" });
g.setEdge("主管审批",     "结案审核",     {
  style: "stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;",
  arrowheadStyle: "fill: #f66",
  label: "Arrowhead class",
  lineInterpolate: 'basis',
});*/

//picture-7
g.setEdge("开始7", "主管审批1", { label: "" });
g.setEdge("主管审批1", "X7", { label:"" });
g.setEdge("X7", "高级主管审批", { label:"" });
g.setEdge("高级主管审批", "X77", { label:"" });
g.setEdge("X7", "总监审批", { label:"" });
g.setEdge("总监审批", "结束7", { label:""});
g.setEdge("X7", "结束7", { label:"" });
g.setEdge("X77", "总监审批", { label:"" });
g.setEdge("X77", "结束7", { label:"" });
//picture-1
g.setEdge("开始", "商业贷款办理", { label: "" });
g.setEdge("商业贷款办理", "结束", { label:""});

//picture-2
g.setEdge("开始2", "E+贷款申请", { label: "" });
g.setEdge("E+贷款申请", "E+申请确认", { label:"" });
g.setEdge("E+申请确认", "X1", { label:""});
g.setEdge("X1", "E+贷款申请", { label:""});
g.setEdge("X1", "E+贷款签约", { label:""});

g.setEdge("E+贷款签约", "E+签约确认", { label:""});
g.setEdge("E+签约确认", "X2", { label:""});
g.setEdge("X2", "E+贷款放款", { label:""});
g.setEdge("X2", "E+贷款签约", { label:""});

g.setEdge("E+贷款放款", "E+放款确认", { label:""});
g.setEdge("E+放款确认", "X3", { label:""});
g.setEdge("X3", "E+贷款放款", { label:""});
g.setEdge("X3", "结束2", { label:""});

//picture-3
g.setEdge("开始3", "贷款流失申请", { label: "" });
g.setEdge("贷款流失申请", "贷款流失审批-主管", { label:"" });
g.setEdge("贷款流失审批-主管", "X4", { label:""});
g.setEdge("X4", "贷款流失申请", { label:""});
g.setEdge("X4", "贷款流失审批-总监", { label:""});

g.setEdge("贷款流失审批-总监", "X5", { label:""});
g.setEdge("X5", "贷款流失审批-主管", { label:""});
g.setEdge("X5", "自办贷款审批", { label:""});
g.setEdge("自办贷款审批", "结束3", { label:""});


//picture-4
g.setEdge("开始4", "纯公积金贷款申请", { label: "" });
g.setEdge("纯公积金贷款申请", "纯公积金贷款签约", { label:"" });
g.setEdge("纯公积金贷款签约", "纯公积金贷款审批", { label:""});
g.setEdge("纯公积金贷款审批", "结束4", { label:""});


//picture-5
g.setEdge("开始5", "服务变更申请", { label: "" });
g.setEdge("服务变更申请", "服务变更审批", { label:"" });
g.setEdge("服务变更审批", "结束5", { label:""});


//picture-6
g.setEdge("开始6", "服务重启申请", { label: "" });
g.setEdge("服务重启申请", "服务重启审批", { label:"" });
g.setEdge("服务重启审批", "X6", { label:"" });
g.setEdge("X6", "服务重启申请", { label:"" });
g.setEdge("X6", "结束6", { label:""});




//picture-8
g.setEdge("开始8", "资金监管申请", { label: "" });
g.setEdge("资金监管申请", "资金监管审批", { label:"" });
g.setEdge("资金监管审批", "X8", { label:"" });
g.setEdge("X8", "资金监管申请", { label:"" });
g.setEdge("X8", "资金监管签约", { label:"" });
g.setEdge("资金监管签约", "信封", { label:""});
g.setEdge("信封", "结束8", { label:"" });








//picture-9
/*g.setEdge("首次跟进", "无效案件审批", { label: "" });
g.setEdge("首次跟进", "签约", { label: "" });
g.setEdge("首次跟进", "贷款需求选择", { label: "" });


g.setEdge("签约", "填写交易计划", { label: "" });
g.setEdge("填写交易计划", "查限购", { label: "" });
g.setEdge("填写交易计划", "核价", { label: "" });
g.setEdge("核价", "审税", { label: "" });
g.setEdge("填写交易计划", "上家贷款结清", { label: "" });
g.setEdge("查限购", "过户", { label: "" });
g.setEdge("审税", "过户", { label: "" });
g.setEdge("上家贷款结清", "过户", { label: "" });
g.setEdge("贷款需求选择", "过户", { label: "" });
g.setEdge("过户", "过户审批", { label: "" });
g.setEdge("过户审批", "过户信息修改", { label: "" });
g.setEdge("过户审批", "过户信息修改", { label: "" });
g.setEdge("过户信息修改", "领证", { label: "" });
g.setEdge("过户审批", "发起报告类评估", { label: "" });
g.setEdge("发起报告类评估", "领证", { label: "" });
g.setEdge("领证", "过户审批", { label: "" });
g.setEdge("领证", "结案归档", { label: "" });
g.setEdge("领证", "放款", { label: "" });
g.setEdge("放款", "结案归档", { label: "" });
g.setEdge("结案归档", "结案审核", { label: "" });
g.setEdge("结案归档", "主管审批", { label: "" });
g.setEdge("结案审核", "主管审批", { label: "" });*/










// Create the renderer
var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
var svg = d3.select("svg"),
    inner = svg.append("g");

// Set up zoom support
var zoom = d3.behavior.zoom().on("zoom", function() {
    inner.attr("transform", "translate(" + d3.event.translate + ")" +
                                "scale(" + d3.event.scale + ")");
  });
svg.call(zoom);

// Simple function to style the tooltip for the given node.
var styleTooltip = function(name, description) {
  return "<p class='name'>" + name + "</p><p class='description'>" + description + "</p>";
};

// Run the renderer. This is what draws the final graph.
render(inner, g);

inner.selectAll("g.node")
  .attr("title", function(v) { return styleTooltip(v, g.node(v).description) })
  .each(function(v) { $(this).tipsy({ gravity: "w", opacity: 1, html: true }); });

// Center the graph
var initialScale = 0.75;
/*zoom
  .translate([(svg.attr("width") - g.graph().width * initialScale) / 2, 20])
  .scale(initialScale)
  .event(svg);
svg.attr('height', g.graph().height * initialScale + 100);*/
zoom
  .translate([10, 50])
  .scale(initialScale)
  .event(svg);
svg.attr('height', g.graph().height * initialScale + 170);