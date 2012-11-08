$('#page2').live('pageinit',function(){

    $("#playaudio").live('tap', function() {
        // Note: two ways to access media file: web and local file        
        var src = '../res/sounds/Frog_Croak.wav';
   
  
        
        // local (on device): copy file to project's /assets folder:
        // var src = '/android_asset/spittinggames.m4a';
        
        playAudio(src);
		
		$('#go').animate({"opacity": "1"}, "fast");
		
    });

    $("#pauseaudio").live('tap', function() {
        pauseAudio();
    });
    
    $("#stopaudio").live('tap', function() {
        stopAudio();
    });
});




