var mainWindow = Ti.UI.createWindow({
	title: 'مبدل واحدات',
	backgroundColor: '#ffffd1',
	layout: 'vertical',
	orientationModes: [Ti.UI.PORTRAIT]
});
////////////////////////////////////////////making image

var topImage = Ti.UI.createImageView({
	image: 'images/topImage.png',
	height: '50%'
});

////////////////////////////////////////////making container for buttons

var buttonsContainerA = Ti.UI.createView({
	layout: 'horizontal',
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL,
	bottom: '10%dp',
});

////////////////////////////////////////////making buttons

var lengthButton = Ti.UI.createImageView({
	image: 'images/length.png',
	backgroundColor: 'transparent',
	left: '20dp',
	top: '20dp',
});

var temperatureButton = Ti.UI.createImageView({
	image: 'images/temperature.png',
	backgroundColor: 'transparent',
	left: '20dp',
	top: '20dp',
});

var timeButton = Ti.UI.createImageView({
	image: 'images/time.png',
	backgroundColor: 'transparent',
	left: '20dp',
	top: '20dp',
});

var speedButton = Ti.UI.createImageView({
	image: 'images/speed.png',
	backgroundColor: 'transparent',
	left: '20dp',
	top: '20dp',
});

var areaButton = Ti.UI.createImageView({
	image: 'images/area.png',
	backgroundColor: 'transparent',
	left: '20dp',
	top: '20dp',
});

var exitButton = Ti.UI.createImageView({
	image: 'images/exit.png',
	backgroundColor: 'transparent',
	left: '20dp',
	top: '20dp',
});

//////////////////////////////////////////////////adding event to the buttons

var lengthWin = require('/lengthWin');
var timeWin = require('/timeWin');
var tempWin = require('/temperatureWin');
var speedWin = require('/speedWin');
var areaWin = require('/areaWin');
var aboutWin = require('/aboutWin');

lengthButton.addEventListener('click', function(e){
		var windowOfLength = lengthWin.createLength();
		windowOfLength.open();
});

temperatureButton.addEventListener('click', function(e){
	var windowOfTemperature = tempWin.createTemp();
		windowOfTemperature.open();
});

timeButton.addEventListener('click', function(e){
	var windowOfTime = timeWin.createTime();
		windowOfTime.open();
});

speedButton.addEventListener('click', function(e){
	var windowOfSpeed = speedWin.createSpeed();
		windowOfSpeed.open();
});

areaButton.addEventListener('click', function(e){
	var windowOfArea = areaWin.createArea();
		windowOfArea.open();
});

exitButton.addEventListener('click', function(e){
	mainWindow.close();
});

///////////////////////////////////menue

  var activity;
	mainWindow.addEventListener('open', function(e){
		if(mainWindow.activity){
			activity = mainWindow.activity;
			activity.onCreateOptionsMenu = function(e){
				var menu = e.menu;
				var about = menu.add({
				title: 'درباره برنامه'
				});
				
		about.addEventListener('click', function(e){
			var windowOfAbout = aboutWin.createAbout();
			windowOfAbout.open();
		});
				
			};	 
		}
	});
///////////////////////////////////adding to the mainWindowdow

mainWindow.add(topImage);
buttonsContainerA.add(lengthButton);
buttonsContainerA.add(timeButton);
buttonsContainerA.add(temperatureButton);
buttonsContainerA.add(speedButton);
buttonsContainerA.add(areaButton);
buttonsContainerA.add(exitButton);
mainWindow.add(buttonsContainerA);
mainWindow.open();
