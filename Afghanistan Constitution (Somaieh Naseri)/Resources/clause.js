function createClausesWindow(params) {
	var clausesWindow = Ti.UI.createWindow({
		title : params.title,
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var tableData = [];
	function createClausRow(param) {
		var clauses_TableRow = Ti.UI.createTableViewRow({
			className : 'clause',
			height : Ti.UI.SIZE,
			filter : param.description,
			id : param.id,
		});

		var clauseLabel = Ti.UI.createLabel({
			text : param.clause,
			textAlign : 'right',
			right : '10dp',
			color : '#3333CC',
			width : Ti.UI.FILL,
			font : {
				fontSize : '20dp',

			}
		});
	
		var clausesDescription = Ti.UI.createLabel({
			text : param.description,
			textAlign : 'right',
			right : '10dp',
			width : Ti.UI.FILL,
			color : 'black',
			font : {
				fontSize : '17dp',
				color : 'black',
				top : '10dp'
			}
		});
		var clausesView = Ti.UI.createView({
			top : '7dp',
			botton : '7dp',
			left : '5dp',
			right : '5dp',
			width : Ti.UI.FILL,
			backgroundColor : '#f4f4e3',
			borderRadius : '5dp',
			layout : 'vertical'

		});

		clausesView.add(clauseLabel);
		clausesView.add(clausesDescription);
		clauses_TableRow.add(clausesView);
		tableData.push(clauses_TableRow);
	}

	var row = db.execute('select * from Clause where ID_clause=?', params.id);
	while (row.isValidRow()) {
		createClausRow({
			id : row.fieldByName('ID'),
			clause : row.fieldByName('claue'),
			description : row.fieldByName('clauseDescription'),
		});
		row.next();
	}
	var actionBar;
	clausesWindow.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (clausesWindow.activity) {
				actionBar = clausesWindow.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						clausesWindow.close();
					};
				}
			}
		}
	});
	
	var search;
	if (Ti.Platform.osname == 'android' && Ti.Platform.Android.API_LEVEL > 11) {
		search = Ti.UI.Android.createSearchView({
			hintText : 'جستجو برای ماده ',
		});
		if (clausesWindow.activity) {
			clausesWindow.activity.onCreateOptionsMenu = function(e) {
				var menu = e.menu;
				var searchItem = menu.add({
					title : 'جستجو',
					actionView : search,
					icon : Ti.Android.R.drawable.ic_menu_search,
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
			};
		}
	}

	var clausesTableView = Ti.UI.createTableView({
		top : '0%',
		data : tableData,
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		backgroundColor : 'white',
		search : search,
		filterAttribute : 'filter'

	});

	clausesWindow.add(clausesTableView);
	return clausesWindow;
}

exports.createClausesWindow = createClausesWindow;
