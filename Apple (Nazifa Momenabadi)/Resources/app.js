var win = Ti.UI.createWindow({
	backgroundColor : 'black',
	title : 'سیب ',
	orientationModes:[Ti.UI.PORTRAIT]
});
var activity;
win.addEventListener('open', function(e) {
	if (win.activity) {
		activity = win.activity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var about = menu.add({
				title : 'درباره...',
			});
			about.addEventListener('click', function(e) {
				var about = require('/About');
				var aboutWin = about.createAbout({});
				aboutWin.open();
			});
		};
	};
});
var iconImage = Ti.UI.createImageView({
	image : 'images/apple-icon.png',
	top : '60dp'
});
var title = Ti.UI.createLabel({
	text : 'من میتوانم آنچه را شما در ذهن دارید برایتان نشان دهم!',
	color : 'white',
	font : {
		fontSize : '30dp'
	},
	textAlign : 'center'
});
var startButton = Ti.UI.createButton({
	title : 'شروع',
	backgroundColor : '#a3fa81',
	width : '300dp',
	borderRadius : '5dp',
	bottom : '80dp',
	color : 'black',
	font : {
		fontSize : '25dp'
	}
});
var mainPage = require('/MainPage');
startButton.addEventListener('click', function(e) {
	var mainPageWin = mainPage.createMainPage({
	});
	mainPageWin.open();
});
win.add(title);
win.add(iconImage);
win.add(startButton);
win.open();
