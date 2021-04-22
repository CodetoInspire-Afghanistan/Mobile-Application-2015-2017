function createWin(params) {
	var win = Ti.UI.createWindow({
		title : params.currentCourse.title,
		layout : 'vertical',
		backgroundColor : "#e8e5e8",
		orientationModes : [Ti.UI.PORTRAIT]
	});
	var view = Ti.UI.createView({
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
	});
	var scrl = Ti.UI.createScrollView({
		height : Ti.UI.FILL,
		layout : "vertical",
	});
	var shortDescription = Ti.UI.createLabel({
		text : params.currentCourse.shortDescription,
		left : "10dp",
		color : "#19001e",
		font : {
			fontSize : "19dp",
		}
	});
	var shortDescription1 = Ti.UI.createLabel({
		text : params.currentCourse.shortDescription1,
		left : "10dp",
		color : "#72406e",
		font : {
			fontSize : "19dp",
		},
	});
	var shortDescription2 = Ti.UI.createLabel({
		text : params.currentCourse.shortDescription2,
		left : "10dp",
		color : "#19001e",
		font : {
			fontSize : "19dp",
		},
	});
	var shortDescription3 = Ti.UI.createLabel({
		text : params.currentCourse.shortDescription3,
		left : "10dp",
		color : "#72406e",
		font : {
			fontSize : "19dp",
		},
	});
	var shortDescription4 = Ti.UI.createLabel({
		text : params.currentCourse.shortDescription4,
		left : "10dp",
		color : "#19001e",
		font : {
			fontSize : "19dp",
		},
	});
	var shortDescription5 = Ti.UI.createLabel({
		text : params.currentCourse.shortDescription5,
		left : "10dp",
		color : "#72406e",
		font : {
			fontSize : "19dp",
		},
	});
	var title = Ti.UI.createLabel({
		text : params.currentCourse.title,
		top : '40%',
		color : "#643777",
		font : {
			fontSize : "18dp",
			storang : "bold",
		}
	});
	var description = Ti.UI.createLabel({
		text : params.currentCourse.description,
		top : '1%',
		left : "40dp",
		color : "#635356",
		font : {
			fontSize : "14dp",
		},

	});
	var description1 = Ti.UI.createLabel({
		text : params.currentCourse.description1,
		top : '1%',
		left : "40dp",
		color : "#635356",
		font : {
			fontSize : "14dp",
		},
	});
	var description2 = Ti.UI.createLabel({
		text : params.currentCourse.description2,
		top : '1%',
		left : "40dp",
		color : "#635356",
		font : {
			fontSize : "14dp",
		},
	});
	var description3 = Ti.UI.createLabel({
		text : params.currentCourse.description3,
		top : '1%',
		left : "40dp",
		color : "#635356",
		font : {
			fontSize : "14dp",
		},
	});
	var description4 = Ti.UI.createLabel({
		text : params.currentCourse.description4,
		top : '1%',
		left : "40dp",
		color : "#635356",
		font : {
			fontSize : "14dp",
		},
	});
	var description5 = Ti.UI.createLabel({
		text : params.currentCourse.description5,
		top : '1%',
		left : "40dp",
		color : "#635356",
		font : {
			fontSize : "14dp",
		},
	});
	var img = Ti.UI.createImageView({
		image : params.currentCourse.img,
		// height : "38%",
		// width : "65%",
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
	});

	var view1 = Ti.UI.createView({
		height : "10%",
		width : Ti.UI.FILL,
	});
	var actionBar;
	win.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (!win.activity) {

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

	view.add(img);

	scrl.add(view);
	scrl.add(shortDescription);
	scrl.add(description);
	scrl.add(shortDescription1);
	scrl.add(description1);
	scrl.add(shortDescription2);
	scrl.add(description2);
	scrl.add(shortDescription3);
	scrl.add(description3);
	scrl.add(shortDescription4);
	scrl.add(description4);
	scrl.add(shortDescription5);
	scrl.add(description5);
	scrl.add(view1);

	win.add(scrl);
	
	return win;
}

exports.createWin = createWin; 