function createfwin(param) {
	var data = param.db.execute('select * from Faculty where ID=?', param.id);
	var departments = param.db.execute('select * from Department where faculty=? order by ID asc', param.id);

	var facultyWin = Ti.UI.createWindow({
		title : data.fieldByName('Name'),
		backgroundColor : '#f4f2e8',
		orientationModes : [Ti.UI.PORTRAIT],
	});

	var departmenData = [];
	var facultyTitle = Ti.UI.createLabel({
		text : data.fieldByName('title'),
		textAlign : 'center',
		color : 'black',
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		font : {
			fontSize : '20dp',
		},
		backgroundColor : '#234b8c',
		color : 'white',
		bottom : 0
	});

	var facultyInformation = Ti.UI.createLabel({
		text : data.fieldByName('description'),
		color : 'black',
		textAlign : 'justify',
		right : '2dp',
		top : '5dp'
	});

	var containerScrollview = Ti.UI.createScrollView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		layout : 'vertical',
	});

	var headerImageContainer = Ti.UI.createView({
		height : Ti.UI.SIZE,
	});

	var facultyImg = Ti.UI.createImageView({
		image : data.fieldByName('bigImage'),
		height : '250dp',
		width : '100%',
	});

	var departmentData = [];
	var depart = require('/Departments');

	function CreateDepartment(params) {
		var departmentRow = Ti.UI.createTableViewRow({
			height : '40dp',
			className : 'Departments',
		});

		var departmentRowTitle = Ti.UI.createLabel({
			text : params.name,
			font : {
				fontSize : '17dp'
			},
			textAlign : 'center',
			color : 'black',
		});

		var departmentRowView = Ti.UI.createView({
			backgroundColor : '#e8e7de',
			width : Ti.UI.FILL,
		});

		var id = params.id;

		departmentRow.addEventListener('click', function(e) {
			var departWin = depart.createDepartWin({
				id : id,
				db : param.db
			});
			departWin.open();
		});

		departmentRowView.add(departmentRowTitle);
		departmentRow.add(departmentRowView);
		departmentData.push(departmentRow);
	}

	var temp = '';

	while (departments.isValidRow()) {
		CreateDepartment({
			name : departments.fieldByName('Name'),
			id : departments.fieldByName('ID'),
		});
		temp += departments.fieldByName('ID');
		departments.next();
	}

	var depatmentTableView = Ti.UI.createTableView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		data : departmentData,
	});

	var departmentsLabel = Ti.UI.createLabel({
		text : 'دیپارتمنت ها',
		backgroundColor : '#234b8c',
		color : 'white',
		width : Ti.UI.FILL,
		height : Ti.UI.SIZE,
		top : '10dp',
		font : {
			fontSize : '18dp'
		},
		textAlign : 'center'
	});

	var actionBar;
	facultyWin.addEventListener('open', function(e) {
		containerScrollview.scrollTo(0, 0);
		if (Ti.Platform.osname == 'android') {
			if (facultyWin.activity) {
				actionBar = facultyWin.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						facultyWin.close();
					};
				}
			}
		}
	});

	headerImageContainer.add(facultyImg);
	headerImageContainer.add(facultyTitle);

	containerScrollview.add(headerImageContainer);
	containerScrollview.add(facultyInformation);
	containerScrollview.add(departmentsLabel);
	containerScrollview.add(depatmentTableView);

	facultyWin.add(containerScrollview);

	return facultyWin;
}

exports.createWin = createfwin;
