function result(params){
	var resultWin = Ti.UI.createWindow({
		backgroundColor : '#d7fecd',
		title :'سیب',
		orientationModes:[Ti.UI.PORTRAIT]	
	});
	
	var titleWrapper = Ti.UI.createView({
		backgroundColor : '#005414',
		height : '50dp',
		top : 0,
	});
	var title = Ti.UI.createLabel({
		text : 'تصویر مورد نظر شما ',
		color : '#fff',
		font : {
			fontSize : '25dp'
		},
		top : '15dp',
		textAlign : 'center'
	});
	
	var resultArray = [
	{image: 'images/result-kiwi.png', label:'کیوی است '},
	{image: 'images/result-watermelon.png', label:'تربوز است ' },
	{image: 'images/result-cherry.png', label: 'آلو بالو است '},
	{image:'images/result-pomegranate.png',label: 'انار است '},
	{image:'images/result-apple.png',label: 'سیب است  '},
	{image:'images/result-cantaloupe.png',label: 'طالبی است  '},
	{image:'images/result-banana.png',label: 'کیله است  '},
	{image: 'images/result-orange.png',label: 'مالته است  '},
	{image: 'images/result-grape.png',label: 'انگور است '},
	{image: 'images/result-pear.png',label: 'ناک است  '},
	{image: 'images/result-cocount.png',label: 'نارگیل است' },
	{image:'images/result-strawberry.png',label: 'توت زمینی است  '},
	];

	
	var label12 = Ti.UI.createLabel({
		color : '#005414',
		font : {
			fontSize : '40dp'
		},
		top : '130dp',
		textAlign : 'center'
	});
	
	var image = Ti.UI.createImageView({
		bottom : '120dp'
	});

	var label = Ti.UI.createLabel({
		color : '#005414',
		font : {
			fontSize : '40dp'
		},
		top : '100dp',
		textAlign : 'right'
	});
	
	var startButton = Ti.UI.createButton({
		title : 'شروع',
		backgroundColor : '#a3fa81',
		color : '#012d0c',
		font : {
			fontSize : '18dp'
		},
		bottom : 0,
		width : '50%',
		borderRadius : '10dp',
		left : '50%'
	});
	var exitButton = Ti.UI.createButton({
		title : 'خروج',
		backgroundColor : '#a3fa81',
		color : '#012d0c',
		font : {
			fontSize : '18dp'
		},
		bottom : 0,
		width : '50%',
		borderRadius : '10dp',
		left : 0
	});
	
	if (params.page1 && (!params.page2) && (!params.page3) && (!params.page4)) {
		setInterval(function() {
			label.setText(resultArray[0].label);
			image.setImage(resultArray[0].image);
		}, 2000);
	} else if (params.page2 && (!params.page1) && (!params.page3) && (!params.page4)) {
		setInterval(function() {
			label.setText(resultArray[1].label);
			image.setImage(resultArray[1].image);
		}, 2000);
		
	} else if (params.page1 && params.page2 && (!params.page3) && (!params.page4)) {
		setInterval(function() {
			label.setText(resultArray[2].label);
			image.setImage(resultArray[2].image);
		}, 2000);
	
	} else if ((!params.page1) && (!params.page4) && params.page3 && (!params.page2)) {
		setInterval(function() {
			label.setText(resultArray[3].label);
			image.setImage(resultArray[3].image);
		}, 2000);
		
	} else if (params.page1 && params.page3 && (!params.page2) && (!params.page4)) {
		setInterval(function() {
			label.setText(resultArray[4].label);
			image.setImage(resultArray[4].image);
		}, 2000);
		
	} else if ((!params.page1) && params.page3 && params.page2 && (!params.page4)) {
		setInterval(function() {
			label.setText(resultArray[5].label);
			image.setImage(resultArray[5].image);
		}, 2000);
		
	} else if ((!params.page1) && (!params.page3) && params.page2 && params.page4) {
		setInterval(function() {
			label.setText(resultArray[6].label);
			image.setImage(resultArray[6].image);
		}, 2000);
		
	} else if (params.page1 && (!params.page3) && params.page2 && params.page4) {
		setInterval(function() {
			label.setText(resultArray[7].label);
			image.setImage(resultArray[7].image);
		}, 2000);
		
	} else if ((!params.page1) && (!params.page2) && params.page3 && params.page4) {
		setInterval(function() {
			label.setText(resultArray[8].label);
			image.setImage(resultArray[8].image);
		}, 2000);
		
	} else if (params.page1 && (!params.page2) && params.page3 && params.page4) {
		setInterval(function() {
			label.setText(resultArray[9].label);
			image.setImage(resultArray[9].image);
		}, 2000);
		
	} else if (params.page3 && (!params.page1) && params.page2 && params.page4) {
		setInterval(function() {
			label.setText(resultArray[10].label);
			image.setImage(resultArray[10].image);
		}, 2000);
		
	} else if (params.page3 && params.page1 && params.page2 && params.page4) {
		setInterval(function() {
			label.setText(resultArray[11].label);
			image.setImage(resultArray[11].image);
		}, 2000);
		
	} else {
		setInterval(function() {
			label.setText('در لیست وجود ندارد!');
		}, 2000);
	}
	
	var mainPage = require('/MainPage');
	var result = require('/Result');
	startButton.addEventListener('click', function(e) {
		var win = mainPage.createMainPage();
		win.open();
	});
	exitButton.addEventListener('click', function(e) {
		win.close();
	});
	
	titleWrapper.add(title);
	resultWin.add(titleWrapper);
	
	resultWin.add(label);
	resultWin.add(image);
	resultWin.add(startButton);
	resultWin.add(exitButton);
	
	var actionBar;
	resultWin.addEventListener('open', function(e) {
		if(Ti.Platform.osname == 'android') {
			if (resultWin.activity) {
				actionBar = resultWin.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						resultWin.close();
					};
				}
			}
		}
	});
	
	return resultWin;
}

exports.result = result;
