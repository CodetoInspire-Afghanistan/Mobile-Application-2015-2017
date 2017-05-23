function CreateAboutWindow() {
	var aboutWindow = Ti.UI.createWindow({
		backgroundColor : '#f0e7d8',
		title : 'درباره برنامه',
		orientationModes : [Ti.UI.PORTRAIT],
	});
	var descriptionContainer = Ti.UI.createView({
		height : '95%',
		width : '96%',
		backgroundColor : '#e5d9ce',
		layout : 'vertical',
		borderRadius : 4
	});

	var Logo = Ti.UI.createImageView({
		image : 'Images_Recipe/img/logo.png',
		height : '130dp',
		borderRadius : 4,
		top : '1%'
	});
	var lineView = Ti.UI.createView({
		width : '79%',
		height : '0.3%',
		backgroundColor : '#646699',
		borderRadius : 2,
		top : '0.01%'
	});
	var appNameLabel = Ti.UI.createLabel({
		text : 'طعم اصیل غذاهای افغانی',
		color : '#5c0f8c',
		font : {
			fontSize : '17dp',
			fontFamily : 'Infinit_Stroke.otf'
		}
	});
	var informationLabel = Ti.UI.createLabel({
		text : 'این نرم افزار دستورپخت غذاهای اصیل افغانی با شیوه صریح  میباشد که رسته از غذاهای خوشمزه افغانی بوده و هر رسته ازغذاها دارای انواع گوناگون ازهمان غذا را دارد و هر گونه از غذاها با مواد لازم و دستور پختش با شیوه صریح  وجود دارد.\nبا نصب این نرم افزار روی گوشی هایتان میتوانید ازگوش دادن به ویدیو های آشپزی و یا از خرید کتاب های متعدد آشپزی رهایی پیدا کنید ودر هر زمان ومکان از این نرم افزار استفاده کنید.\nسمیعه محمدی هستم و من یک محصل در پوهنتون هرات در پوهنڅی کمپیوتر ساینس در رشته نتورک و سیکیوریتی میباشم. .',
		textAlign : 'right',
		right : '2%',
		color : '#463628',
		font : {
			fontSize : '15dp',
			fontFamily : 'Infinit_Stroke.otf'
		}
	});
	var gratitiudeLabel = Ti.UI.createLabel({
		text : '\nسپاس ازاستاد عالم دانشیار و خانم فرشته فروغ.\n',
		textAlign : 'center',
		color : '#7b6856',
		font : {
			fontSize : '15dp',
			fontFamily : 'Infinit_Stroke.otf'
		}
	});
	
	var buildLabel = Ti.UI.createLabel({
		text : '\n نسخه 1.0'+
		'\nتوسعه دهنده: سمیعه محمدی'+
		'\n© 2017 Code To Inspire',
		textAlign : 'center',
		color : '#7b6856',
		font : {
			fontSize : '15dp',
			fontFamily : 'Infinit_Stroke.otf'
		},
		bottom: '10dp'
	});
	var commentLabel = Ti.UI.createLabel({
		text : 'شما میتوانید نظریات و پیشنهادات تان را به ما بفرستید و برای در خواست ساختن برنامه با ما به تماس شوید.',
		color : 'black',
		textAlign : 'right',
		right : '2%',
		font : {
			fontSize : '15dp',
			fontFamily : 'Infinit_Stroke.otf'
		}
	});
	var commentContainer = Ti.UI.createView({
		height : '40%',
		width : '60%',
		backgroundColor : 'red',
		top : '75%'
	});
	var commentButton = Ti.UI.createButton({
		title : 'ارسال نظریات',
		height : '7%',
		width : '35%',
		backgroundColor : '#dac79f',
		borderRadius : 5
	});

	var emailDilog = Ti.UI.createEmailDialog({
		subject : 'Afghani Foods',
		toRecipients : ['samiahmohammadi13@gmail.com'],
		messageBody : ''
	});
	commentButton.addEventListener('click', function(e) {
		emailDilog.open();
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
	
	commentContainer.add(commentContainer);
	
	descriptionContainer.add(Logo);
	descriptionContainer.add(lineView);
	descriptionContainer.add(appNameLabel);
	descriptionContainer.add(informationLabel);
	descriptionContainer.add(gratitiudeLabel);
	descriptionContainer.add(commentLabel);
	descriptionContainer.add(commentButton);
	descriptionContainer.add(buildLabel);
	
	aboutWindow.add(descriptionContainer);
	return aboutWindow;
}

exports.CreateAboutWindow = CreateAboutWindow;
