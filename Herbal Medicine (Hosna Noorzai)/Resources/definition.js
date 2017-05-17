function createDefinitionWin(params) {

	var win = Ti.UI.createWindow({
		title : params.name,
		layout : 'vertical',
		backgroundColor : '#f8ead9',
	});

	var scrollView = Ti.UI.createScrollView({
		layout : 'vertical'
	});

	var query = 'select * from '+params.table+' where ID = ?';

	var df = params.db.execute(query, params.id);

	var descriptionLabel = Ti.UI.createLabel({
		text : df.fieldByName('Description'),
		textAlign : 'right',
		left : '5dp',
		right : '5dp',
		top : '10dp',
		bottom : '5dp',
		font : {
			fontSize : '16dp'
		},
		color : 'black'
	});

	var largeImage = Ti.UI.createImageView({
		image : df.fieldByName('LargeImage'),
		top : '12dp',
		borderRadius : 7,
		height : '230dp',
		width : '96%'
	});

	var actionBar;
	win.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (win.activity) {
				actionBar = win.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
					actionBar.onHomeIconItemSelected = function() {
						win.close();
					};
				}
			}
		}
	});

	scrollView.add(largeImage);
	scrollView.add(descriptionLabel);
	win.add(scrollView);

	return win;
}

exports.createDefinitionWin = createDefinitionWin;
