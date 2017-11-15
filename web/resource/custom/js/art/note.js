

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
            alert(1213);
        },
        error:function () {
            alert(32341);
        }
    });
    
}