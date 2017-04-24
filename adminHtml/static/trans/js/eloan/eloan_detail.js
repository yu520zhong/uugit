/*头部固定滚动*/
jQuery(function($) {
    $(document).ready( function() {
       $('.stickup-nav-bar').stickUp({
          parts: {
            0:'reportOne',
            1:'reportTwo',
            2:'reportThree',
            3:'reportFour',
            4:'reportFive',
            5:'reportSix',
          },
          itemClass: 'menuItem',
          itemHover: 'active',
          marginTop: 'auto'
        });

    });
});


$(function() {

/*开关按钮*/
  $('[name="status"]').bootstrapSwitch({
      onText:"已修改",
      offText:"未修改",
      onColor:"primary",
      offColor:"default",
      size:"small",
      onSwitchChange:function(event,state){
          if(state==true){
              $(this).val("1");
          }else{
              $(this).val("2");
          }
      }
  })


  /*poshytip 提示框JS*/
  //left
    $('.demo-left').poshytip({
      className: 'tip-twitter',
      showTimeout: 1,
      alignTo: 'target',
      alignX: 'left',
      alignY: 'center',
      offsetX: 8,
      offsetY: 5,
    });

    //right
    $('.demo-right').poshytip({
      className: 'tip-twitter',
      showTimeout: 1,
      alignTo: 'target',
      alignX: 'right',
      alignY: 'center',
      offsetX: 8,
      offsetY: 5,
    });

    //top
    $('.demo-top').poshytip({
      className: 'tip-twitter',
      showTimeout: 1,
      alignTo: 'target',
      alignX: 'center',
      alignY: 'top',
      offsetX: 8,
      offsetY: 5,
    });

    //bottom
    $('.demo-bottom').poshytip({
      className: 'tip-twitter',
      showTimeout: 1,
      alignTo: 'target',
      alignX: 'center',
      alignY: 'bottom',
      offsetX: 8,
      offsetY: 5,
    });


})

