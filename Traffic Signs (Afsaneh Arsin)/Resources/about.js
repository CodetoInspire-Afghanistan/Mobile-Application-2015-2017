function CreateAboutme(){
	var win=Ti.UI.createWindow({
		backgroundColor:'white',
		title:' در باره ی ما',
		orientationModes:[Ti.UI.PORTRAIT],
	});
	
	var containerView=Ti.UI.createView({
	height:Ti.UI.FILL,
	layout:'horizontal'
	
});
var imageTop = Ti.UI.createImageView({
		image : 'images/a (31).png',
		top:'15dp',
		right:'5dp',
		left:'116dp',
		bottom:'5dp',
		
	});
var lable=Ti.UI.createLabel({
		text:'این اپلیکشن که تحت عنوان "راهنمایی ترافیک" می باشد جهت معرفی علایم ترافیکی توسط افسانه آرسین نوشته شده، و جای دارد تشکری نمایم از استاد محترم عالم دانشیار صاحب که با من همکاری کردن خانم فرشته فروغ که این مرکز کود نویسی را برای دختران افغان ایجاد کردن و همچنان از فامیل محترم خود که من را تشویق کردن تا توانستم با موفقیت این اپلیکشن را بسازم. منتظر نظریات پیشنهادات و انتقادات شما عزیزان هستم.'+
		' ',
		font:{
			fontSize:'18dp'
		},
		color:'black',
		textAlign:'right',
		top:'10dp',
		right:'5dp',
		left:'5dp',
	});


	var emailbotton=Ti.UI.createButton({
	title:'ارسال نظریات ',
	font:{
		fontize:'18dp',
	    fontWeight:'bold',
	},
	width:'150dp',
	top:'10%',
	color:'black',
	left:'110dp',
	right:'20dp',
	borderRadius:'10dp',
	bottom:'40dp',
	backgroundColor:'#C2BCBF'
	
});
 var emaildilogs=Ti.UI.createEmailDialog({
 	subject:'Hello',
 	toRecipients:['afsaneharsin@gmail.com'],
 	messageBody:'Dear Afsaneh Arsin'
 });
 emailbotton.addEventListener('click',function(e){
 	emaildilogs.open();
 });
 
var actionBar;
	win.addEventListener('open',function(e){
		if(Ti.Platform.osname == 'android'){
			if(!win.activity){
				alert("con not open");
			}else{
			 	actionBar = win.activity.actionBar;
			 	if(actionBar){
			 
			 		actionBar.displayHomeAsUp = true;
			 	}
			 	actionBar.onHomeIconItemSelected = function(){
			 		win.close();
			 	};
			}
		}
	
});
    containerView.add(imageTop);
	containerView.add(lable);
	containerView.add(emailbotton);
	win.add(containerView);
	
	return win;
}

exports.CreateAboutme=CreateAboutme;
