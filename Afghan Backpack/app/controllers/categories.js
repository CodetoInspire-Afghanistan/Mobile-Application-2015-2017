// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var tableName = L('province');
$.infoLabel.setText(L('moreInfo'));
var provinceName = Alloy.Globals.db.execute("select * from "+tableName+" where id = ?", args.id);
var weather;
switch(args.id){
	case 1:
		$.imgHeader.setImage('/images/province_image/kabul1.webp');
		break;
	case 2:
		$.imgHeader.setImage('/images/province_image/herat.webp');
		break;
	case 3:
		$.imgHeader.setImage('/images/province_image/mazar.webp');
		break;
	case 4:
		$.imgHeader.setImage('/images/province_image/bamian.webp');
		break;
}

$.provinceName.setText(provinceName.fieldByName('name'));
var shortDescription = provinceName.fieldByName('description').substr(0,150) + " ...";
$.desc.setText(shortDescription);

function getCategories(){
	var categoryName = L('category');
	var categories = Alloy.Globals.db.execute("select * from "+categoryName+" order by id asc");
	while(categories.isValidRow()){
		$.bottom.add(Alloy.createController('getCategory',{'id':categories.fieldByName('id'),'province_id':args.id}).getView());	
		categories.next();
	}
	
}

function moreInfo(){
	Alloy.createController("moreInfo",{'id':args.id, 'tableName':tableName}).getView().open();
}

// var weather = Alloy.Globals.db.execute("select * from weather where province_id = ? limit 4", args.id);
	$.weather.add($.weather.add(Alloy.createController('weatherIcons',{'id':args.id}).getView()));

