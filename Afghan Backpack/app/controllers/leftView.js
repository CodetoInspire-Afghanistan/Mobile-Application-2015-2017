// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var tableViewRow = Alloy.Globals.db.execute("select * from icons");
while (tableViewRow.isValidRow()) {
	$.drawerTableView.appendRow(Alloy.createController('tableViewRow',{'id':tableViewRow.fieldByName('id')}).getView());
	tableViewRow.next();
}
