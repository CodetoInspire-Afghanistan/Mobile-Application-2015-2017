var args = $.args;
$.placeList.open();

var category_name;
switch (args.category_id) {
case 1:
	category_name = L('historical');
	break;
case 2:
	category_name = L('parks');
	break;
case 3:
	category_name = L('restaurants');
	break;
case 4:
	category_name = L('hotels');
	break;
}
var category = category_name.split("_")[1];
var province_id = args.province_id;

var items = [];

setItems();

function openDetailsWindow(e) {
	var id = items[e.itemIndex].itemId;
	Alloy.createController('detailsPage', {
		id : id,
		province_id : province_id,
		category_name : category_name,
		category : category
	}).getView().open();
}

function changeCategory(e) {
	if (e.source.id == 'amusingBtn') {
		// category_name = 'en_amusing';
		category_name = L("parks");
		category = "amusing";
	} else if (e.source.id == 'historicalBtn') {
		// category_name = 'en_historical';
		category_name = L("historical");
		category = "historical";
	} else if (e.source.id == 'restaurantBtn') {
		// category_name = 'en_restaurant';
		category_name = L("restaurants");
		category = "restaurant";
	} else if (e.source.id == 'hotelBtn') {
		// category_name = 'en_hotel';
		category_name = L("hotels");
		category = "hotel";
	}
	items = [];
	setItems();
}


function setItems() {
var rawData = Alloy.Globals.db.execute('select * from ' + category_name + ' where province_id = ?', province_id);
	while (rawData.isValidRow()) {
		var shortDescription;
		if (rawData.fieldByName('description') != null) {
			shortDescription = rawData.fieldByName('description').substr(0, 50) + " ... ";
		}

		var place_id = rawData.fieldByName('id');
		var imageQuery = Alloy.Globals.db.execute('select * from images where category_name = ? and province_id = ? and place_id = ? limit 1', category, province_id, place_id);
		items.push({
			itemId : rawData.fieldByName('id'),
			pic : {
				image : '/images/photos/' + imageQuery.fieldByName('name')
			},
			title : {
				text : rawData.fieldByName('name')
			},
			description : {
				text : (shortDescription != null) ? shortDescription : rawData.fieldByName('description')
			},
		});
		
		var favorite = rawData.fieldByName('favorite');
		// var note = Ti.UI.createNotification({
			// message:favorite
		// }).show();
		if(favorite == 0){
			$.heart.text = "favorite_border";
		}else{
			$.heart.text = "favorite";
		}

		rawData.next();
	}

	$.section.items = items;
}

// function changeFavorite() {
	// if (rawData.fieldByName('favorite') == 0) {
		// $.heart.text = "favorite";
		// Alloy.Globals.db.execute("update " + category_name + " set favorite=1");
	// } else {
		// $.heart.text = "favorite-border";
		// Alloy.Globals.db.execute("update " + category_name + " set favorite=1");
// 
	// }
// }

function showDetails() {
	// alert("showDetails");
}

