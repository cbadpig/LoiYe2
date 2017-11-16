$(function () {
    ly.url.userId();
});
function init() {
    $.ajax({
        url:'ajax/note/wzwj/',
        type:'POST',
        dataType:'json',
        success:function (data) {
            alert("创建成功");
        },
        error:function () {
            alert("创建失败");
        }
    });
}
function wjSubmit() {
    var wjName = $("#wjName").val();

    $.ajax({
        url:'ajax/note/wzwj/insertWjTitle/',
        type:'POST',
        dataType:'json',
        data:{
            bt:wjName
        },
        success:function (data) {
            alert("创建成功");
        },
        error:function () {
            alert("创建失败");
        }
    });
    
}