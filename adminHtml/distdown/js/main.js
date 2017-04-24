// main.js
requirejs.config({
    paths: {
　　　　　　"jquery": "jquery",
            "light7": "light7",
            "fullpage":"fullPage",
            "fullset":"fullPage-setting",
　　　　}
});

require(['jquery','fullPage','fullset','light7'],function($,fullpage,fullset,light7){
    fullset.setPage1();
    fullset.setPage2();
})
