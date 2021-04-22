function createSectionWin(params) {
	var db = Ti.Database.install('assets/AfghanConstitution.sqlite', 'AfghanConstitution.sqlite');

	var sectionsWindow = Ti.UI.createWindow({
		title : 'فصل ها',
		backgroundColor : 'red',
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var tableData = [];
	function createRow(param) {
		var sections_TableRow = Ti.UI.createTableViewRow({
			className : 'section',
			height : Ti.UI.SIZE,
			width : Ti.UI.FILL,
			backgroundColor : 'white',
			id : param.id,
			section : param.section
		});

		var sections_RowTitle = Ti.UI.createLabel({
			text : param.section,
			textAlign : 'right',
			right : '10dp',
			color : '#3333CC',
			width : Ti.UI.FILL,
			font : {
				fontSize : '20dp',

			}
		});

		var sectionsDescription = Ti.UI.createLabel({
			text : param.sectionDiscription,
			textAlign : 'right',
			right : '10dp',
			width : Ti.UI.FILL,
			color : 'black',
			font : {
				fontSize : '17dp',
			},
			color : 'black',
			top : '7dp',

		});
		var sectionsView = Ti.UI.createView({
			top : '7dp',
			botton : '7dp',
			left : '5dp',
			right : '5dp',
			width : Ti.UI.FILL,
			backgroundColor : '#f4f4e3',
			borderRadius : '5dp',
			layout : 'vertical'

		});
		sectionsView.add(sections_RowTitle);
		sectionsView.add(sectionsDescription);
		sections_TableRow.add(sectionsView);
		tableData.push(sections_TableRow);
	}

	var data = db.execute('select * from Sections');
	
	while (data.isValidRow()) {
		createRow({
			id : data.fieldByName('ID'),
			section : data.fieldByName('Section'),
			sectionDiscription : data.fieldByName('Description'),
		});
		data.next();
	}
	var sectionsTableView = Ti.UI.createTableView({
		data : tableData,
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		backgroundColor : 'white',
	});
	var clause = require('/clause');
	sectionsTableView.addEventListener('click', function(e) {
		var clauseWindow = clause.createClausesWindow({
			id: e.row.id,
			title: e.row.section
		});
		clauseWindow.open();
	});
	sectionsWindow.add(sectionsTableView);

	var actionBar;
	sectionsWindow.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (sectionsWindow.activity) {
				actionBar = sectionsWindow.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						sectionsWindow.close();
					};
				}
			}
		}

	});

	return sectionsWindow;
}

exports.createSectionWin = createSectionWin;
