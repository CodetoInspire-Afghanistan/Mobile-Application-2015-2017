var db = Ti.Database.install('assets/trafficlite.sqlite', 'trafficlite.sqlite');
//crreateing window-------------------------------------------------------------
var window = Ti.UI.createWindow({
	title : 'راهنمایی ترافیک',
	backgroundColor : '#C2BCBF',
	color : 'white',
	layout : 'vertical',
	orientationModes : [Ti.UI.PORTRAIT],
});
//create mnue-------------------------------------------------------
var activity;
window.addEventListener('open', function(e) {
	if (window.activity) {
		activity = window.activity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var aboutMenu = menu.add({
				title : 'در باره ی ما',
				showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER,
			});
			aboutMenu.addEventListener('click', function(e) {
				var Aboutme = require('/about');
				var newWindow = Aboutme.CreateAboutme();
				newWindow.open();
			});
		};
	}
});
//create imageTop------------------------------------------------------------
var topImages = Ti.UI.createImageView({
	images : ['img/kabulcity1.png', 'img/heratcity.png', 'img/kandharcity.png', 'img/kabulcity.png'],
	duration : 2000,
	width : Ti.UI.FILL,
});
topImages.start();

//window winNotice-------------------------------------------------------------------
var notice = require("/winNotice");
//reqire winIdiom--------------------------------------------------------------------
var idiom = require("/winIdiom");
//window winPause---------------------------------------------------------------------

var tableSign = [];

function createrow(params) {
	var rows = Ti.UI.createTableViewRow({
		width : '66dp',
		height : '70dp',
		className : 'TableRow',
		category : params.category,
	});
	var Continer = Ti.UI.createView({
		left : '5dp',
		right : '5dp',
		bottom : '2dp',
		borderRadius : '4dp',
		backgroundColor : 'white',
	});
	var title = Ti.UI.createLabel({
		text : params.discription,
		right : '100dp',
		top : '25dp',
		height : Ti.UI.SIZE,
		font : {
			fontSize : '18dp',
			fontWeight : 'bold'
		},
		color : 'black',
		textAlign : 'center',
	});
	var rightImage = Ti.UI.createImageView({
		image : params.image,
		right : '2%',
		bottom : '11dp',
		top : '5dp',
		height : '60dp',
	});
	Continer.add(title);
	Continer.add(rightImage);
	rows.add(Continer);
	tableSign.push(rows);
}

var rowData = db.execute('select * from Category');
while (rowData.isValidRow()) {
	createrow({
		id : rowData.fieldByName('ID'),
		category : rowData.fieldByName('Category'),
		image : rowData.fieldByName('Image'),
		discription : rowData.fieldByName('Discription'),
	});
	rowData.next();
}
var tableView = Ti.UI.createTableView({
	data : tableSign,
	top : '3dp'
});
var newWin;
tableView.addEventListener('click', function(e) {

	if (e.index == 0) {
		newWin = idiom.createWindowIdiom();
	} else {
		newWin = notice.createWindow({
			category : e.row.category
		});
	}
	newWin.open();
});

//adding---------------------------------------------------------------------------------
window.add(topImages);
window.add(tableView);
setTimeout(function() {
	window.open();
}, 2000);
