var watchID = null;

document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {
	
	var listeningElement = document.getElementById('deviceready');
    listeningElement.setAttribute('style', 'display:none;');
	var receivedElement = document.getElementById('go');
    receivedElement.setAttribute('style', 'display:block;');
	
	startWatch();
}


function startWatch() {
	
	var options = { frequency: 1000 };

	watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}
function onSuccess(heading) {
	
	var element = document.getElementById('test');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
	
	var cssheading = 'rotation:' + heading.magneticHeading + 'deg;';
	
	alert (cssheading);
	
	var compassElement = document.getElementById('compassrose');
	compassElement.setAttribute('style', cssheading);
	
}

// onError: Failed to get the heading
//
function onError() {
	alert('onError!');
}


function frogevent() {
	playAudio("sounds/Frog_Croak.wav");

}


// Audio player
//
var my_media = null;

function playAudio(src) {
	if (device.platform == 'Android') {
		src = '/android_asset/www/' + src;
	}

	var media = new Media(src, success, error_error);

	media.play();
}

function success() {
	// ignore
}

function error_error(e) {
	alert(e.message);
}

