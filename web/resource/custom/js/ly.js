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
        }
    }


    if (!ly.yh) ly.yh = {

    }

    /**
     * 【公用】文章缓存
     */
    if (!ly.note) ly.note = {
        createWjTitle:function(type) {
            var data = ly.storage.getSession(type);
            var note_wj = JSON.parse(data).wj;
            if (note_wj.length == 0) {
                alert("无文集");
                return;
            }
            for (var i=0 ; i<note_wj.length ; i++) {
                if (i == 0) {
                    $("#wjTitle").append('<li class="ly-nav-active nav-item ly-nav-item position-relative">' +
                        '<a class="nav-link text-truncate"  href="javascript:void(0)" onclick="ly.note.openWz('+ ly.CACHE_BASE_HUAISHU_NOTE +','+ note_wj[i].id +')">'+ note_wj[i].bt +'</a>' +
                        '<i class="icon ion-ios-gear position-absolute ly-nav-i">' +
                        '</i></li>').fadeIn("slow");
                } else {
                    $("#wjTitle").append('<li class="ly-nav-nav-item ly-nav-item position-relative">' +
                        '<a class="nav-link text-truncate"  href="javascript:void(0)" onclick="ly.note.openWz('+ ly.CACHE_BASE_HUAISHU_NOTE +','+ note_wj[i].id +')">'+ note_wj[i].bt +'</a>' +
                        '<i class="icon ion-ios-gear position-absolute ly-nav-i" hidden>' +
                        '</i></li>').fadeIn("slow");
                }
            }
        },
        createWzTitle:function(type,wjId) {
            var data = ly.storage.getSession(type);
            var note = JSON.parse(data);
            console.log(note['1']);
        },
        openWz:function(type,wjId) {
            alert(wjId);
        },
        init:function(type,data) {
            ly.storage.setSession(type,data);
            this.createWjTitle(type);
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