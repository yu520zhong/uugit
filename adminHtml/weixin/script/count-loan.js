/**
 * Crayola colors in JSON format
 * from: https://gist.github.com/jjdelc/1868136
 */
var json =
[
    {
        "label": "1.25",
    },
    {
        "label": "1.5",
    },
    {
        "label": "1.75",
    },
    {
        "label": "1.8",
    },
    {
        "label": "1.9",
    },
    {
        "label": "2.0",
    },
    {
        "label": "3.0",
    },
    {
        "label": "4.0",
    },
    {
        "label": "4.5",
    },
    {
        "label": "5.0",
    }
];


$(function () {

  $('#Fund').autocompleter({
        // marker for autocomplete matches
        highlightMatches: false,
        // object to local or url to remote search
        source: json,
        // show hint
        hint: false,
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

    $('#Lend').autocompleter({
        // marker for autocomplete matches
        highlightMatches: false,
        // object to local or url to remote search
        source: json,
        // show hint
        hint: false,
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
