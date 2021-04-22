function getProvinces() {
	var lang = L('province');
	var province = Alloy.Globals.db.execute("select * from " + lang + " order by id asc");
	while (province.isValidRow()) {
		$.container.add(Alloy.createController('cities', {
			'id' : province.fieldByName('id')
		}).getView());
		province.next();

	}
}

function homeClick(e) {
	$.drawer.toggleLeft();
}

$.index.open();
