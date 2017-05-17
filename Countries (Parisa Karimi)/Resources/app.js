var db = Ti.Database.install('assests/Country.sqlite', 'Country.sqlite');
var window = Ti.UI.createWindow({
	title : 'بازتاب کشورها',
	backgroundColor : 'white',
	orientationModes : [Ti.UI.PORTRAIT],
});
var tableData = [];
function createRow(params) {
	var tableRow = Ti.UI.createTableViewRow({
		className : 'countries',
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		filter : params.name,
		id : params.id,
		name : params.name
	});
	var Continer = Ti.UI.createView({
		top : '3dp',
		left : '3dp',
		right : '3dp',
		bottom : '2dp',
		borderRadius : '2dp',
		backgroundColor : ' #c7b299',
	});
	var title = Ti.UI.createLabel({
		color : 'black',
		text : params.name,
		top : '5dp',
		right : '110dp',
		font : {
			fontSize : '17dp',
		},
	});
	var rightImage = Ti.UI.createImageView({
		image : params.image,
		name : 'rightImage',
		right : 0,
		height : '35dp',
		width : '50dp',
	});
	Continer.add(title);
	Continer.add(rightImage);
	tableRow.add(Continer);
	tableData.push(tableRow);
}

var rowData = db.execute('select * from country');
while (rowData.isValidRow()) {
	createRow({
		id : rowData.fieldByName('ID'),
		name : rowData.fieldByName('Name'),
		image : rowData.fieldByName('RightImage'),
	});
	rowData.next();
}

var search;
if (Ti.Platform.osname == 'android' && Ti.Platform.Android.API_LEVEL > 11) {
	search = Ti.UI.Android.createSearchView({
		hintText : 'جستجو'
	});
	if (window.activity) {
		window.activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var searchItem = menu.add({
				title : 'جستجو',
				actionView : search,
				icon : Ti.Android.R.drawable.ic_menu_search,
				showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
			});
			var about = menu.add({
				title : 'راهنمای ابزار',
				showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER,
			});
			about.addEventListener('click', function(e) {
				var about = require('/about');
				var newWindow = about.createAbout({

				});
				newWindow.open();
			});
		};
	}
}

var tableView = Ti.UI.createTableView({
	data : tableData,
	search : search,
	filterAttribute : 'filter',
	height : Ti.UI.FILL,
	width : Ti.UI.FILL,

});

var Countries = require('/Countries');
tableView.addEventListener('click', function(e) {
	var data = Countries.createData({
		db : db,
		id : e.row.id,
		name : e.row.name
	});
	data.open();
});
window.add(tableView);
window.open();
