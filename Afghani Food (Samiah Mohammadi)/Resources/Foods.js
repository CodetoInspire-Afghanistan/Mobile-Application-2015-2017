function CreateFoodWin(params) {

	var db = params.db;
	var category_Foods = Ti.UI.createWindow({
		layout : 'horizontal',
		backgroundColor : '#f0e7d8',
		title : params.name,
		id : params.id,
		orientationModes : [Ti.UI.PORTRAIT]
	});
	var tableData = [];
	function CreateRow(param) {
		var row = Ti.UI.createTableViewRow({
			height : '62dp',
			width : Ti.UI.SIZE,
			className : 'List',
			id : param.id,
			name : param.name,
			image : param.image,
		});
		var rightImage = Ti.UI.createImageView({
			image : param.image,
			right : '1dp',
			height : '60dp',
			width : '75dp',
			borderRadius : 2
		});
		var title = Ti.UI.createLabel({
			text : param.name,
			right : '160dp',
			color : 'black',
			font : {
				fontSize : '16%',
				fontFamily : 'HawaiiLover.ttf'
			},
		});
		var container = Ti.UI.createView({
			top : '2dp',
			bottom : '3dp',
			right : '2dp',
			left : '8dp',
			width : '96%',
			borderRadius : 7,
			backgroundColor : '#e5d9ce',
		});
		container.add(rightImage);
		container.add(title);
		row.add(container);
		tableData.push(row);
	}

	var rows = db.execute('select * from Food where Category_ID=?', params.id);
	while (rows.isValidRow()) {
		CreateRow({
			id : rows.fieldByName('ID'),
			name : rows.fieldByName('Name'),
			image : rows.fieldByName('Image_Small'),
		});
		rows.next();
	}
	var Foods = Ti.UI.createTableView({
		data : tableData,
		separatorColor : 'transparent',
	});

	var Recipe = require('/Recipe');
	Foods.addEventListener('click', function(e) {
		var recipeWin = Recipe.CreateRecipeFoods({
			id : e.row.id,
			name : e.row.name,
			db: db
		});
		recipeWin.open();
	});

	var actionBar;
	category_Foods.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			actionBar = category_Foods.activity.actionBar;
			if (actionBar) {
				actionBar.name = params.name;
				actionBar.displayHomeAsUp = true;
			}
			actionBar.onHomeIconItemSelected = function() {
				category_Foods.close();
			};
		}
	});
	category_Foods.add(Foods);
	return category_Foods;
}

exports.CreateFoodWin = CreateFoodWin;
