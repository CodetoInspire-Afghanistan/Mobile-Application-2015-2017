function createTreatmentWin(params) {
	var db = Ti.Database.install('assets/Drugs.sqlite', 'Drugs.sqlite');

	var win = Ti.UI.createWindow({
		title : params.winTitle,
		layout : 'vertical',
		backgroundColor : '#f8ead9'
	});

	var tableData = [];

	function createRow(param) {
		var row = Ti.UI.createTableViewRow({
			className : 'definition',
			height : Ti.UI.SIZE,
			filter : param.name,
			id : param.id,
		});

		var rowView = Ti.UI.createView({
			top : '2dp',
			bottom : '6dp',
			right : 0,
			left : '11dp',
			width : '94%',
			height : '55dp',
			backgroundColor : 'white',
			borderRadius : 5,
		});

		var leftImage = Ti.UI.createImageView({
			image : param.image,
			height : '55dp',
			width : '55dp',
			left : 0,
			borderRadius : 5,
		});

		var title = Ti.UI.createLabel({
			text : param.name,
			color : 'black',
			font : {
				fontSize : '18dp',
			},
			right : '2%'
		});

		rowView.add(leftImage);
		rowView.add(title);
		row.add(rowView);
		tableData.push(row);
	}

	var drug = db.execute('select * from Sickness');

	while (drug.isValidRow()) {
		createRow({
			name : drug.fieldByName('Name'),
			id : drug.fieldByName('ID'),
			image : drug.fieldByName('Image'),
		});
		drug.next();
	}

	var search;
	if (Ti.Platform.osname == 'android' && Ti.Platform.Android.API_LEVEL > 11) {

		search = Ti.UI.Android.createSearchView({
			hintText : ' جستجو......',
		});

		if (win.activity) {
			win.activity.onCreateOptionsMenu = function(e) {
				var menu = e.menu;
				var searchItem = menu.add({
					title : 'Search',
					actionView : search,
					icon : Ti.Android.R.drawable.ic_menu_search,
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
				});
			};
		}
	}

	var tableView = Ti.UI.createTableView({
		top : '2%',
		data : tableData,
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		right : 0,
		search : search,
		filterAttribute : 'filter'
	});

	var definition = require('/definition');

	tableView.addEventListener('click', function(e) {
		var definitionWin = definition.createDefinitionWin({
			id : e.row.id,
			db : db,
			table: 'Sickness',
			name: e.row.filter
		});

		definitionWin.open();
	});
	var actionBar;
	win.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {

			if (!win.activity) {
				alert('Can\'t Access the action bar');
			} else {
				actionBar = win.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
				}
				actionBar.onHomeIconItemSelected = function() {
					win.close();
				};
			}
		}
	});

	win.add(tableView);
	return win;

}

exports.createTreatmentWin = createTreatmentWin;

