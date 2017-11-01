(function(){
    window.LY = window.LY||{}
    LY.fullHeight = function(obj,minus) {
        var height = $(window).height()-minus;
        obj.height(height);
        $(window).resize(function() {

            var h = $(window).height()-minus;
            console.log(h);
            obj.height(h);
        });
    }
})();