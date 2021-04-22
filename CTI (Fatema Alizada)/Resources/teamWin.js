function createWin(params) {
	var win = Ti.UI.createWindow({
		title : params.currentTeam.title,
		layout : 'vertical',
		backgroundColor : "#dcc9ea",
		orientationModes : [Ti.UI.PORTRAIT]
	});
	var scrollView = Ti.UI.createScrollView({
		height : Ti.UI.FILL,
		layout : "vertical",
	});
	var shortDescription = Ti.UI.createLabel({
		text : params.currentTeam.shortDescription,
		top : '0.5%',
		color : "#63397f",
		font : {
			fontSize : "16dp",
		}
	});
	var title = Ti.UI.createLabel({
		text : params.currentTeam.title,
		top : '2%',
		color : "#2e0d3a",
		font : {
			fontSize : "19dp",
		}
	});
	var description = Ti.UI.createLabel({
		text : params.currentTeam.description,
		top : '2%',
		left : "10dp",
		color : "#28252b",
		font : {
			fontSize : "14dp",
		},
	});
	var img = Ti.UI.createImageView({
		image : params.currentTeam.img,
		width : "50%",
		top : '5dp',
		borderColor : "white",
		borderRadius : 100,
		borderWidth : "5dp",
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
	
	scrollView.add(img);
	scrollView.add(title);
	scrollView.add(shortDescription);
	scrollView.add(description);
	
	win.add(scrollView);
	
	return win;
}

exports.createWin = createWin;
