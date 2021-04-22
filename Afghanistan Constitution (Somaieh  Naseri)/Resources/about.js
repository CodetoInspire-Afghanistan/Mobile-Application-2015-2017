function CreateAboutWindow() {
	var aboutWindow = Ti.UI.createWindow({
		title : 'درباره',
		orientationModes : [Ti.UI.PORTRAIT]
	});
	var aboutDescriptionView = Ti.UI.createView({
		height : '100%',
		width : '98%',
		borderRadius : 3,
		top : '0%',
		backgroundColor : '#bbbfbc',
		font : {
			fontSize : "20dp"
		},
	});

	var aboutDescription = Ti.UI.createLabel({
		text : ' این اپلیکشن راجع به قانون اساسی افغاستان بوده که شامل ۱۲فصل قانون اساسی میباشد٬که این فصل ها ۱۶۲ ماده را شامل میباشد٬که به کمک استاد عالم دانشیار، در مرکز کد نویسی CTI طرح شده است.' + '\n\nنسخه 1.0' + '\nتوسعه دهنده: سمیه ناصری' + '\n© 2017 Code To Inspire',
		color : 'black',
		textAlign : 'center',
		top : '50dp',
		font : {
			fontSize : "21dp",
		},
	});

	var actionBar;
	aboutWindow.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			actionBar = aboutWindow.activity.actionBar;
			if (actionBar) {
				actionBar.displayHomeAsUp = true;
			}
			actionBar.onHomeIconItemSelected = function(e) {
				aboutWindow.close();
			};
		}

	});
	var feedbackButton = Ti.UI.createButton({
		height : '60dp',
		width : '120dp',
		title : 'ارسال نظریات',
		top : '80%',
		borderRadius : '6dp',
		backgroundCbackgroundColor : '#bbbfbc'
	});
	var emailDilog = Ti.UI.createEmailDialog({
		subject : 'Afghanistan Constitution',
		toRecipients : ['Somaiehnaseri112233@gmail.com'],
		messageBody : 'Your message...'
	});
	feedbackButton.addEventListener('click', function(e) {
		emailDilog.open();
	});
	aboutDescriptionView.add(feedbackButton);
	aboutDescriptionView.add(aboutDescription);
	aboutWindow.add(aboutDescriptionView);

	return aboutWindow;
}

exports.CreateAboutWindow = CreateAboutWindow;
