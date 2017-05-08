function createPlaywindowWin(params) {
	var win = Ti.UI.createWindow({
		title : params.currentPlaywindow.name,
		backgroundColor : '#b57de0',
		orientationModes : [Ti.UI.PORTRAIT],
		layout: 'vertical'
	});

	var musicControlWrapper = Ti.UI.createView({
		layout: 'vertical',
		height: Ti.UI.FILL,
		top: '10dp',
		bottom: 0
	});

	var progressBar = Ti.UI.createProgressBar({
		min : 0,
		message : "00:00:00",
		color : "purple",
		width : "75%"
	});

	var VWrapper = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		layout : "horizontal",
	});

	var playButton = Ti.UI.createButton({
		backgroundImage : "img/play-button.png",
		width : "50dp",
		left : "10dp",
		bottom : "5dp"
	});

	var stopButton = Ti.UI.createButton({
		backgroundImage : "img/sstop.png",
		backgroundSelectedImage : 'img/stop-on.png',
		width : "50dp",
		left : "10dp",
		bottom : "5dp"
	});

	var pauseButton = Ti.UI.createButton({
		backgroundImage : "img/pause.png",
		width : "50dp",
		left : "10dp",
		bottom : "5dp"
	});

	var forwardButton = Ti.UI.createButton({
		backgroundImage : "img/forward.png",
		backgroundSelectedImage : 'img/forward-on.png',
		width : "50dp",
		left : "10dp",
		bottom : "5dp",
	});

	var rewindButton = Ti.UI.createButton({
		backgroundImage : "img/rewind.png",
		backgroundSelectedImage : 'img/rewind-on.png',
		width : "50dp",
		left : "10dp",
		bottom : "5dp",
	});

	var musicImage = Ti.UI.createImageView({
		image : params.currentPlaywindow.image,
		width : Ti.UI.FILL,
		top : 0
	});

	var sound = Ti.Media.createAudioPlayer({
		url : params.currentPlaywindow.description,
		allowBackground : true,
		volume : 1,
	});

	var hour;
	var minute;
	var second;

	//making function

	playButton.addEventListener('click', function(e) {
		playOrPause('play');
	});

	pauseButton.addEventListener('click', function(e) {
		playOrPause('pause');
	});

	stopButton.addEventListener('click', function(e) {
		stopPlaying();
	});

	var previousInterval;

	rewindButton.addEventListener('touchstart', function(e) {
		previousInterval = setInterval(previous, 400);
	});

	rewindButton.addEventListener('touchend', function(e) {
		clearInterval(previousInterval);
	});

	var nextInterval;

	forwardButton.addEventListener('touchstart', function(e) {
		nextInterval = setInterval(next, 400);
	});

	forwardButton.addEventListener('touchend', function(e) {
		clearInterval(nextInterval);
	});

	sound.addEventListener('complete', function(e) {
		stopPlaying();
	});

	sound.addEventListener('progress', function(e) {
		progressBar.setValue(sound.time);
		second = Math.floor((sound.time / 1000) % 60);
		minute = Math.floor(((sound.time / 1000) / 60) % 60);
		hour = Math.floor((((sound.time / 1000) / 60) / 60) % 60);
		progressBar.setMessage((hour > 9 ? hour : "0" + hour) + ":" + (minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ? second : "0" + second));

	});
	var actionBar;
	win.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (!win.activity) {
				alert("con not open");
			} else {
				actionBar = win.activity.actionBar;
				if (actionBar) {

					actionBar.displayHomeAsUp = true;
				}
				actionBar.onHomeIconItemSelected = function() {
					win.close();
					stopPlaying();
				};
			}
		}

	});

	function playOrPause(action) {

		var interval;

		if (action == 'play') {
			if (!sound.playing) {
				sound.play();
				progressBar.setMax(sound.duration);
				playButton.setBackgroundImage('img/play-on.png');
				pauseButton.setBackgroundImage('img/pause.png');
			}
		} else if (!sound.paused) {
			sound.pause();
			playButton.setBackgroundImage('img/play-button.png');
			pauseButton.setBackgroundImage('img/pause-on.png');
			clearInterval(interval);
		}
	}

	function stopPlaying() {
		if (sound.playing || sound.paused) {
			sound.stop();
			playButton.setBackgroundImage('img/play-button.png');
			pauseButton.setBackgroundImage('img/pause.png');
			progressBar.setMessage("00:00:00");
			sound.setTime(0);
			progressBar.setValue(0);
			if (Ti.Platform.name == 'android') {
				sound.release();
			}
		}
	}

	function next() {
		if (sound.playing && (sound.time) + 10000 < sound.duration) {
			sound.setTime(sound.time + 10000);
		}
	}

	function previous() {
		if (sound.playing) {
			sound.setTime(sound.time - 10000);
		}
	}
	
	win.addEventListener('android:back', function(e){
		sound.stop();
		sound.release();
		win.close();
	});

	sound.addEventListener('complete', function(e){
		sound.release();
	});

	VWrapper.add(rewindButton);
	VWrapper.add(playButton);
	VWrapper.add(pauseButton);
	VWrapper.add(stopButton);
	VWrapper.add(forwardButton);

	musicControlWrapper.add(progressBar);
	musicControlWrapper.add(VWrapper);
	
	win.add(musicImage);
	win.add(musicControlWrapper);

	return win;
}

exports.createPlaywindowWin = createPlaywindowWin; 