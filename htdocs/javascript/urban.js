$(document).ready(function(){
    var svc="http://api.urbandictionary.com/v0/define";
    $('#btnSearch').click(function(){
        var args={
            term: $('#txtWord').val()
        }

        $.ajax({
            url: svc,
            type: 'GET',
            dataType: 'json',
            data: args,
            error: function() {},
            success: function(obj) {
                for (var i=0; i<obj.list.length;i++) {
                    var cObj=obj.list[i];
                    var d = $('<div/>');


                    d.append($('<p/>').html(cObj.definition));
                    d.append($('<p/>').html(cObj.example));
                    d.append($('<a>More...</a>').attr('href',cObj.permalink));

                    $('#container').append(d);
                }
            }
        });

        // $.getJSON(svc, {term: $('#txtWord').val()}, function(obj) {
        //         $('#container').html('');
        //         for (var i=0; i<obj.list.length;i++) {
        //             var cObj=obj.list[i];
        //             var d = $('<div/>');


        //             d.append($('<p/>').html(cObj.definition));
        //             d.append($('<p/>').html(cObj.example));
        //             d.append($('<a>More...</a>').attr('href',cObj.permalink));

        //             $('#container').append(d);
        //         }
        // });
    });
});
