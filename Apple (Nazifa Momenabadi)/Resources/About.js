function createAbout() {
	var win = Ti.UI.createWindow({
		backgroundColor : 'white',
		title : 'در باره سیب',
		orientationModes : [Ti.UI.PORTRAIT],
		layout : 'vertical'
	});

	var lame = Ti.UI.createLabel({
		text : '\n\nنسخه 1.0' + 
		'\nتوسعه دهنده: نظیفه مؤمن آبادی' + 
		'\n© 2017 Code To Inspire',
		font : {
			fontSize : '16dp'
		},
		color : 'black',
		textAlign : 'right'
	});

	var image = Ti.UI.createImageView({
		image : 'images/apple-icon.png',
		top : '20dp',
	});

	var feedbackButton = Ti.UI.createButton({
		title : 'ارسال نظرات',
		width : '300dp',
		backgroundColor : '#37e03b',
		borderRadius : '5dp',
		top : '80dp',
		color : 'black',
		font : {
			fontSize : '20dp'
		}
	});
	var emailDialog = Ti.UI.createEmailDialog({
		subject : 'نظرات وپیشنهادات در مورد سیب ',
		toRecipients : ['nazifa.momenabadi54@gmail.com'],
		messageBody : 'لطفاباارسال نظرات وپیشنهادات خود مارا درایجاد نسخه های برتر یاری نمایید'
	});
	feedbackButton.addEventListener('click', function(e) {
		emailDialog.open();
	});

	var actionBar;
	win.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (win.activity) {
				actionBar = win.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						win.close();
					};
				}
			}

		}
	});

	win.add(image);
	win.add(lame);
	win.add(feedbackButton);

	return win;
}

exports.createAbout = createAbout; 