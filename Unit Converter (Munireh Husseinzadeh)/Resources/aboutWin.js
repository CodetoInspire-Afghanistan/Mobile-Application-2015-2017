function createAbout(){
	
	var window = Ti.UI.createWindow({
		title: 'مبدل واحدات',
		backgroundColor: 'white',
		layout: 'vertical',
		orientationModes: [Ti.UI.PORTRAIT]
	});
	
	var description = Ti.UI.createLabel({
		text: 'اپلیکیشن "مبدل واحدات" یک برنامه کاربردی و مفید است که برای تبدیل کردن واحدات مختلف به یکدیگر استفاده میشود. کار کردن با این برنامه بسیار آسان بوده و هر شخصی بدون نیاز به مهارت خاص میتواند ازین برنامه به راحتی استفاده کند. \n هدف از ساختن این اپلیکیشن, ساده کردن تبدیل واحدات و کمک به کسانی است که تبدیل نمودن واحدات به یکدیگر برایشان کاری دشوار است. \n ناگفته نباید گذاشت که این برنامه را به همکاری استادم آقای دانشیار تهیه کرده ام. \nدر آخر میخواهم از استادم آقای عالم دانشیار و خانم فرشته فروغ که زمینه یادگیری مبایل اپلیکیشن را برایمان فراهم نمودند تشکری کنم.\nامیدوارم که این برنامه برایتان مفید واقع شود.'
		+'\n\nنسخه 1.0'+
		'\nتوسعه دهنده: منیره حسین زاده'+
		'\n© 2017 Code To Inspire',
		color: '#606266',
		textAlign: 'right',
		font: {
				fontFamily: 'B KOODAK BOLD',
				fontSize: '21%'
			},
		height: Ti.UI.SIZE,
		width: '90%',
		top: '8dp'
	});
	
	var feedbackButton = Ti.UI.createButton({
		title: 'نظریات شما',
		color: 'white',
		top: '10dp'
	});
	
	var emailDialoge = Ti.UI.createEmailDialog({
		subject: 'نظریات شما درباره این برنامه',
		toRecipients: ['m.hosseinzada10@gmail.com'],
		messageBody: 'برای ارتقا و پیشرفت کارایی برنامه با ما همکاری کنید'
	});
	
	feedbackButton.addEventListener('click', function(e){
		emailDialoge.open();
	});
	
	var activity;
	window.addEventListener('open', function(e){
		if(window.activity){
			activity = window.activity;
				
				var actionBar = activity.actionBar;
				if(actionBar){
				actionBar.displayHomeAsUp = true;
				actionBar.onHomeIconItemSelected = function(){
					window.close();
				};
			}	
		}
	});
	
	window.add(description);
	window.add(feedbackButton);
	
	return window;
}



exports.createAbout = createAbout;