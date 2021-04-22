function createAboutWindow() {
	var aboutWindow = Ti.UI.createWindow({
		backgroundColor : 'white',
		title : 'About Application',
		layout : "vertical",
		backgroundImage : "image/home/white.jpg",
		orientationModes : [Ti.UI.PORTRAIT]
	});
	var imageView = Ti.UI.createImageView({
		image : "image/home/cti.png",
		top : "20dp",
		height : "25%",
		width : Ti.UI.SIZE,

	});
	var textView = Ti.UI.createView({
		height : Ti.UI.SIZE,
		top : "10dp",
		width : Ti.UI.Fill,
		backgroundColor : "#3d1951",

	});

	var labelAbout = Ti.UI.createLabel({
		color : "white",
		textAlign : "center",
		font : {
			fontSize : "13dp",
		},
		text : "This application is all about code to inspire organization. First and above all, I praise Allah, the almighty, for granting me the opportunity and capability to successfully complete this Application.  \nThis Application is in its current state because of the guidance and help of several people, I have been inspired and supported by many individuals. I would like to thank Mr. Aalem Daneshyar and Ms. Fereshteh Forough, for their continuous support and valuable suggestions throughout my project. " + '\n\n\nVersion: 1.0' + '\nBy: Fatema Alizada' + '\n© 2017 Code To Inspire',
	});
	var actionBar;
	aboutWindow.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (aboutWindow.activity) {
				actionBar = aboutWindow.activity.actionBar;

				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function(e) {
						aboutWindow.close();
					};
				}
			}
		}
	});
	aboutWindow.add(imageView);
	aboutWindow.add(textView);
	textView.add(labelAbout);
	return aboutWindow;
}

exports.createAboutWindow = createAboutWindow;
