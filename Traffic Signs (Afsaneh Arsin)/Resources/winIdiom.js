//creating function
function createWindowIdiom(params) {

	var winIdioms = Ti.UI.createWindow({
		title : 'تاریخچه  ترافیک',
		layout : 'vertical',
		backgroundColor : 'white',
		orientationModes : [Ti.UI.PORTRAIT],
	});
	var scrollView = Ti.UI.createScrollView({
		layout : 'vertical',
	});
	var imageTop = Ti.UI.createImageView({
		image : 'img/heratcity.png',
		width : Ti.UI.FILL,
	});

	scrollView.add(imageTop);
	//function create lable-----------------------------------------------------------------------------
	function createTitleLableIdiom(param) {
		var titleLabel = Ti.UI.createLabel({
			width : Ti.UI.FILL,
			height : Ti.UI.SIZE,
			text : param.text,
			borderRadius : '5dp',
			font : {
				fontSize : '20dp',
				fontFamily : 'Bustani',
				fontWeight : 'bold'
			},
			textAlign : 'right',
			color : 'black',
			backgroundColor : 'white',
			top : '2dp',
			bottom : '2dp',
			right : '7dp'
		});

		return titleLabel;

	}

	//function create labletext--------------------------------------------------------------
	function createLableIdiom(param) {
		var label = Ti.UI.createLabel({
			text : param.text,
			font : {
				fontSize : '18dp'
			},
			textAlign : 'right',
			color : 'black',
			backgroundColor : 'white',
			borderRadius : '5dp',
			top : '2dp',
			left : '2dp',
			bottom : '5dp',
			right : '7dp',
			width : Ti.UI.FILL,
			height : Ti.UI.SIZE,
		});
		return label;
	}

	//back button---------------------------------------------------------------------------------
	var actionBar;
	winIdioms.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			if (!winIdioms.activity) {
				alert("con not open");
			} else {
				actionBar = winIdioms.activity.actionBar;
				if (actionBar) {
					actionBar.displayHomeAsUp = true;
				}
				actionBar.onHomeIconItemSelected = function() {
					winIdioms.close();
				};
			}
		}
	});
	////////////////////////////////////////
	var rowData = db.execute("select * from allSign where Category='Idiom'");
	var check = 1;
	var title;
	var discription;

	while (rowData.isValidRow()) {
		if (check % 2 != 0) {
			title = createTitleLableIdiom({
				text : rowData.fieldByName('Discription')
			});
			scrollView.add(title);
		} else {
			discription = createLableIdiom({
				text : rowData.fieldByName('Discription')
			});
			scrollView.add(discription);
		}
				
		check++;
		rowData.next();
	}

	//adding --------------------------------------------------------------------------
	winIdioms.add(scrollView);
	return winIdioms;
}

exports.createWindowIdiom = createWindowIdiom;
