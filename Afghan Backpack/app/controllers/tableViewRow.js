// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var tableViewRow = Alloy.Globals.db.execute("select * from icons where id = ?", args.id);
$.imageRow.setImage("/images/app_photo/" + tableViewRow.fieldByName('image'));
$.labelRow.setText(tableViewRow.fieldByName('name'));
if (tableViewRow.fieldByName('id') == 1) {
	var degree = Ti.UI.createLabel({
		text : "C",
		font : {
			fontSize : "20dp",
			fontWeight : "bold"
		},
		color : "white",
		width : "25dp",
		height : "25dp",
		backgroundColor : "gray",
		textAlign : "center",
		right : "10dp",
	});
	$.row.add(degree);
}

function rowAction() {
	switch(tableViewRow.fieldByName('id')) {
	case 1:

		break;
	case 2:
		Alloy.createController("fontType").getView().open();
		break;
	case 3:
		Alloy.createController("fontSize").getView().open();
		break;
	case 4:
		
		break;
	case 5:

		break;
	}
}
