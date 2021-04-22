function createPage3(params) {
	var win = Ti.UI.createWindow({
		title : 'سیب ',
		orientationModes:[Ti.UI.PORTRAIT]
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
		top : 0,
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
	var image4 = Ti.UI.createImageView({
		image : 'images/pomegranate.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image5 = Ti.UI.createImageView({
		image : 'images/apple.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image6 = Ti.UI.createImageView({
		image : 'images/cantaloupe.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image9 = Ti.UI.createImageView({
		image : 'images/grape.png',
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
	var image11 = Ti.UI.createImageView({
		image : 'images/cocount.png',
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
	
	var Page4 = require('/Page4');
	yesButton.addEventListener('click', function(e) {
		params.page3 = true;
		var win4 = Page4.createPage4(params);
		win4.open();
	});
	noButton.addEventListener('click', function(e) {
		var win4 = Page4.createPage4(params);
		win4.open();
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
	
	imageWrapper.add(image4);
	imageWrapper.add(image5);
	imageWrapper.add(image6);
	imageWrapper.add(image9);
	imageWrapper.add(image10);
	imageWrapper.add(image11);
	imageWrapper.add(image12);
	
	container.add(titleWrapper);
	container.add(imageWrapper);
	
	win.add(container);
	win.add(buttonWrapper);
	
	return win;
}

exports.createPage3 = createPage3;
