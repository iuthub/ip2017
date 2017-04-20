
$(document).ready(function(){
    $('#btnLoad').click(function(){
        // $.ajax({
        //     url: 'story.txt',
        //     dataType: 'text',
        //     type: 'GET',
        //     error: function() {alert('Error Happened!')},
        //     success: function(msg) {
        //         $('#story').html(msg);
        //     }
        // });


        // $.get('story.txt',  function(msg) {
        //         $('#story').html(msg);
        //     });

        // $('#story').load('story.txt');

        $.getJSON('student.json', function(obj) {
            console.log(obj);

            $('#story').append($('<h1/>').html(obj.groupName));

            var ul = $('<ul/>').attr('class', 'red_list');
            for(var i=0;i<obj.students.length;i++) {
                ul.append($('<li/>').html(obj.students[i].name));
            }
            $('#story').append(ul);
        });
    });


})




// window.onload=function(){
//     var btn=document.getElementById('btnLoad');
//     btn.onclick=function(){
//         var xhttp=new XMLHttpRequest();

//             xhttp.onreadystatechange=function() {
//                 if (this.readyState==4 && this.status==200) {
//                     var story=document.getElementById('story');

//                     story.innerHTML=this.responseText;
//                 }
//             }

//             xhttp.open('GET', 'story.txt', true);
//             xhttp.send();
//         // var story=document.getElementById('story');

//         // story.innerHTML=this.responseText;
//     }

// }


























