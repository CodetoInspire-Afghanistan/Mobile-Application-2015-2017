function createDepartWin(params) {

	var data = params.db.execute('select * from Department where ID=?', params.id);
	var departmentWin = Ti.UI.createWindow({
		title : data.fieldByName('Name'),
		backgroundColor : '#f4f2e8',
		orientationModes : [Ti.UI.PORTRAIT],
	});

	var headerImageContainer = Ti.UI.createView({
		height : Ti.UI.SIZE,
	});

	var departmentTitle = Ti.UI.createLabel({
		text : data.fieldByName('title'),
		textAlign : 'center',
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		font : {
			fontSize : '20dp'
		},
		backgroundColor : '#234b8c',
		color : 'white',
		bottom: 0
	});

	var departmentImg = Ti.UI.createImageView({
		image : data.fieldByName('image'),
		height : '250dp',
		width : '100%',
		top: 0
	});

	var departmentDescriptionLable = Ti.UI.createLabel({
		text : data.fieldByName('description'),
		font : {
			fontSize : '15dp'
		},
		textAlign : 'justify',
		color : 'black',
		right : '1%',
		top: '5dp'
	});
	
	var departmentScrollView = Ti.UI.createScrollView({
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		layout: 'vertical'
	});

	var actionBar;
	departmentWin.addEventListener('open', function(e) {
		// alert(params.id);
		if (Ti.Platform.osname == 'android') {
			if (departmentWin.activity) {
				actionBar = departmentWin.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						departmentWin.close();
					};
				}
			}
		}
	});

	headerImageContainer.add(departmentImg);
	headerImageContainer.add(departmentTitle);

	departmentScrollView.add(headerImageContainer);
	departmentScrollView.add(departmentDescriptionLable);
	
	departmentWin.add(departmentScrollView);
	return departmentWin;
}

exports.createDepartWin = createDepartWin;
