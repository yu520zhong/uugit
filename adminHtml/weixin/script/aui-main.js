var dialog = new auiDialog({})
function openDialog(text){
    dialog.alert({
        msg:'<i class="iconfont blue">&#xe603;;</i><h2>恭喜你预约冲个</h2><p>房间号</p>',
        buttons:['取消','确定']
    },function(ret){
        console.log(ret)
    })
};

/*function openDialog(type){
    switch (type) {
        case "text":
            dialog.alert({
                title:"弹出提示",
                msg:'这里是内容',
                buttons:['取消','确定']
            },function(ret){
                console.log(ret)
            })
            break;
        case "callback":
            dialog.alert({
                title:"弹出提示",
                msg:'这里是内容',
                buttons:['取消','确定']
            },function(ret){
                if(ret){
                    dialog.alert({
                        title:"提示",
                        msg:"您点击了第"+ret.buttonIndex+"个按钮",
                        buttons:['确定']
                    });
                }
            })
            break;
        case "input":
            dialog.prompt({
                title:"弹出提示",
                text:'默认内容',
                buttons:['取消','确定']
            },function(ret){
                if(ret.buttonIndex == 2){
                    dialog.alert({
                        title:"提示",
                        msg: "您输入的内容是："+ret.text,
                        buttons:['确定']
                    });
                }
            })
            break;
        default:
            break;

    }
};*/


$(document).ready(function() {
    /*--dialog
    -----------------------------*/


    /*--select set_center
     -----------------------------*/
    /*$.fn.autotype = function() {
     var $select = $(this);
     $select.find("select").change(function () {
     var getSelectVal = $select.find("option:selected").text();
     $select.find("span").text(getSelectVal);
     })
     };
     $("#selectCity").autotype();
     $("#selectTime").autotype();*/
})