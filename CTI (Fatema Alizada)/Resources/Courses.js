var coursesWin = Ti.UI.createWindow({
	title : "Code To Inspire",
	backgroundColor : "#3d1a38",
	orientationModes : [Ti.UI.PORTRAIT]
});

var imgview = Ti.UI.createImageView({
	width : Ti.UI.FILL,
	image : "image/courses/developer coding at desk.png",
});
var courses = [{
	title : 'Web Design',
	leftImage : 'image/courses/webDesign-icon.png',
	shortDescription : "Date and Time",
	description : "Date: Odd days\n\nTime: 2:00 - 03:30",
	shortDescription1 : "Mentor",
	description1 : "Nahid Ahmadi",
	shortDescription2 : "Date and Time",
	description2 : "Date: Even days\n\nTime: 12:00 - 01:30",
	shortDescription3 : "Mentor",
	description3 : "Azita Azimi",
	shortDescription4 : "Date and Time",
	description4 : "Date: Even days\n\nTime: 03:00 - 04:30",
	shortDescription5 : "Mentor",
	description5 : "Azita Azimi & Nahid Ahmadi",
	img : "image/courses/web-design.png",
}, {
	title : 'Unity',
	leftImage : 'image/courses/game_icon.png',
	shortDescription : "Date and Time",
	description : "Date: Odd days\n\nTime: 10:30 - 12:00",
	shortDescription1 : "Mentor",
	description1 : "Ehsan Ehrari",
	img : "image/courses/game.png",
}, {
	title : 'Mobile Application',
	leftImage : 'image/courses/MobileApp_icon.png',
	shortDescription : "Date and Time",
	description : "Date: Odd days\n\nTime: 1:30 - 03:00",
	shortDescription1 : "Mentor",
	description1 : "Aalem Daneshyar",
	img : "image/courses/mobile app.png",
	clr : "black",
}, {
	title : 'Graphic',
	leftImage : 'image/courses/graphic_icon.png',
	shortDescription : "Date and Time",
	description : "Date: Odd days\n\nTime: 08:30 - 10:00",
	shortDescription1 : "Mentor",
	description1 : "Habibullah Farahi",
	shortDescription2 : "Date and Time",
	description2 : "Date: Odd days\n\nTime: 12:00 - 01:30",
	shortDescription3 : "Mentor",
	description3 : "Habibullah Farahi",
	shortDescription4 : "Date and Time",
	description4 : "Date: Even days\n\nTime: 08:30 - 10:00",
	shortDescription5 : "Mentor",
	description5 : "Habibullah Farahi",
	img : "image/courses/Graphic1.png",
}];
var tableData = [];

for (c in courses) {
	var rows = Ti.UI.createTableViewRow({
		height : '60dp',
		width : Ti.UI.SIZE,
		className : 'courses',
	});
	var headerLabel = Ti.UI.createLabel({
		text : courses[c].title,
		left : '90dp',
		top : '20dp',
		color : 'white',
		font : {
			fontSize : '16dp',
		},
		opacity : "0.8",
	});
	var leftImage = Ti.UI.createImageView({
		image : courses[c].leftImage,
		width : '60dp',
		left : '20dp',
		borderWidth : "2dp",
		borderRadius : "70dp",

	});
	rows.add(headerLabel);
	rows.add(leftImage);
	tableData.push(rows);
}
var tableView1 = Ti.UI.createTableView({
	data : tableData,
	backgroundColor : "#3d1a38",
	height: Ti.UI.SIZE,
});
var classes = require('/courseWin');
tableView1.addEventListener('click', function(e) {
	var courseWin = classes.createWin({
		currentCourse : courses[e.index]
	});
	courseWin.open();
});

var scrollview1 = Ti.UI.createScrollView({
	layout: 'vertical'
});

scrollview1.add(imgview);
scrollview1.add(tableView1);

coursesWin.add(scrollview1);

module.exports = coursesWin; 