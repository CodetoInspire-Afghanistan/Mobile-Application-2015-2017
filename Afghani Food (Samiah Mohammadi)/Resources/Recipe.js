function CreateRecipeFoods(params) {

	var recipe = params.db.execute('select * from Food where ID = ?', params.id);

	var recipeWindow = Ti.UI.createWindow({
		backgroundColor : '#f0e7d8',
		layout : 'vertical',
		id : params.id,
		title : params.name
	});
	var titleLable = Ti.UI.createLabel({
		text : 'مواد لازم:',
		color : 'black',
		font : {
			fontSize : '25dp',
		},
		textAlign : 'right',
		right : '2%',
		color : '#7279aa'
	});
	var img = Ti.UI.createImageView({
		image : recipe.fieldByName('Image_Big'),
		borderRadius : 3,
		width : Ti.UI.FILL
	});
	var recipeLable = Ti.UI.createLabel({
		text : 'دستور پخت:',
		color : 'black',
		font : {
			fontSize : '25dp',
		},
		textAlign : 'right',
		right : '3%',
		color : '#7279aa',
	});
	var descriptionLabel = Ti.UI.createLabel({
		text : recipe.fieldByName('Recipe'),
		font : {
			fontSize : '15dp',
			fontFamily : 'Infinite_Stroke.otf'
		},
		textAlign : 'right',
		color : 'black',
		right : '2%',
	});
	var neededItemsLabel = Ti.UI.createLabel({
		text : recipe.fieldByName('Needful_Things'),
		height : Ti.UI.SIZE,
		textAlign : 'right',
		right : '2%',
		color : 'black',
	});
	var recipeScrollview = Ti.UI.createScrollView({
		layout : 'vertical',
	});
	var actionBar;
	recipeWindow.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			actionBar = recipeWindow.activity.actionBar;
			if (actionBar) {
				actionBar.name = params.name;
				actionBar.displayHomeAsUp = true;
			}
			actionBar.onHomeIconItemSelected = function() {
				recipeWindow.close();
			};
		}
	});
	recipeScrollview.add(img);
	recipeScrollview.add(titleLable);
	recipeScrollview.add(neededItemsLabel);
	recipeScrollview.add(recipeLable);
	recipeScrollview.add(descriptionLabel);
	recipeWindow.add(recipeScrollview);

	return recipeWindow;
}

exports.CreateRecipeFoods = CreateRecipeFoods;
