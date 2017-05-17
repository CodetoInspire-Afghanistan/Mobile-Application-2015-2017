var win = Ti.UI.createWindow({
	layout : 'vertical',
	backgroundColor : '#f8ead9',
	title : 'سلامتی با طب سنتی'
});

var image = Ti.UI.createImageView({
	image : 'image/h.jpg',
	height : '230dp',
	width : '95%',
	top : '5%',
	borderRadius : 8
});

var treatmentsB = Ti.UI.createButton({
	title : 'درمان طبیعی بیماری ها',
	backgroundColor : 'white',
	font : {
		fontSize : '18dp'
	},
	color : 'black',
	height : '38dp',
	width : '185dp',
	margin : 'center',
	top : '15%',
	borderRadius : 5

});

var drugPropertiesB = Ti.UI.createButton({
	title : 'خواص دارو های گیاهی',
	backgroundColor : 'white',
	font : {
		fontSize : '18dp'
	},
	color : 'black',
	height : '38dp',
	width : '185dp',
	margin : 'center',
	top : '2%',
	borderRadius : 5
});

var treatments = require('/sickness');
var drugProperties = require('/drug');

treatmentsB.addEventListener('click', function(e) {
	var treatmentWin = treatments.createTreatmentWin({
		winTitle : e.source.getTitle(),
	});

	treatmentWin.open();
});

drugPropertiesB.addEventListener('click', function(e) {
	var drugWin = drugProperties.createDrugWin({
		winTitle : e.source.getTitle(),
	});

	drugWin.open();
});

var activity;
win.addEventListener('open', function(e) {
	if (win.activity) {
		activity = win.activity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var aboutMenu = menu.add({
				title : 'در باره برنامه',
			});

			aboutMenu.addEventListener('click', function(e) {
				var about = require('/about');
				var newWindow = about.CreateAboutWin();
				newWindow.open();
			});
		};
	}
});

win.add(image);
win.add(treatmentsB);
win.add(drugPropertiesB);

win.open();
