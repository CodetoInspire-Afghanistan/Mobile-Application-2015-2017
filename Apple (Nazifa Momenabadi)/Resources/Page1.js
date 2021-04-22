function createPage1() {
	var win = Ti.UI.createWindow({
		title : 'سیب',
		orientationModes : [Ti.UI.PORTRAIT],
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
		right : '10%'
	});

	var titleWrapper = Ti.UI.createView({
		backgroundColor : '#005414',
		height : '50dp',
	});
	var title = Ti.UI.createLabel({
		text : 'آیادراین صفحه دیده میشود؟',
		color : '#fff',
		font : {
			fontSize : '22dp'
		},
		top : '15dp',
		textAlign : 'center'
	});
	var image1 = Ti.UI.createImageView({
		image : 'images/kiwi.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image3 = Ti.UI.createImageView({
		image : 'images/cherry.png',
		left : '7%',
		top : '7%',
		width : '25%',
	});
	var image5 = Ti.UI.createImageView({
		image : 'images/apple.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image8 = Ti.UI.createImageView({
		image : 'images/orange.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image10 = Ti.UI.createImageView({
		image : 'images/pear.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image12 = Ti.UI.createImageView({
		image : 'images/strawberry.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image13 = Ti.UI.createImageView({
		image : 'images/mango.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image14 = Ti.UI.createImageView({
		image : 'images/apricot.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var yesButton = Ti.UI.createButton({
		title : 'بله',
		backgroundColor : '#a3fa81',
		color : '#012d0c',
		font : {
			fontSize : '18dp'
		},
		left : '1%',
		width : '49%',
		borderRadius : 10
	});

	var buttonWrapper = Ti.UI.createView({
		layout : 'horizontal',
		width : '100%',
		height: Ti.UI.SIZE,
		bottom : 0,
	});

	var noButton = Ti.UI.createButton({
		title : 'خیر',
		backgroundColor : '#a3fa81',
		color : '#012d0c',
		font : {
			fontSize : '18dp'
		},
		left : '0.5%',
		width : '49%',
		borderRadius : 10
	});

	var page2 = require('/Page2');
	var values = {
		page1 : false,
		page2 : false,
		page3 : false,
		page4 : false,
	};
	yesButton.addEventListener('click', function(e) {
		values.page1 = true;
		var winPage2 = page2.createPage2(values);
		winPage2.open();
	});
	noButton.addEventListener('click', function(e) {
		var winPage2 = page2.createPage2(values);
		winPage2.open();
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

	titleWrapper.add(title);

	buttonWrapper.add(noButton);
	buttonWrapper.add(yesButton);

	imageWrapper.add(image1);
	imageWrapper.add(image3);
	imageWrapper.add(image5);
	imageWrapper.add(image8);
	imageWrapper.add(image10);
	imageWrapper.add(image12);
	imageWrapper.add(image13);
	imageWrapper.add(image14);

	container.add(titleWrapper);
	container.add(imageWrapper);

	win.add(container);
	win.add(buttonWrapper);

	return win;
}

exports.createPage1 = createPage1;

