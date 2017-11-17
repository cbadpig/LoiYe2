(function(){

    if (!window.ly) {
        window['ly'] = {
            PROJECT_HUAISHU:"huaishu",
            NOTE_WJ:"wj",
            CACHE_BASE:'basepath',
            CACHE_BASE_HUAISHU_NOTE:'huaishu_note',
            CACHE_BASE_BAIYANG:'baiyang'
        }
    };

    if (!ly.huaishu) ly.huaishu = {
        createTitle:function() {
            ly.note.createTitle(ly.CACHE_BASE_HUAISHU_NOTE);
        },
        init:function (data) {
            ly.note.init(ly.CACHE_BASE_HUAISHU_NOTE,data);
            // this.createTitle();
        }
    }


    if (!ly.yh) ly.yh = {

    }

    /**
     * 【公用】文章缓存
     */
    if (!ly.note) ly.note = {
        createTitle:function(type) {
            var data = ly.storage.getSession(type);
            var dataObj = JSON.parse(data);

            console.log(dataObj);
        },
        init:function(type,data) {
            ly.storage.setSession(type,data);
            this.createTitle(type);
        }
    }

    if (!ly.url) ly.url = {

    };

    /**
     * 【公用】HTML5缓存封装
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