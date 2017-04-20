window.onload=function() {
    var frm = document.getElementById('frmApplication');
    var txtName = document.getElementById('name');

    var txtAge = document.getElementById('age');

    txtAge.onkeydown=function(ev) {
        console.log(ev);
        if (!(ev.key.match(/\d/) || ev.key=='Backspace')) {ev.preventDefault();}
    }

    frm.onsubmit=function(ev) {
        // if (!txtName.value.match(/^[a-z \'\-]+$/i)) {
        //     reportError("Wrong name!");
        //     ev.preventDefault();
        //     return;
        // }
        // if (!txtAge.value.match(/^[1]?\d{1,2}$/i)) { reportError("Wrong age!"); ev.preventDefault(); return;}
    }
}


function reportError(errMsg) {
    var err=document.getElementById('lblError');

    err.innerHTML=errMsg;
}
