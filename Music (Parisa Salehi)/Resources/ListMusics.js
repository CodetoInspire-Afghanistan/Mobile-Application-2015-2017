function createListMusicsWin(params) {
	var win = Ti.UI.createWindow({
		title : params.currentList.name,
		backgroundColor : '#b57de0',
		layout : 'vertical',
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var Playwindows = params.currentList.Playwindows;
	var tableData = [];

	for (i in Playwindows) {
		var row = Ti.UI.createTableViewRow({
			className : 'Playwindow',
			image : Playwindows[i].rightImage,
			height : '75dp',
			width : '100dp',

		});
		var actionBar;
		win.addEventListener('open', function(e) {
			if (Ti.Platform.osname == 'android') {
				if (!win.activity) {
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

		var title = Ti.UI.createLabel({
			text : Playwindows[i].name,
			font : {
				fontSize : '20dp',
			},
			color : 'black',
			top : '2dp',
			bottom : '33dp',
		});
		var rowView = Ti.UI.createView({
			top : '7dp',
			botton : '7dp',
			left : '5dp',
			right : '8dp',
			height : '60dp',
			width : Ti.UI.FILL,
			backgroundColor : '#c6a1e2',
			borderRadius : 5,
		});

		var image = Ti.UI.createImageView({
			image : Playwindows[i].rightImage,
			name : 'rightImage',
			right : '3dp'
		});

		var shortDescription = Ti.UI.createLabel({
			text : Playwindows[i].shortDescription,
			color : 'black',
			top : '28dp',
			bottom : '10dp',
			textAlign : 'center',
			font : {
				fontSize : '17dp'
			}
		});

		rowView.add(title);
		rowView.add(image);
		rowView.add(shortDescription);
		row.add(rowView);
		tableData.push(row);
	}

	var tableView = Ti.UI.createTableView({
		top : '5%',
		data : tableData,
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
	});

	var Playwindow = require('/Playwindow');
	tableView.addEventListener('click', function(e) {

		var PlaywindowWin = Playwindow.createPlaywindowWin({
			currentPlaywindow : Playwindows[e.index],
		});

		PlaywindowWin.open();

	});

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

	win.add(tableView);

	return win;
}

exports.createListMusicsWin = createListMusicsWin; 