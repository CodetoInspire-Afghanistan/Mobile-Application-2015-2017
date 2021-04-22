var db = Ti.Database.install("assets/HeratUniversity.sqlite", "HeratUniversity.sqlite");

var win = Ti.UI.createWindow({
	title : '  معرفی نامه پوهنتون هرات ',
	backgroundColor : '#f4f2e8',
	orientationModes : [Ti.UI.PORTRAIT],
});

var universityImage = Ti.UI.createImageView({
	image : 'image/university.jpg',
	top : 0,
	width : Ti.UI.FILL,
});
var logoImage = Ti.UI.createImageView({
	image : 'image/logo.png',
	top : '2%',
	width : '60%',
});

var imageContainer = Ti.UI.createView({
	height : Ti.UI.SIZE,
});

var scrollView = Ti.UI.createScrollView({
	layout : 'vertical',
	height : Ti.UI.Fill,
	width : Ti.UI.FILL,
});
var textLabel = Ti.UI.createLabel({
	text : 'پوهنتون هرات به مثابۀ یک مرکز بزرگ علمی درحوزۀ غرب کشور ونیز به منزلۀ یک پوهنتون ملی، طی سالیان متمادی، از رشد سریع وچشمگیری برخورداربوده است.و در سالهای اخیر پوهنتون هرات را به عنوان یک پوهنتون برتر در سطح کشور مطرح نموده که در پلانهای انکشافی و استراتیژی پنج ساله آن نیز به این مسئله اشاره گردیده است.' + '.پوهنتون هرات در سال ۱۳۶۷ نظر به تقاضای مردم  فهیم هرات و منظوری  وزارت تحصیلات عالی وقت تأسیس شد؛ هرچند هرات از ده ها سال بدینسو فعالیت علمی و اکادمیک در مدرسه گوهرشاد بیگم، فخرالمدارس و ... داشته است. پوهنتون هرات کار تدریس و فعالیت خود را از پوهنحی ادبیات و علوم بشری شروع و بعداً با تأسیس پوهنحی های هنرها، زراعت، اقتصاد، شرعیات و علوم اسلامی، انجینیری، ساینس، تعلیم وتربیه، حقوق و علوم سیاسی، کمپیوترساینس، ژورنالیزم و ارتباطات جمعی،  علوم وترنری، اداره و پالیسی عامه، ستوماتولوژی و علوم اجتماعی به فعالیت خود ادامه داده  و همیشه افتخار آفرین بوده است.',
	font : {
		fontSize : '16dp'
	},
	color : 'black',
	textAlign : 'right',
	top : '5dp',
	bottom : '1%',
	right : '2%',
	height : Ti.UI.SIZE,
});
var btnFaculties = Ti.UI.createButton({
	title : 'فاکولته ها',
	top : '5dp',
	height : '40dp',
	width : '150dp',
	borderRadius : 10,
	backgroundColor : '#234b8c',
	color : 'white',
	textAlign : 'center',
	font : {
		fontSize : '20dp'
	}
});

var facultieWinFile = require('/all_faculties');
btnFaculties.addEventListener('click', function(e) {
	var facultiesWin = facultieWinFile.createFacultiesWin({
		db : db
	});
	facultiesWin.open();
});

///creating menu
var
activity,
    getAboutWin = require('/About'),
    newWindow;
    
win.addEventListener('open', function(e) {
	if (win.activity) {
		activity = win.activity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var about = menu.add({
				title : 'درباره...'
			});
			about.addEventListener('click', function(e) {
				newWindow = getAboutWin.CreateAboutWin();
				newWindow.open();
			});
		};
	}

});

imageContainer.add(universityImage);
imageContainer.add(logoImage);

scrollView.add(imageContainer);
scrollView.add(textLabel);
scrollView.add(btnFaculties);

win.add(scrollView);

win.open(); 