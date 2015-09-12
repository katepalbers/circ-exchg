function setLayout() {
	var w = window.innerWidth;
	var x = document.getElementsByClassName("figure-lg");
	var i;
	for (i = 0; i < x.length; i++) {
	    x[i].style.width = w + "px";
}}