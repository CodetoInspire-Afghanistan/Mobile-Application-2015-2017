function List_Foods() {
	var db = Ti.Database.install('assets/Food.sqlite', 'Food.sqlite');
	var foodCategoryWindow = Ti.UI.createWindow({
		title : 'غذاهای گوناگون ',
		backgroundColor : '#f0e7d8',
		layout : 'vertical',
		orientationModes : [Ti.UI.PORTRAIT]
	});

	var catagory_Foods = Ti.UI.createScrollView({
		layout : 'vertical'
	});

	var tableData = [];
	function CreateFoodRow(params) {
		var row = Ti.UI.createTableViewRow({
			height : '69dp',
			width : Ti.UI.SIZE,
			className : 'food',
			filter : params.name,
			id : params.id
		});
		var rowContainer = Ti.UI.createView({
			top : '2dp',
			bottom : '3dp',
			right : '2dp',
			left : '8dp',
			width : '96%',
			borderRadius : 7,
			backgroundColor : '#e5d9ce',
		});
		var discriptionContainer = Ti.UI.createView({
			width : '98%',
			right : '7%',
			layout : 'vertical',
		});
		var rightImage = Ti.UI.createImageView({
			image : params.image,
			right : '2dp',
			height : '200',
			borderRadius : 2,
			height : '57dp',
			width : '70dp'
		});
		var title = Ti.UI.createLabel({
			text : params.name,
			font : {
				fontSize : '20dp',
				fontFamily : 'HawaiiLover.ttf'
			},
			top : '2%',
			right : '150dp',
			color : 'black',
		});
		var description = Ti.UI.createLabel({
			text : params.description,
			right : '17%',
			left : '5%',
			width : Ti.UI.FILL,
			textAlign : 'right',
			font : {
				fontSize : '14dp',
				fontFamily : 'HawaiiLover.ttf',
			},

			color : 'black'
		});
		rowContainer.add(rightImage);
		discriptionContainer.add(title);
		discriptionContainer.add(description);
		rowContainer.add(discriptionContainer);
		row.add(rowContainer);
		tableData.push(row);
	}

	var rows = db.execute('select * from Category_Foods');
	while (rows.isValidRow()) {
		CreateFoodRow({
			id : rows.fieldByName('ID'),
			name : rows.fieldByName('Name'),
			image : rows.fieldByName('Image'),
			description : rows.fieldByName('Description'),
		});
		rows.next();
	}
	var search;
	if (Ti.Platform.osname == 'android' && Ti.Platform.Android.API_LEVEL > 11) {
		search = Ti.UI.Android.createSearchView({
			hintText : 'غذا تان را جستجو کنید'
		});
		if (foodCategoryWindow.activity) {
			foodCategoryWindow.activity.onCreateOptionsMenu = function(e) {
				var menu = e.menu;
				var searchItem = menu.add({
					title : 'search',
					actionView : search,
					icon : Ti.Android.R.drawable.ic_menu_search,
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
			};
		}

	}
	var ctategory_Food_TableView = Ti.UI.createTableView({
		data : tableData,
		search : search,
		filterAttribute : 'filter',
		separatorColor : 'transparent'
	});

	var Foods = require('/Foods');
	ctategory_Food_TableView.addEventListener('click', function(e) {
		var foodWin = Foods.CreateFoodWin({
			id : e.row.id,
			name : e.row.filter,
			db : db
		});
		foodWin.open();
	});
	var actionBar;
	foodCategoryWindow.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			actionBar = foodCategoryWindow.activity.actionBar;
			if (actionBar) {
				actionBar.displayHomeAsUp = true;
				actionBar.onHomeIconItemSelected = function() {
					foodCategoryWindow.close();
				};
			}
		}
	});

	catagory_Foods.add(ctategory_Food_TableView);
	foodCategoryWindow.add(catagory_Foods);
	return foodCategoryWindow;
}

exports.List_Foods = List_Foods;
