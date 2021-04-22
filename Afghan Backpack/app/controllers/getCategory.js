// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var id = args.id;
var categoryTable = L('category');
var categoryInfo = Alloy.Globals.db.execute("select * from "+categoryTable+" where id = ?", id);
$.categoryName.text = categoryInfo.fieldByName('name');
switch(id){
	case 1:
	$.category.left = "5%";
	$.fontIcon.text = "\uf286";
	break;
	case 2:
	$.category.left = "10%";
	$.fontIcon.text = "\uf1bb";
	break;
	case 3:
	$.category.top = 10;
	$.category.left = "5%";
	$.fontIcon.setText("\uf0f4");
	break;
	case 4:
	
	$.category.left = "10%";
	$.category.top = 10;
	$.fontIcon.text = "\uf236";
	break;
}

function details(){
	
	// var note = Ti.UI.createNotification();
	Alloy.createController('placesList',{'category_id':categoryInfo.fieldByName('id'),'province_id':args.province_id}).getView().open();
	// note.setMessage(L('historical'));
	// note.show();
}
