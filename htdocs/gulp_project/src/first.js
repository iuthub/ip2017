var $=require('jquery');

require('jqueryui');

$(function(){
    $('.sortable').sortable({
        update: function(ev, ui) {
            ui.item.effect('shake');
        }
    });

    alert('Hello World');


})
