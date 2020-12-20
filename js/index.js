var words = document.getElementsByClassName("word");
for (var i = 0; i < words.length; i++) {
	words[i].style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

var clickme = document.getElementById("clickme");
var map = document.getElementById("map");
var info = document.getElementById("info");
var back = document.getElementById("back");
clickme.onclick = function () {
	map.style.display = "none";
	info.style.display = "block";
}
back.onclick = function () {
	map.style.display = "block";
	info.style.display = "none";
}
