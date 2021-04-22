// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var provinceTable = L('province');
var getProvince = Alloy.Globals.db.execute("select * from " + provinceTable + " where id = ?", args.id);
var Map = require("ti.map");
var annotation = Map.createAnnotation({
	latitude : getProvince.fieldByName('latitude'),
	longitude : getProvince.fieldByName('longitude'),
	title : getProvince.fieldByName('name'),
	subtitle : "Province of Afghanistan",
	leftButton : "/images/mapImage/arg11.webp",
	image : "/images/app_photo/pin.png",
	animate : true
});
var mapView = Map.createView({
	mapType : Map.NORMAL_TYPE,
	region : {
		latitude : getProvince.fieldByName('latitude'),
		longitude : getProvince.fieldByName('longitude'),
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	},
	animate : true,
	userLocation : true,
	regionFit : true,
	annotations : [annotation]
});
$.mapWindow.add(mapView);

function getUserLocation() {
	if (!Ti.Geolocation.hasLocationPermissions()) {
		Ti.Geolocation.requestLocationPermissions();
	}
}

