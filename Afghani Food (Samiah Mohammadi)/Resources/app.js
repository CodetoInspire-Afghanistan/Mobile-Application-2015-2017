var db = Ti.Database.install('assets/foodButton.sqlite', 'foodButton.sqlite');
var mainWindow = Ti.UI.createWindow({
	backgroundColor : '#e5d9ce',
	title : 'طعم اصیل غذاهای افغانی',
	layout : 'vertical',
	orientationModes : [Ti.UI.PORTRAIT],
});
var headerImage = Ti.UI.createImageView({
	image : 'Images_Recipe/img/s.png',
	top : '5%',
	width: '95%',
	borderRadius : 6,
});
var buttonsContainer = Ti.UI.createView({
	layout : 'vertical',
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : '13%',
	left : '29%',
	color : '#eaeab2',
});
var foodButton = Ti.UI.createButton({
	title : 'لیست غذاها',
	height : Ti.UI.SIZE,
	width : '66%',
	backgroundColor : '#dac79f',
	borderRadius : 6,
	font : {
		fontSize : '15dp',
		fontFamily : 'Infinite_Stroke.otf',
	},
	color : '#1e1e1e',
});
var aboutFoodButton = Ti.UI.createButton({
	title : 'درباره غذاها',
	height : Ti.UI.SIZE,
	width : '66%',
	color : '#1e1e1e',
	backgroundColor : '#dac79f',
	top : '3%',
	borderRadius : 6,
	font : {
		fontSize : '15dp',
		fontFamily : 'Infinite_Stroke.otf'
	}
});
var exitButton = Ti.UI.createButton({
	title : 'خروج',
	height : Ti.UI.SIZE,
	width : '66%',
	backgroundColor : '#dac79f',
	font : {
		fontSize : '15dp',
		fontFamily : 'Infinite_Stroke.otf'
	},
	top : '3%',
	borderRadius : 6,
	color : '#1e1e1e'
});

var aboutFoodWin = require('/about_food');

/////////////////////////////eventListener
aboutFoodButton.addEventListener('click', function(e) {
	aboutFoodWin.open();
});
var foodCategory = require('/Category_Foods');
foodButton.addEventListener('click', function(e) {
	var foodCategoryWin = foodCategory.List_Foods();
	foodCategoryWin.open();
});
exitButton.addEventListener('click', function(e) {
	mainWindow.close();
});

var About_US = require('/About_US');
var activity;
mainWindow.addEventListener('open', function(e) {
	if (mainWindow.activity) {
		activity = mainWindow.activity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var aboutMenu = menu.add({
				title : 'در باره نرم افزار'
			});
			aboutMenu.addEventListener('click', function(e) {
				var aboutUsWin = About_US.CreateAboutWindow();
				aboutUsWin.open();
			});
		};
	}
});

buttonsContainer.add(foodButton);
buttonsContainer.add(aboutFoodButton);
buttonsContainer.add(exitButton);

mainWindow.add(headerImage);
mainWindow.add(buttonsContainer);
mainWindow.open();
