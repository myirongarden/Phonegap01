function init() {




}


function frogevent() {
        playAudio("Frog_Croak.wav");
		
		$('#go').animate({"opacity": "1"}, "fast");

}


// Audio player
        //
        var my_media = null;
        var mediaTimer = null;

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

