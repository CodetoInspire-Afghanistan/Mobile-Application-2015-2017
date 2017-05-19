var db = Ti.Database.install('assets/AfghanConstitution.sqlite', 'AfghanConstitution.sqlite');
var d = db.execute('select count(*) as total from Sections');
var firstWindow = Ti.UI.createWindow({
	backgroundColor : 'white',
	title : 'قانون اساسی افغانستان',
	orientationModes : [Ti.UI.PORTRAIT],
	layout:'vertical'
});
var headerImage = Ti.UI.createImageView({
	image : 'img/logoImage.png',
	width : '100%',
	height : '250dp',

});
var titleLabel = Ti.UI.createLabel({
	text : 'قانون اساسی افغانستان',
	color : '#3333CC',
	font : {
		fontSize : "27dp"
	},
	
});

var descriptionLabel = Ti.UI.createLabel({
	text : 'قانون اساسی جدید  جمهوری اسلامی افغانستان توسط لویه جرگه تاریخی  ٢٢قوس الی ۱۴ جدی ۱۳۸۲هجری شمسی منعقده کابل در  ۱۲فصل و  ۱۶۲   ماده تصویب شد.',
	textAlign : 'center',
	top : '10dp',
	color : 'black',
	font : {
		fontSize : "20dp"
	},
});
var sectionButton = Ti.UI.createButton({
	backgroundColor : '#bbbfbc',
	color : 'black',
	title : 'فصل ها',
	height : '45dp',
	width : '200dp',
	borderRadius : '6dp',
	top : '20dp',
	right : '90dp',
	name : 'title',

	font : {
		fontSize : "20dp",
	},

});

var section = require('/section');
sectionButton.addEventListener('click', function(e) {
	var sectionWindow = section.createSectionWin();
	sectionWindow.open();
});

var activity;
firstWindow.addEventListener('open', function(e) {
	if (firstWindow.activity) {
		activity = firstWindow.activity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var aboutMenu = menu.add({
				title : 'در باره برنامه',
			});
			aboutMenu.addEventListener('click', function(e) {
				var about = require('/about');
				var newWindow = about.CreateAboutWindow();
				newWindow.open();
			});
		};
	}
});

firstWindow.add(headerImage);
firstWindow.add(titleLabel);
firstWindow.add(descriptionLabel);
firstWindow.add(sectionButton);
firstWindow.open();
