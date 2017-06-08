function createMainPage() {
	var win = Ti.UI.createWindow({
		title : 'سیب ',
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var container = Ti.UI.createView({
		backgroundColor : '#d7fecd',
		layout : 'vertical',
		width : Ti.UI.FILL,
		top : 0,
	});
	
	var imageWrapper = Ti.UI.createView({
		backgroundColor : '#d7fecd',
		layout : 'horizontal',
		width : '80%',
		height : Ti.UI.SIZE,
		left : '10%',
		right : '10%',
	});
	
	var topView = Ti.UI.createView({
		backgroundColor : '#005414',
		height : '50dp',
		top : 0,
	});
	var Label1 = Ti.UI.createLabel({
		text : 'یک تصویر را در نظر بگیرید ',
		color : '#fff',
		font : {
			fontSize : '22dp'
		},
		top : '15dp',
		textAlign : 'center'
	});
	var image1 = Ti.UI.createImageView({
		image : 'images/Kiwi.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image2 = Ti.UI.createImageView({
		image : 'images/Watermelon.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image3 = Ti.UI.createImageView({
		image : 'images/Cherry.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image4 = Ti.UI.createImageView({
		image : 'images/Pomegranate.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image5 = Ti.UI.createImageView({
		image : 'images/Apple.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image6 = Ti.UI.createImageView({
		image : 'images/Cantaloupe.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image7 = Ti.UI.createImageView({
		image : 'images/Banana.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image8 = Ti.UI.createImageView({
		image : 'images/Orange.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image9 = Ti.UI.createImageView({
		image : 'images/Grape.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image10 = Ti.UI.createImageView({
		image : 'images/Pear.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image11 = Ti.UI.createImageView({
		image : 'images/Cocount.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var image12 = Ti.UI.createImageView({
		image : 'images/Strawberry.png',
		left : '7%',
		width : '25%',
		top : '10dp'
	});
	var actionBar;
	win.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (!win.activity) {
				alert('Can not access to the actinbar');
			} else {
				actionBar = win.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
				}
			}
			actionBar.onHomeIconItemSelected = function() {
				win.close();
			};
		}
	});
	var button = Ti.UI.createButton({
		title : 'صفحه بعد',
		backgroundColor : '#a3fa81',
		color : '#012d0c',
		font : {
			fontSize : '18dp'
		},
		bottom : 0,
		width : Ti.UI.FILL,
		borderRadius : '10dp'
	});
	var File1 = require('/Page1');
	button.addEventListener('click', function(e) {
		var win = File1.createPage1({
		});
		win.open();
	});

	topView.add(Label1);
	container.add(topView);
	imageWrapper.add(image1);
	imageWrapper.add(image2);
	imageWrapper.add(image3);
	imageWrapper.add(image4);
	imageWrapper.add(image5);
	imageWrapper.add(image6);
	imageWrapper.add(image7);
	imageWrapper.add(image8);
	imageWrapper.add(image9);
	imageWrapper.add(image10);
	imageWrapper.add(image11);
	imageWrapper.add(image12);
	
	container.add(imageWrapper);

	win.add(container);
	win.add(button);
	return win;
}

//win.open();
exports.createMainPage = createMainPage;

