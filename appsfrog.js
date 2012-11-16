function initAppsFrog() {
}


var watchID = null;

function startWatch() {

	// Update compass every 3 seconds
	var options = { frequency: 3000 };

	watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}
function onSuccess(heading) {
	var element = document.getElementById('heading');
	element.innerHTML = 'Heading: ' + heading;
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

