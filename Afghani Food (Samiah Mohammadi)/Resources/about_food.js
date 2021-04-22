var about_foodWin = Ti.UI.createWindow({
	backgroundColor : '#e5d9ce',
	title : 'طعم اصیل غذاهای افغانی',
	layout : 'vertical',
	orientationModes : [Ti.UI.PORTRAIT],
});
var Container = Ti.UI.createView({
	layout : 'vertical',
	height : '49%',
	width : Ti.UI.FILL,
});
var titleLabel = Ti.UI.createLabel({
	text : 'آشنایی با غذاهای معروف افغانستان',
	textAlign : 'right',
	right : '2%',
	font : {
		fontSize : '20dp'
	},
	color : 'black',
});
var descriptionLael = Ti.UI.createLabel({
	text : 'سنت‌های مختلف در هنر آشپزی افغانی بخش جدایی‌ناپذیر از رسم ریشه‌دار مهمان‌نوازی افغان‌ها را تشکیل می‌دهند غذا ابزاری است برای نشان‌دادن خصلت‌های معنوی و شیوهٔ زندگی مردم و رسم آبروداری، همسایه‌داری و ازخودگذشتگی، ویژگی‌های آشپزی هر منطقه بازتاب‌کنندهٔ تنوع جغرافیایی و قومی افغانستان است و در مجموع با آشپزی ایران و پاکستان اشتراکات فراوانی دارد. ترکیب گروه‌های غذایی گوناگون غلات، حبوبات، سبزی‌ها و پروتئین‌های گیاهی و حیوانی در همه غذاها دیده می‌شود، نان در شکل‌ها و اندازه‌های مختلف از آرد‌گندم، جو یا ذرت (جواری) طبخ می‌شود و انواع مختلفی دارد که بر اساس آداب اقوام مختلف متفاوت است و هریک به تناسب و فراخور اقلیم مردم منطقه طبخ می‌شود.',
	textAlign : 'right',
	right : '2%',
	font : {
		fontSize : '16dp'
	},
	color : 'black',
});
var CustomFood = Ti.UI.createImageView({
	image : 'Images_Recipe/img/custom_Food.png',
	top : '2%',
	borderRadius : 5
});
var actionBar;
about_foodWin.addEventListener('open', function(e) {
	if (Ti.Platform.osname == 'android') {
		actionBar = about_foodWin.activity.actionBar;
		if (actionBar) {
			actionBar.displayHomeAsUp = true;
		}
		actionBar.onHomeIconItemSelected = function() {
			about_foodWin.close();
		};
	}
});

about_foodWin.add(CustomFood);
Container.add(titleLabel);
Container.add(descriptionLael);
about_foodWin.add(Container);

module.exports = about_foodWin; 