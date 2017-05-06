var tabgroup = Ti.UI.createTabGroup({
	title : "Code To Inspire",
});

var win = require('/Home');

var win1 = require('/Team');
var win2 = require('/Courses');

var tabHome = Ti.UI.createTab({
	title : " Home",
	window : win,
	icon : "image/homeIcon.png",
});
var tabTeam = Ti.UI.createTab({
	title : " Team",
	window : win1,
	icon : "image/teamicon.png",
});
var tabCourse = Ti.UI.createTab({
	title : " Courses",
	window : win2,
	icon : "image/courseIcon.png",
});

var aboutUs = require('/about');
var activity;
tabgroup.addEventListener('open', function(e) {
	if (tabgroup.activity) {
		tabgroup.activity.requestedOrientation = Titanium.Android.SCREEN_ORIENTATION_PORTRAIT;

		activity = tabgroup.activity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var aboutMenu = menu.add({
				title : 'About CTI App',
			});

			aboutMenu.addEventListener('click', function(e) {
				var aboutWin = aboutUs.createAboutWindow({
				});
				aboutWin.open();
			});
		};
	}
});

tabgroup.addTab(tabHome);
tabgroup.addTab(tabTeam);
tabgroup.addTab(tabCourse);
setTimeout(function() {
	tabgroup.open();
}, 2000);

