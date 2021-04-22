// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var currentFontSize;
if(Ti.App.Properties.getString("fontSize") == null){
	currentFontSize = "14";
}else{
	currentFontSize = Ti.App.Properties.getString("fontSize", "");
}
var index;
if(currentFontSize == "14"){
	index = 0;
}else if(currentFontSize == "16"){
	index = 1;
}else if(currentFontSize == "18"){
	index = 2;
}else{
	index = 3;
}

$.optionDialog.selectedIndex = index;
function openFontList(e){
	$.optionDialog.show();
}


function changeFontSize(e){
	Ti.App.Properties.setString('fontSize', $.optionDialog.options[e.index]);
	$.container.close();
}
