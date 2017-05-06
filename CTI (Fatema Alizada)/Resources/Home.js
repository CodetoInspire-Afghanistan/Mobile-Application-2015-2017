var win = Ti.UI.createWindow({
	title : "Code To Inspire",
	layout : "vertical",
	orientationModes : [Ti.UI.PORTRAIT]
});

var viewCtiImage = Ti.UI.createView({
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
	backgroundColor : "#e8e3e4",
	layout : "horizontal",
});

var viewImagesContainer = Ti.UI.createImageView({
	image : "image/home/cti.png",
	left : "0dp",
	width : "35%",
	right: '7.5%',
	left: '7%'
});

var viewImages = Ti.UI.createImageView({
	image : "image/home/web-application-development.png",
	width : "50%",
});
var introLabelContainer = Ti.UI.createView({
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
	backgroundColor : "#1c0926",
	top : "1dp",
	layout : "horizontal",
});
var introLabel = Ti.UI.createLabel({
	text : "Code to inspire is a nonprofit committed to teaching female students in Afghanistan how to code.CTI aims to hitch women's economic and social advancement on to Afghanistan's growing tech industry." + " Courses in coding, access to tech & professional resources, and job placement will enable CTI students" + " to attain employment that is both financially rewarding and socially accessible." + " In areas where women's travel can be heavily restricted, the ability to work remotely is a key tool in" + " the push for equality. Access to the wealth of the global tech economy enables CTI students to add unique" + " value to their households and their communities, and to challenge the traditional gender roles in Afghanistan" + " with the best argument out there, results. ",
	font : {
		fontSize : "13dp"
	},
	top : "6dp",
	left : "6dp",
	bottom : "6dp",
	right : "6dp",
	textAlign : "center",
	color : "#c6c6c6",
	backgroundColor : "#1c0926",
	width: Ti.UI.FILL,
});
var firstLabelContainer = Ti.UI.createView({
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
	backgroundColor : "#822954",
});
var secondLabelContainer = Ti.UI.createView({
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
	backgroundColor : "#af4878",
});
var thirdLabelContainer = Ti.UI.createView({
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
	backgroundColor : "#c499b5",
});
var scrollview = Ti.UI.createScrollView({
	height : Ti.UI.FILL,
	layout : "vertical",
});
var secondLabel = Ti.UI.createLabel({
	text : "CTI is an after-school program founded by Fereshteh Forough in January of 2015.",
	font : {
		fontSize : "13dp"
	},
	textAlign : "center",
	top: '2dp',
	bottom: '2dp',
});
var firstLabel = Ti.UI.createLabel({
	text : "CTI opened the first coding school for girls in Herat, Afghanistan in November of 2015. ",
	font : {
		fontSize : "13dp"
	},
	textAlign : "center",
	top: '2dp',
	bottom: '2dp',
});
var thirdLabel = Ti.UI.createLabel({
	text : " CTI is a registered 501(c)(3) nonprofit.",
	font : {
		fontSize : "13dp",
		fontWeight: 'bold'
	},
	color: '#262525',
	top: '2dp',
	bottom: '2dp',
});
var Images = Ti.UI.createImageView({
	images : ["image/home/lifeFunction.jpg", "image/home/GhzalleZaheer.png", "image/home/techAndEdu.jpg", "image/home/MEET-Fereshteh-Forough.png", "image/home/code.jpg"],
	duration : 2000,
	height : Ti.UI.SIZE,
	width : Ti.UI.FILL,
});
Images.start();
var viewObjective = Ti.UI.createView({
	height : Ti.UI.SIZE,
	backgroundColor : "#1c0926",
});
var labelObjective = Ti.UI.createLabel({
	text : "CTI OBJECTIVES",
	top: '2dp',
	bottom: '2dp',
});
var objectivesContainer = Ti.UI.createView({
	height : Ti.UI.SIZE,
	backgroundColor : "#7a4973",
});
var objectivesLabel = Ti.UI.createLabel({
	text : "EQUALITY: Code to Inspire (CTI) uses technology education and outreach to provide Afghan women with leverage in their fight for social, political, and economic equality. " + 
	"\nEMPOWERMENT:We build skills and infrastructure for women to compete in the global tech market, empowering them financially and socially." + 
	"\nCHANGE :As role models for other young afghan women, CTI graduates demonstrate that women are capable of adding value to their communities far beyond simple housework. ",
	font : {
		fontSize : "13dp"
	},
	left : "5dp",
});

introLabelContainer.add(introLabel);
firstLabelContainer.add(firstLabel);
secondLabelContainer.add(secondLabel);
thirdLabelContainer.add(thirdLabel);

viewCtiImage.add(viewImagesContainer);
viewCtiImage.add(viewImages);

viewObjective.add(labelObjective);
objectivesContainer.add(objectivesLabel);

scrollview.add(Images);
scrollview.add(introLabelContainer);
scrollview.add(firstLabelContainer);
scrollview.add(secondLabelContainer);
scrollview.add(thirdLabelContainer);
scrollview.add(viewCtiImage);
scrollview.add(viewObjective);
scrollview.add(objectivesContainer);

win.add(scrollview);

module.exports = win;
