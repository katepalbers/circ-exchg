function setLayout() {
	var w = window.innerWidth;
	var x = document.getElementsByClassName("figure-lg");
	var i;
	for (i = 0; i < x.length; i++) {
	    x[i].style.width = w + "px";
		}
	};

document.getElementById('scroll').style.overflowX = "hidden";	

function scrollNext() {
	var wdth = document.getElementById('scroll').offsetWidth;
	var scrl = wdth * .8;
	var scrollPos = document.getElementById('scroll').scrollLeft;
	$('#scroll').animate({ scrollLeft: scrollPos + scrl }, 500);
	};

function scrollPrev() {
	var wdth = document.getElementById('scroll').offsetWidth;
	var scrl = wdth * .8;
	var scrollPos = document.getElementById('scroll').scrollLeft;
	$('#scroll').animate({ scrollLeft: scrollPos - scrl }, 500);
	}