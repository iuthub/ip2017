
window.onload=function() {
    var btnChangeMe=document.getElementById("btnChangeMe");
    var btnChangeWithDelay=document.getElementById("btnChangeWithDelay");

    var rbtns=document.getElementsByName('ducks');

    btnChangeMe.onclick=changeCaption;
    btnChangeWithDelay.onclick=changeWithDelay;

    for (var i=0;i<rbtns.length;i++) {
        rbtns[i].onchange=function() {
            alert(this.value);
        }
    }
}


function changeCaption() {
    this.style.color="red";
}

function greeting() {
    var name=prompt("Your name?");
    if (confirm("Are you sure, " + name + "?")) {
        alert("Good Morning, " + name);
    } else {
        alert("Good Morning, Anonymous User!");
    }
}


function changeMe() {
    var txtBox = window.document.getElementById("myTextBox");
    var pBox = document.getElementById("myText");
    var hval = document.getElementById("stateOfForm").value;

    location.href="http://www.google.com";
    pBox.innerHTML += hval;

    if (pBox.style.color=="red") {
        pBox.style.color="blue";
    } else {
        pBox.style.color="red";

    }
}

function changeWithDelay() {
    n=1;
    t=setInterval(changeContent("Ta-da! "), 1000);

    output = document.getElementById('output');
    output.innerHTML="Wait 3 seconds..."
}

function changeContent(txt) {

    //currying in function-orineted programming
    //
    return function() {
        if (n>=10) clearInterval(t);

        n += 1;

        output.innerHTML += txt;

        if (output.style.color=="red") {
            output.style.color="blue";
            output.style.fontSize='20pt';
        } else {
            output.style.color="red";
            output.style.fontSize='15pt';
        }
    }
}
