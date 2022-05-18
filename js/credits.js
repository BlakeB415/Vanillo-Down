/** credit: w3schools */

var creditsModal = document.getElementById("credits-modal");
var creditsButton = document.getElementById("credits-button");

var creditsSpan = document.getElementById("credits-close");

creditsButton.onclick = function() {
	console.log('e');
	creditsModal.style.display = "block";
}

creditsSpan.onclick = function() {
	creditsModal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == creditsModal) {
		creditsModal.style.display = "none";
	}
}