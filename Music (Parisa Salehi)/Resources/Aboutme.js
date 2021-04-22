function CreateAboutme() {
	var win = Ti.UI.createWindow({
		backgroundColor : '#d4a9f9',
		title : 'در باره',
		orientationModes : [Ti.UI.PORTRAIT]
	});
	var containerView = Ti.UI.createView({
		height : Ti.UI.FILL,
		layout : 'vertical'
	});
	var img = Ti.UI.createImageView({
		image : 'img/icon_music.png',
		width : '40%',
		height : '30%',
		top : 0,
	});
	var textlabel = Ti.UI.createLabel({
		text : 'اپلیکشن آهنگ سرا:',
		font : {
			fontSize : '16dp'
		},
		color : 'black',
		textAlign : 'right',
		top : '7dp',
		right : '1%',
		left : '22dp',
	});

	var lable = Ti.UI.createLabel({
		text : ' این اپلیکشن شامل آهنگ های افغانی,اهنگ های ایرانی,آهنگ های ترکی,آهنگ های هندی وآهنگ های انگلیسی است.\n ' + 
		'ساخته شده توسط پریسا صالحی با همکاری استاد عالم دانشیار.... \n' 
		+ 'CodeToInspireبا تشکر از استاد عالم دانشیار,استاد فرشته فروغ و ' +  
		'\nجهت ارائه پیشنهادات خود می توانید با ما در تماس شوید'+
		'\n\nنسخه 1.0'+
		'\nتوسعه دهنده: پریسا صالحی'+
		'\n©2017 Code To Inspire',
		font : {
			fontSize : '14dp'
		},
		color : 'black',
		textAlign : 'right',
		top : '7dp',
		right : '1%',
		left : '20dp',
	});

	var emailbotton = Ti.UI.createButton({
		title : 'ارسال نظریه ',
		width : '30%',
		top : '5%',
		color : 'black',
		borderRadius : 10,
		textAlign : 'center',
		backgroundColor : '#b57de0',
		font : {
			sontSize : '40dp'
		},

	});
	var emaildilogs = Ti.UI.createEmailDialog({
		subject : '',
		toRecipients : ['parisasalehi211@gmail.com'],
		messageBody : ''
	});
	emailbotton.addEventListener('click', function(e) {
		emaildilogs.open();
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
	containerView.add(img);
	containerView.add(textlabel);
	containerView.add(lable);

	containerView.add(emailbotton);
	win.add(containerView);

	return win;
}

exports.CreateAboutme = CreateAboutme; 