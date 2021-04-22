// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var getInfo = Alloy.Globals.db.execute("select * from " +args.tableName+ " where id = ?", args.id);
$.description.setText(getInfo.fieldByName('description'));
$.window.setTitle(getInfo.fieldByName('name'));
function close(){
	$.window.close();
}
