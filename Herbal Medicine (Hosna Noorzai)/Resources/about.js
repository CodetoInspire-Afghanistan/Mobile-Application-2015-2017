function CreateAboutWin() {
	var aboutWin = Ti.UI.createWindow({
		layout : 'vertical',
		backgroundColor : '#f8ead9',
		title : 'در باره برنامه'
	});

	var label = Ti.UI.createLabel({
		text : 'در این برنامه سعی در معرفی تعدادی از دارو های گیاهی و درمان طبیعی بیماری ها با استفاده از دارو های گیاهی شده است. \n\n با تشکر از استادان گرامی عالم دانشیار و فرشته فروغ، و اعضای مرکز Code To Inspire \n\n جهت ارایه پیشنهادات و انتقادات خود میتوانید با ما در ارتباط باشید.' + '\n\nنسخه 1.0' + '\nتوسعه دهنده: حُسنا امین نورزی' + '\n©2017 Code To Inspire',
		font : {
			fontSize : '16dp'
		},
		top : '10dp',
		left : '5dp',
		right : '5dp',
		color : 'black',
		textAlign : 'right',

	});

	var feedbackButton = Ti.UI.createButton({
		title : 'نظریات شما',
		height : Ti.UI.SIZE,
		width : '34%',
		top : '100dp',
		color : 'black',
		backgroundColor : 'white',
		borderRadius : '15dp',
		font : {
			fontSize : '20dp'
		}
	});

	var emailDialoge = Ti.UI.createEmailDialog({
		subject : 'نظریات شما در مورد این برنامه',
		toRecipients : ['hosna.aminnoorzai@gmail.com'],
		messageBody : 'برای ارتقا و پیشرفت کارایی با ما همکار باشید'

	});

	feedbackButton.addEventListener('click', function(e) {
		emailDialoge.open();
	});

	var actionBar;
	aboutWin.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (aboutWin.activity) {
				actionBar = aboutWin.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						aboutWin.close();
					};
				}
			}
		}
	});

	aboutWin.add(label);
	aboutWin.add(feedbackButton);
	return aboutWin;
}

exports.CreateAboutWin = CreateAboutWin;
