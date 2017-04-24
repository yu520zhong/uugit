/**
 * Crayola colors in JSON format
 * from: https://gist.github.com/jjdelc/1868136
 */
var json =
[
    {
        "label": "上哈斯是",
        "rgb": "(239, 222, 205)"
    },
    {
        "label": "上海市长宁区",
        "rgb": "(205, 149, 117)"
    },
    {
        "label": "上海市长宁区1号",
        "rgb": "(205, 149, 117)"
    },
    {
        "label": "上海市长",
        "rgb": "(205, 149, 117)"
    },
    {
        "label": "上海市长宁区1号2",
        "rgb": "(205, 149, 117)"
    },
    {
        "label": "上海",
        "rgb": "(253, 217, 181)"
    },
    {
        "label": "上周",
        "rgb": "(120, 219, 226)"
    },
    {
        "label": "上火",
        "rgb": "(135, 169, 107)"
    }


];


var member =
[
    {
        "label": "服务人员",
        "rgb": "(239, 222, 205)"
    },
    {
        "label": "新增的功能",
        "rgb": "(205, 149, 117)"
    },
    {
        "label": "铿部铿谍",
        "rgb": "(205, 149, 117)"
    },
    {
        "label": "随便轼",
        "rgb": "(205, 149, 117)"
    },
    {
        "label": "服务人员好多",
        "rgb": "(205, 149, 117)"
    },
    {
        "label": "服务人员真的好多",
        "rgb": "(253, 217, 181)"
    },

];

$(function () {

  $('#input').autocompleter({
        // marker for autocomplete matches
        highlightMatches: true,

        // object to local or url to remote search
        source: json,


        // show hint
        hint: true,

        // abort source if empty field
        empty: false,

        // max results
        limit: 3,


        callback: function (value, index, selected) {
            if (selected) {
                $('.icon').css('background-color');
            }
            alert(value);
        }
    });


  $('#member').autocompleter({
        // marker for autocomplete matches
        highlightMatches: true,

        // object to local or url to remote search
        source: member,


        // show hint
        hint: true,

        // abort source if empty field


        // max results
        limit: 3,


        callback: function (value, index, selected) {

            alert(value);
        }
    });
});
