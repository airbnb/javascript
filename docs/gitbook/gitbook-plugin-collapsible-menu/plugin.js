require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        $('ul.summary li li').hide();
        // $('ul.summary li').find('li.active').parent().children().show();
        $('ul.summary li li.active').parents().children(':not(script)').show();
        $('ul.summary li.active > ul > li').show();        
    });
});
