// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var weather = Alloy.Globals.db.execute("select * from weather where province_id = ?", args.id);
$.springdegree.setText(weather.fieldByName('spring'));
$.summerdegree.setText(weather.fieldByName('summer'));
$.falldegree.setText(weather.fieldByName('fall'));
$.winterdegree.setText(weather.fieldByName('winter'));
