// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var id = args.id;
var province = L('province');
var provinceInfo = Alloy.Globals.db.execute("select * from "+province+" where id = ?", id);
switch(id){
	case 1:
		$.provinceImage.image = "/images/province_image/kabul1.webp";
		$.provinceView.width = Ti.UI.FILL;
		$.provinceName.text = provinceInfo.fieldByName('name');
		$.provinceDesc.text = provinceInfo.fieldByName('center');
		break;
	case 2:
		$.provinceImage.image = "/images/province_image/Herat1.webp";
		$.provinceView.width = "49%";
		$.provinceName.text = provinceInfo.fieldByName('name');
		$.provinceDesc.text = provinceInfo.fieldByName('center');
		break;
	case 3:
		$.provinceImage.image = "/images/province_image/balkh3.webp";
		$.provinceView.width = "49%";
		$.provinceView.left = "2%";
		$.provinceName.text = provinceInfo.fieldByName('name');
		$.provinceDesc.text = provinceInfo.fieldByName('center');
		break;
	case 4:
		$.provinceImage.image = "/images/province_image/bamian.webp";
		$.provinceView.width ="100%";
		$.provinceName.text = provinceInfo.fieldByName('name');
		$.provinceDesc.text = provinceInfo.fieldByName('center');
		break;
}

function categories(){
	Alloy.createController('categories',{'id':id}).getView().open();
	// Alloy.createController('map',{'id':id}).getView().open();
}
