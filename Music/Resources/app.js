var win = Ti.UI.createWindow({
	title : '  آهنگ سرا ',
	layout : 'vertical',
	backgroundColor : '#b57de0',
	orientationModes : [Ti.UI.PORTRAIT]
});

var img = Ti.UI.createImageView({
	image : 'img/MusicImage.png',
	width : Ti.UI.FILL,
	height : '40%',
	top : 0,
});
var rawData = require('/Data');
var ListMusic = rawData.ListMusic;

var tableData = [];

for (music in ListMusic) {
	createRow({
		title : ListMusic[music].name,
		image : ListMusic[music].rightImage,
		className : 'ListMusic',
	});
}

function createRow(params) {
	var tableRow = Ti.UI.createTableViewRow({
		className : params.className,
		height : '75dp',
	});

	var title = Ti.UI.createLabel({
		text : params.title,
		textAlign : 'center',
		color : 'black',
		font : {
			fontSize : '22dp',
		}
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
		shadow : ''
	});

	var image = Ti.UI.createImageView({
		image : params.image,
		name : 'rightImage',
		right : '3dp'
	});

	rowView.add(title);
	rowView.add(image);

	tableRow.add(rowView);

	tableData.push(tableRow);
	return tableRow;
}

var tableView = Ti.UI.createTableView({
	data : tableData,
	height : Ti.UI.FILL,
	width : Ti.UI.FILL,
	top : 0
});

var activity;
var Aboutme = require('/Aboutme');
win.addEventListener('open', function(e) {
	if (win.activity) {
		activity = win.activity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var aboutMenu = menu.add({
				title : 'در باره ',
			});

			aboutMenu.addEventListener('click', function(e) {
				var newWindow = Aboutme.CreateAboutme();
				newWindow.open();
			});
		};
	}
});

var scroll = Ti.UI.createView({
	layout : 'vertical'
});
var ListMusics = require('/ListMusics');
tableView.addEventListener('click', function(e) {
	var ListMusicWin = ListMusics.createListMusicsWin({
		currentList : ListMusic[e.index]
	});

	ListMusicWin.open();
});
win.add(img);

scroll.add(tableView);
win.add(scroll);
win.open();

