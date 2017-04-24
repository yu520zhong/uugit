define(function(){
    function setPage1() {
        $('#fullpage').fullpage({
            sectionsColor: ['#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5', '#f5f5f5'],
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            menu: '#menu',
            loopBottom: false,
            afterLoad: function(anchorLink, index){
            }
        });
    }

    function setPage2 () {
        $('.slog-down').click(function(e){
            e.preventDefault();
            $.fn.fullpage.moveSectionDown();
        });

        $('.slog-up').click(function(e){
            e.preventDefault();
            $.fn.fullpage.moveTo(1);
        });
    }

    return {
        setPage1 : setPage1,
        setPage2 : setPage2,
    }


});
