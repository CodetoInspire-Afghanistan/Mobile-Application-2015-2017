function createPage2(params) {
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
	var image2 = Ti.UI.createImageView({
		image : 'images/watermelon.png',
		left : '7%',
		width : '25%',
		top : '7%'
	});
	var image3 = Ti.UI.createImageView({
		image : 'images/cherry.png',
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
	var image7 = Ti.UI.createImageView({
		image : 'images/banana.png',
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
		height : Ti.UI.SIZE,
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

	var page3 = require('/Page3');
	yesButton.addEventListener('click', function(e) {
		params.page2 = true;
		var winPage3 = page3.createPage3(params);
		winPage3.open();
	});
	noButton.addEventListener('click', function(e) {
		var winPage3 = page3.createPage3(params);
		winPage3.open();
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

	imageWrapper.add(image2);
	imageWrapper.add(image3);
	imageWrapper.add(image6);
	imageWrapper.add(image7);
	imageWrapper.add(image8);
	imageWrapper.add(image11);
	imageWrapper.add(image12);

	buttonWrapper.add(noButton);
	buttonWrapper.add(yesButton);

	container.add(titleWrapper);
	container.add(imageWrapper);

	win.add(container);
	win.add(buttonWrapper);
	return win;
}

exports.createPage2 = createPage2;

