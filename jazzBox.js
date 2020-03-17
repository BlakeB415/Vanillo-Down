//Adds the incredible jazzBox + functionality to change the source material and volume. Garbage JS being shit out...

//Adds a new jazzBox
	function addJazzBox(src) {
		var newJazzBox = document.createElement("audio");
		newJazzBox.setAttribute("src",src);
		newJazzBox.setAttribute("id","jazzBox");
		document.body.appendChild(newJazzBox);
		return "jazzBox has been added!";
	}
//Adds the default jazzBox
	addJazzBox("http://77.68.84.201/stream/1/");
	var stopMessage = "[STOP JAZZ]";
	
//Get the "jazzBox" element, mute it.
	var jazzBox = document.getElementById('jazzBox');
	jazzBox.muted = true;

//Function to reset the volume
	function jazzBoxVolume(vol) {
		jazzBox.volume = vol;
		return "Volume has been set to " + vol;
	}
	
//Function to reset the source file
	function jazzBoxSrc(src) {
		jazzBox.src = src;
		jazzBox.setAttribute("loop", "loop");
		stopMessage = "[STOP MUSIC]";
		return "Song has been changed to " + src;
	}
	
//Function to change the stop message
	function jazzBoxStopMessage(msg) {
		stopMessage = msg;
		return 'Set stop message to: ' + stopMessage;
	}

//Logic for the start/stop button
	var jazzButton = document.getElementById("jazzButton");
	var originalText = document.getElementById("jazzButton").innerHTML;
	jazzButton.style.cssText = "text-decoration:underline;cursor:pointer;";
	
	if (jazzButton.addEventListener) {
		jazzButton.addEventListener("click", function() {
			if (jazzBox.muted == true) {
				jazzBox.volume = 0.2;
				jazzBox.muted = false;
				jazzBox.play();
				jazzButton.innerHTML = stopMessage;
			}
			else {
				jazzBox.volume = 0;
				jazzBox.muted = true;
				jazzBox.pause();
				jazzButton.innerHTML = originalText;
			}
		}, false);
	} else {
		jazzButton.attachEvent("onclick", function() { 
			if (jazzBox.muted == true) {
				jazzBox.volume = 0.2;
				jazzBox.muted = false;
				jazzBox.play();
				jazzButton.innerHTML = stopMessage;
			}
			else {
				jazzBox.volume = 0;
				jazzBox.muted = true; //Nice ;-)
				jazzBox.pause();
				jazzButton.innerHTML = originalText;
			}
		});
	}
	
//Function to change status
	function jazzBoxStatus(st) {
		if (st == "start") {
			jazzBox.volume = 0.2;
			jazzBox.muted = false;
			jazzBox.play();
			jazzButton.innerHTML = stopMessage;
			return "Song has been started!";
		}
		if (st == "stop") {
			jazzBox.volume = 0;
			jazzBox.muted = true;
			jazzBox.pause();
			jazzButton.innerHTML = originalText;
			return "Song has been stopped!";
		}
	}