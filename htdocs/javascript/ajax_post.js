$(document).ready(function(){
    $('#btnSave').click(function(){
        var userId=12;
        var userName="Sarvar";

        var data="storyText=" + $('#story').val();

        data +="&userId=" + userId;
        data +="&userName=" + userName;

        $('#lblStatus').html("Sending request...");

        $.ajax({
            url: "form_submit.php",
            type: "POST",
            data: data,
            dataType: "text",
            error: function(){$('#lblStatus').html('Some error happened!')},
            success: function(resp) {
                $('#lblStatus').html(resp);
            }
        });

    });

});
