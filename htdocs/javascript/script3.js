window.onload=function() {
	var frm=document.getElementById("exampleform");
	var state=document.getElementById("state");
	var demo=document.getElementById("demo");
	var btnLoadStory=document.getElementById("btnLoadStory");

	state.onkeydown=function(ev) {
		console.log(ev.key);

		if (!(ev.key.match(/\d/) || ev.key=="Backspace")) ev.preventDefault();
	}

	frm.onsubmit=function(ev) {
		if (!state.value.match(/^[A-Z]{2}$/ig)) ev.preventDefault();
	}


	btnLoadStory.onclick=function(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					demo.innerHTML = xhttp.responseText;
				}
			}
		xhttp.open("GET", "story.txt", true);
		xhttp.send();
	}
}