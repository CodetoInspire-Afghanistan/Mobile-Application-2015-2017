function CreateAboutWin() {

	var aboutWin = Ti.UI.createWindow({
		title : 'درباره برنامه',
		backgroundColor : '#f4f2e8',
		orientationModes : [Ti.UI.PORTRAIT],
		layout : 'vertical'
	});
	
	var containerScrollView = Ti.UI.createScrollView({
		layout: 'vertical'
	});
	
	aboutimage = Ti.UI.createImageView({
		image : 'image/universityIcon.png',
		height : '130dp',
	});
	var aboutLabel = Ti.UI.createLabel({
		text : 'خداوند منان را سپاس که در ساختن این برنامه یاریم کرد.برنامه معرفی نامه پوهنتون هرات به منظور معرفی و شناخت هر چه بیشتر پوهنتون هرات و پوهنحئی های آن میباشد.بدون شک داشتن اطلاعات کافی در مورد مکان تحصیلی یک امر بدیهی ایست بدین وسیله دراین برنامه سعی به عمل آمده است که تمام معلومات ضروری را در مورد پوهنتون هرات و پوهنحئی های آن ودیپارتمنت های مربوطه هر پوهنحئی جمع آوری نماید که حاوی اطلاعات در مورد پوهنتون هرات و معرفی هر فاکولته و تعداد دیپارتمنت های آن و به ترتیب هر دیپارتمنت  را به معرفی گرفته است. ',
		textAlign : 'justify',
		right : '2dp',
		color : 'black',
		font : {
			fontSize : '16dp'
		},
	});

	introducingLabel = Ti.UI.createLabel({
		text : 'این برنامه توسط فرشته عباسی محصل فاکولته کمپیوتر ساینس ساخته شده و بنده از همکاری محترم استاد عالم دانشیار اظهار سپاس مینمایم.امید مورداستفاده دانشجویان عزیز قرار گرفته وازین پس بدون هیچ ترس و نگرانی و باداشتن معلومات کافی رشته دلخواه خودراانتخاب نمایند. \nمنابع و مواخذ: ویب سایت و پوهنحئی های پوهنتون هرات ' + '\nنسخه 1.0' + '\nتوسعه دهنده: فرشته عباسی' + '\n© 2017 Code To Inspire',
		textAlign : 'right',
		right : '2dp',
		color : 'black',
		font : {
			fontSize : '16dp'
		},
		width: Ti.UI.FILL
	});

	var emailButton = Ti.UI.createButton({
		title : 'ارسال نظریات',
		height : '40dp',
		width : Ti.UI.SIZE,
		backgroundColor : '#234b8c',
		borderRadius : 5,
		font : {
			fontSize : '18dp'
		},
		color : 'white',
	});

	var emailDialog = Ti.UI.createEmailDialog({
		subject : 'Herat University',
		toRecipients : ['Freshtehabbasi1212@gmail.com'],
		messageBody : 'نظریه تان را درج  نمایید.'
	});

	emailButton.addEventListener('click', function(e) {
		emailDialog.open();
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

	containerScrollView.add(aboutimage);
	containerScrollView.add(aboutLabel);
	containerScrollView.add(introducingLabel);
	containerScrollView.add(emailButton);
	
	aboutWin.add(containerScrollView);
	aboutWin.open();
	
	return aboutWin;
}

exports.CreateAboutWin = CreateAboutWin;