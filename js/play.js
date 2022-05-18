/** credit: w3schools */

var playModal = document.getElementById("play-modal");
var playButton = document.getElementById("play-button");

var playSpan = document.getElementById("play-close");

playButton.onclick = function() {
	playModal.style.display = "block";
}

playSpan.onclick = function() {
	playModal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == playModal) {
		playModal.style.display = "none";
	}
}