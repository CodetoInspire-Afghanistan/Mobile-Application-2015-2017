function createData(param) {

	var winCountries = Ti.UI.createWindow({
		backgroundColor : 'white',
		title : param.name,
		layout : 'vertical',
		orientationModes : [Ti.UI.PORTRAIT],
	});
	var rowData = db.execute('select * from country where ID=?', param.id);
	var topImage = Ti.UI.createImageView({
		image : rowData.fieldByName('TopImage'),
		width : Ti.UI.FILL,
		height : '35%',
	});

	var namelatinContiner = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',

	});
	var iconNamelatin = Ti.UI.createImageView({
		image : 'images/Namelatin.png',
		height : '30dp',
		right : '10%',

	});
	var namelatin = Ti.UI.createLabel({
		text : " نام لاتین: " + rowData.fieldByName('NameLatin'),
		width : '60%',
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});

	var capitalContiner = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',

	});
	var iconCapital = Ti.UI.createImageView({
		image : 'images/capital.png',
		height : '30dp',
		right : '10%',
	});

	var capital = Ti.UI.createLabel({
		text : " پایتخت: " + rowData.fieldByName('Capital'),
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});
	var religionContiner = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',
	});
	var iconReligion = Ti.UI.createImageView({
		image : 'images/religion.png',
		height : '30dp',
		right : '10%'
	});
	var religion = Ti.UI.createLabel({
		text : " مذهب: " + rowData.fieldByName('Religion'),
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});
	var populationContiner = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',

	});
	var iconPopulation = Ti.UI.createImageView({
		image : 'images/population.png',
		height : '30dp',
		right : '10%'
	});
	var population = Ti.UI.createLabel({
		text : " جمعیت: " + rowData.fieldByName('Population'),
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});
	var languageContiner = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',

	});
	var iconLanguage = Ti.UI.createImageView({
		image : 'images/language.jpg',
		height : '30dp',
		right : '10%',
	});
	var language = Ti.UI.createLabel({
		text : " زبان رسمی: " + rowData.fieldByName('Language'),
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});
	var areaContiner = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',

	});
	var iconArea = Ti.UI.createImageView({
		image : 'images/area.png',
		height : '30dp',
		right : '10%',
	});
	var area = Ti.UI.createLabel({
		text : " مساحت: " + rowData.fieldByName('Area'),
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});

	var govermentContiner = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',
	});
	var iconGoverment = Ti.UI.createImageView({
		image : 'images/goverment.png',
		height : '30dp',
		right : '10%',
	});
	var goverment = Ti.UI.createLabel({
		text : " نوع حکومت: " + rowData.fieldByName('Goverment'),
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});

	var currencyContainer = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',

	});
	var iconcurrency = Ti.UI.createImageView({
		image : 'images/money.png',
		height : '30dp',
		right : '10%',
	});

	var currency = Ti.UI.createLabel({
		text : " پول رایج: " + rowData.fieldByName('Money'),
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});

	var codeCountryContainer = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.SIZE,
		top : '1dp',
	});
	var iconCodeCountry = Ti.UI.createImageView({
		image : 'images/phone.png',
		height : '30dp',
		right : '10%',

	});

	var codeCountry = Ti.UI.createLabel({
		text : " کد کشور: " + rowData.fieldByName('CodeCountry'),
		color : 'black',
		textAlign : 'right',
		right : '25%',
		font : {
			fontSize : '15dp'
		},
	});

	var buttonDetails = Ti.UI.createButton({
		title : 'مشاهده در ویکی پدیا',
		width : '40%',
		height : '5%',
		top : '1%',
		left : '30%',
		borderRadius : '3dp',
		backgroundColor : '#c7b299',
		color : 'black',
		font : {
			fontSize : '14dp',
		},
		url : rowData.fieldByName('Url'),

	});

	var detail = require('/more_details');
	buttonDetails.addEventListener('click', function(e) {
		var link = detail.createLink({
			countryName : rowData.fieldByName('Name'),
			wikiLink : rowData.fieldByName('Url')
		});
		link.open();
	});
	var actionBar;
	winCountries.addEventListener('open', function(e) {
		if (Ti.Platform.osname == 'android') {
			actionBar = winCountries.activity.actionBar;
			if (actionBar) {
				actionBar.displayHomeAsUp = true;
			}
			actionBar.onHomeIconItemSelected = function(e) {
				winCountries.close();
			};
		}
	});

	namelatinContiner.add(namelatin);
	namelatinContiner.add(iconNamelatin);
	capitalContiner.add(capital);
	capitalContiner.add(iconCapital);
	religionContiner.add(religion);
	religionContiner.add(iconReligion);
	populationContiner.add(population);
	populationContiner.add(iconPopulation);
	languageContiner.add(language);
	languageContiner.add(iconLanguage);
	areaContiner.add(area);
	areaContiner.add(iconArea);
	govermentContiner.add(goverment);
	govermentContiner.add(iconGoverment);
	currencyContainer.add(currency);
	currencyContainer.add(iconcurrency);
	codeCountryContainer.add(codeCountry);
	codeCountryContainer.add(iconCodeCountry);

	winCountries.add(topImage);
	winCountries.add(namelatinContiner);
	winCountries.add(capitalContiner);
	winCountries.add(religionContiner);
	winCountries.add(populationContiner);
	winCountries.add(languageContiner);
	winCountries.add(areaContiner);
	winCountries.add(govermentContiner);
	winCountries.add(currencyContainer);
	winCountries.add(codeCountryContainer);
	winCountries.add(buttonDetails);

	return winCountries;
}

exports.createData = createData;
