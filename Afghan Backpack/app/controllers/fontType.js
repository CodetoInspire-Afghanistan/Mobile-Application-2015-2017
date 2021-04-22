// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var currentFont;
if (Ti.App.Properties.getString('fontType') == null) {
	currentFont = "CaviarDreams_Bold";
} else {
	currentFont = Ti.App.Properties.getString("fontType", "");
}
var fontList = ["ClementePDai-Regular", "CaviarDreams_Bold", "ClementePDal-SemiBold", "RaspoutineMedium_TB", "ClementePDag-Book", "NightStillComes_mine", "ClementePDam-Bold"];
var fonts = [];
var tempRow;
for (var i = 0; i < fontList.length; i++) {
	var row = Ti.UI.createTableViewRow({
		width : "100%",
		height : "40dp",
		name : fontList[i],
	});

	var check = Ti.UI.createImageView({
		image : "/images/app_photo/unchecked.png",
		right : "10dp"
	});

	var fontName = Ti.UI.createLabel({
		text : fontList[i],
		font : {
			fontFamily : fontList[i],
			fontSize : "18dp"
		},
		left : "20dp",
		name : "name"
	});
	row.add(fontName);
	if (row.name == currentFont) {
		check.image = "/images/app_photo/checked.png";
	}
	row.add(check);
	fonts.push(row);

}

$.tableView.setData(fonts);
var checked = Ti.UI.createImageView({
	image : "/images/app_photo/checked.png",
	right : "10dp"
});
function check(e) {
	if (tempRow != null && tempRow != e.row) {
		tempRow.remove(checked);
	}
	e.row.add(checked);
	Ti.App.Properties.setString("fontType", e.row.name);
	tempRow = e.row;
	$.container.close();
}
