(function(){

    if (!window.ly) {
        window['ly'] = {
            CACHE_BASE:'basepath',
            CACHE_BASE_HUAISHU:'huaishu',
            CACHE_BASE_BAIYANG:'baiyang'
        }
    };


    if (!ly.url) ly.url = {
        base:function(type) {
           var basePath = ly.storage.getSession(ly.CACHE_BASE);
           if (type) {
               return basePath + '/' + ly.CACHE_BASE_HUAISHU + '/';
           }
            return basePath;
        }
    };

    /**
     * HTML5缓存封装
     */
    if (!ly.storage) ly.storage = {
        getSession: function(a) {
            return window.sessionStorage.getItem(a);
        },
        setSession: function(a, b) {
            if(ly.storage.getSession(a)) {
                ly.storage.removeSession(a);
            }
            window.sessionStorage.setItem(a, b);
        },
        removeSession: function(a) {
            window.sessionStorage.removeItem(a);
        },
        clearSession: function() {
            window.sessionStorage.clear();
        },
        getLocal: function(a) {
            return window.localStorage.getItem(a);
        },
        setLocal: function(a, b) {
            window.localStorage.setItem(a, b);
        },
        removeLocal: function(a) {
            window.localStorage.removeItem(a);
        },
        clearLocal: function() {
            window.localStorage.clear();
        }
    };
})();