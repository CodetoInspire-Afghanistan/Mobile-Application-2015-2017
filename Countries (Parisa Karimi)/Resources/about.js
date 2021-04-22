function createAbout(params) {
	var winAbout = Ti.UI.createWindow({
		title : 'راهنمای ابزار',
		color : 'white',
		orientationModes : [Ti.UI.PORTRAIT],
	});
	var container_Description = Ti.UI.createScrollView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		layout : 'vertical',
		backgroundColor : 'white'
	});

	var logo_about = Ti.UI.createImageView({
		image : 'images/logo_about.png',
		borderRadius : '3dp',
		height : '130dp',
		width : '240dp',
		top : '1%',
		backgroundColor : 'red'
	});

	var nameSoftware = Ti.UI.createLabel({
		text : 'بازتاب کشورها',
		color : 'red',
		top : '2%',
		right : '30%',
		font : {
			fontSize : '23dp',
		}
	});
	var lineView = Ti.UI.createView({
		top : '0.2%',
		width : '75%',
		height : '0.4%',
		backgroundColor : 'red',
		borderRadius : '2dp'
	});
	var labelAbout = Ti.UI.createLabel({
		text : 'این اپلکشن شامل جزئیات ذیل می باشد:\n•	پرچم کشور\n•	نام لاتین\n•	پایتخت \n•	مذهب \n•	زبان رسمی\n•	 نوع حکومت \n•	مساحت\n•	جمعیت \n•	واحد پول \n•	کد کشور\nبصورت صفحات جداگانه اطلاعات هر کشور نمایش داده میشود.که با کلیک کردن مجدد میتوان اطلاعات مربوطه همان کشوررا مشاهده کرد.درصورتیکه به انترنت وصل باشید میتوانید با کلیک کردن روی باتون (مشاهده در ویکی پدیا)اطلاعات را بصورت کامل حاصل کنید.\n همچنان میتوانید از قسمت جستجو زودتر وآسان تر به اطلاعات همان کشوردسترسی نمایید.منبع که این اطلاعات فراهم شده از ویب سایت ویکی پدیا است، برای تکمیل کردن این برنامه درنسخه های بعدی میتوانید نظریات خود را ایمیل کنید.\nتهیه کننده:پریسا کریمی یکی ازمحصلان بخش نتورک دانشکده کامپیوترساینس دانشگاه هرات  این اپلکشن شامل یکصد و نود شش کشور با معلومات فوق که در آن ارایه شده است تحت نظراستاد عالم  دانشیار تهیه و تدوین نموده ام.\nجای دارد که سپاس گذاری وتشکری خاص از استاد  لایق زحمت کش، استادعالم  دانشیار و خانم فرشته فروغ ومرکز کود نویسی CTI نمایم، که این زمینه را برای ما شاگردان فراهم نموده اند.' + '\n\nنسخه 1.0' + '\nتوسعه دهنده: پریسا کریمی' + '\n©2017 Code To Inspire',
		color : 'black',
		textAlign : 'right',
		right : '2%',
		top : '1%',
		font : {
			fontSize : '13dp',
		}
	});
	var emailButton = Ti.UI.createButton({
		title : 'ارسال نظریات',
		width : '45%',
		height : '5%',
		top : '3%',
		bottom : '3%',
		right : '25%',
		borderRadius : '3dp',
		backgroundColor : '#c7b299',
		color : 'black',
		font : {
			fontSize : '14dp',
		}
	});

	var emailDialog = Ti.UI.createEmailDialog({
		subject : '',
		toRecipients : ['parisakarimi143@gmail.com'],
		messageBody : ''
	});
	emailButton.addEventListener('click', function(e) {
		emailDialog.open();
	});
	var actionBar;
	winAbout.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			actionBar = winAbout.activity.actionBar;
			if (actionBar) {
				actionBar.displayHomeAsUp = true;
			}
			actionBar.onHomeIconItemSelected = function(e) {
				winAbout.close();
			};
		}
	});
	container_Description.add(logo_about);
	container_Description.add(lineView);
	container_Description.add(nameSoftware);
	container_Description.add(labelAbout);
	container_Description.add(emailButton);
	winAbout.add(container_Description);
	return winAbout;
}

exports.createAbout = createAbout;
