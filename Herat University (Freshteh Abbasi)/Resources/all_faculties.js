function createFacultiesWin(param) {

	var tableViewWin = Ti.UI.createWindow({
		title : 'لیست فاکولته ها',
		backgroundColor : '#f4f2e8',
		orientationModes : [Ti.UI.PORTRAIT],
	});

	var data = [];
	var row = param.db.execute('select * from Faculty');
	while (row.isValidRow()) {
		createFacultyRow({
			id : row.fieldByName('ID'),
			leftImage : row.fieldByName('smallImage'),
			title : row.fieldByName('title'),
		});
		row.next();
	}

	function createFacultyRow(params) {
		var facultyRow = Ti.UI.createTableViewRow({
			height : '40dp',
			width : Ti.UI.FILL,
			filter : params.title,
			id : params.id,
			className : 'faculty',
		});
		var tableViewTitleLabel = Ti.UI.createLabel({
			text : params.title,
			font : {
				fontSize : '20dp',
			},
			textAlign : 'center',
			color: '#1c1c1c'
		});

		var tableViewImage = Ti.UI.createImageView({
			image : params.leftImage,
			left : '2%',
			borderRadius : 3,
			height : '40dp',
			width : '40dp'
		});

		var rowView = Ti.UI.createView({
			backgroundColor : '#e8e7de',
			height : Ti.UI.SIZE,
			width : Ti.UI.FILL,
		});

		rowView.add(tableViewTitleLabel);
		rowView.add(tableViewImage);
		facultyRow.add(rowView);
		data.push(facultyRow);
	}

	var search;
	if (Ti.Platform.osname == 'android' && Ti.Platform.Android.API_LEVEL > 11) {
		search = Ti.UI.Android.createSearchView({
			hintText : ' جستجو...',
		});
		if (tableViewWin.activity) {
			tableViewWin.activity.onCreateOptionsMenu = function(e) {
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
	var facultyTableView = Ti.UI.createTableView({
		data : data,
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		top : 0,
		search : search,
		filterAttribute : 'filter'
	});

	var faculty = require('/Faculty');
	facultyTableView.addEventListener('click', function(e) {
		var fwin = faculty.createWin({
			id : e.row.id,
			db : param.db
		});
		fwin.open();
	});

	var actionBar;
	tableViewWin.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (tableViewWin.activity) {
				actionBar = tableViewWin.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						tableViewWin.close();
					};
				}
			}
		}
	});

	tableViewWin.add(facultyTableView);

	return tableViewWin;
}

exports.createFacultiesWin = createFacultiesWin;