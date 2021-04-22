function createLink(param) {
	var winDetails = Ti.UI.createWindow({
		title : param.countryName,
		orientationModes : [Ti.UI.PORTRAIT],
	});

	var webView = Ti.UI.createWebView({
		height : '100%',
		width : '100%',
		backgroundColor : 'white'
	});
	winDetails.add(webView);
	webView.setUrl(String(param.wikiLink));

	var actionBar;
	winDetails.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			actionBar = winDetails.activity.actionBar;
			if (actionBar) {
				actionBar.displayHomeAsUp = true;
			}
			actionBar.onHomeIconItemSelected = function(e) {
				winDetails.close();
			};
		}
	});

	return winDetails;
}

exports.createLink = createLink;
