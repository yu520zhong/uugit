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





$(function () {
  $('#nope').autocompleter({
        // marker for autocomplete matches
        highlightMatches: true,

        // object to local or url to remote search
        source: json,

        // custom template
        template: '{{ label }}',

        // show hint
        hint: true,

        // abort source if empty field
        empty: false,

        // max results
        limit: 5,

      callback: function (value, index, selected) {
          if (selected) {
              $('.icon').css('background-color');
          }
          alert(value);
      }
    });
});



