function createWin() {
	var window = Ti.UI.createWindow({
		title : 'مبدل واحدات',
		orientationModes : [Ti.UI.PORTRAIT]
	});
	//--------------------------------------------------making scroll

	var scrollView = Ti.UI.createScrollView({
		backgroundColor : 'white',
		height : '99%',
		width : '100%',
		layout : 'vertical'
	});

	//----------------------------------------------------views

	var tablesContainer = Ti.UI.createView({
		height : '324dp',
		width : Ti.UI.FILL,
		layout : 'horizontal'
	});

	var labelsContainer = Ti.UI.createView({
		height : '40dp',
		width : Ti.UI.FILL
	});

	var textContainer = Ti.UI.createView({
		height : '50dp',
		width : Ti.UI.FILL
	});

	var buttonContainer = Ti.UI.createView({
		height : '92dp',
		width : Ti.UI.FILL
	});

	//------------------------------------------------	making top label
	var titleLabel = Ti.UI.createLabel({
		text : 'تبدیل سرعت\nاز:                                        به:',
		font : {
			fontFamily : 'B KOODAK BOLD',
			fontSize : '21dp'
		},
		top : '1%',
		left : '25%',
		textAlign : 'right',
		width : '70%',
		color : '#606266'
	});
	//------------------------------------------------making table
	var tableDataFrom = [createRow({
		className : 'tableSpeed',
		name : 'ftPsecond',
		title : 'فوت/ثانیه',
	}), createRow({
		className : 'tableSpeed',
		name : 'kmPhour',
		title : 'کیلومتر/ساعت'
	}), createRow({
		className : 'tableSpeed',
		name : 'milePhour',
		title : 'مایل/ساعت'
	}), createRow({
		className : 'tableSpeed',
		name : 'mPsecond',
		title : 'متر/ثانیه'
	}), createRow({
		className : 'tbaleSpeed',
		name : 'mPminute',
		title : 'متر/دقیقه'
	}), createRow({
		className : 'tableSpeed',
		name : 'mPhour',
		title : 'متر/ساعت'
	})];

	var tableDataTo = [createRow({
		className : 'tableSpeed',
		name : 'ftPsecond',
		title : 'فوت/ثانیه',
	}), createRow({
		className : 'tableSpeed',
		name : 'kmPhour',
		title : 'کیلومتر/ساعت'
	}), createRow({
		className : 'tableSpeed',
		name : 'milePhour',
		title : 'مایل/ساعت'
	}), createRow({
		className : 'tableSpeed',
		name : 'mPsecond',
		title : 'متر/ثانیه'
	}), createRow({
		className : 'tbaleSpeed',
		name : 'mPminute',
		title : 'متر/دقیقه'
	}), createRow({
		className : 'tableSpeed',
		name : 'mPhour',
		title : 'متر/ساعت'
	})];

	function createRow(parameter) {
		var row = Ti.UI.createTableViewRow({
			height : '50dp',
			width : Ti.UI.FILL,
			className : parameter.className,
			name : parameter.name
		});

		var unitLabel = Ti.UI.createLabel({
			text : parameter.title,
			left : '5%',
			font : {
				fontSize : '18dp',
				// fontFamily: 'B KOODAK BOLD'
			},
			textAlign : 'right',
			width : '50dp',
			color : '#606266',
			height : '50dp',
			name : parameter.name,
			width : '90%',
			textAlign : 'center'
		});

		row.add(unitLabel);

		return row;

	}

	var fromTable = Ti.UI.createTableView({
		data : tableDataFrom,
		height : '77%',
		width : '38%',
		backgroundColor : '#f4f4f4',
		borderRadius : 5,
		borderColor : '#e5e5e5',
		separatorColor : '#e5e5e5',
		top : '1%',
		left : '11%'
	});

	var toTable = Ti.UI.createTableView({
		data : tableDataTo,
		height : '77%',
		width : '38%',
		backgroundColor : '#f4f4f4',
		borderColor : '#e5e5e5',
		borderRadius : 5,
		separatorColor : '#e5e5e5',
		top : '1%',
		left : '6%'
	});
	//-------------------------------------------------making labelOf value

	var labelOfValue = Ti.UI.createLabel({
		text : 'مقدار:',
		color : '#606266',
		font : {
			fontSize : '16dp'
		},
		top : '9%',
		width : '35%',
		textAlign : 'right',
		right : '8%'
	});

	//-------------------------------------------------making text field value

	var value = Ti.UI.createTextField({
		width : '35%',
		borderColor : '#c7c9cc',
		top : '1%',
		backgroundColor : '#f4f4f4',
		height : '72%',
		left : '57%',
		color : '#606266',
		font : {
			fontSize : '15dp'
		},
		textAlign : 'right',
		inputType : Ti.UI.INPUT_TYPE_CLASS_NUMBER,
		keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD
	});

	//-------------------------------------------------making labelOf result

	var labelOfResult = Ti.UI.createLabel({
		text : 'نتیجه:',
		color : '#606266',
		font : {
			fontSize : '16dp'
		},
		top : '9%',
		left : '8%',
		textAlign : 'right',
		width : '35%'
	});

	//-------------------------------------------------making result

	var result = Ti.UI.createLabel({
		width : '35%',
		borderColor : '#c7c9cc',
		top : '1%',
		left : '8%',
		backgroundColor : '#f4f4f4',
		height : '72%',
		color : '#606266',
		textAlign : 'right'
	});

	//-------------------------------------------------making convert button

	var convertButton = Ti.UI.createButton({
		title : 'تبدیل',
		backgroundColor : '#25529b',
		width : '80%',
		height : '40dp',
		top : '5dp',
		left : '10%',
		borderRadius : 5,
		color : 'white',
		font : {
			fontFamily : 'B KOODAK BOLD',
			fontSize : '26dp'
		}
	});

	//-------------------------------------------------adding event

	var fromUnit,
	    toUnit = 0;
	var toTempRow,
	    fromTempRow = null,
	    toTempLabel = null,
	    fromTempLabel = null;

	fromTable.addEventListener('click', function(e) {
		if (fromTempRow != e.row && fromTempRow != null) {
			fromTempRow.setBackgroundColor('#f4f4f4');
			fromTempLabel.setColor('#606266');
		}
		e.row.setBackgroundColor('#009b90');
		e.source.setColor('white');
		fromTempRow = e.row;
		fromTempLabel = e.source;
		fromUnit = e.index;
	});

	toTable.addEventListener('click', function(e) {
		if (toTempRow != e.source && toTempRow != null) {
			toTempRow.setBackgroundColor('#f4f4f4');
			toTempLabel.setColor('#606266');
		}
		e.row.setBackgroundColor('#009b90');
		e.source.setColor('white');
		toTempRow = e.row;
		toTempLabel = e.source;
		toUnit = e.index;
	});

	var unitValues = [[1, 1.09728, 0.681818182, 0.3048, 18.28800, 1097.28], [0.911344415, 1, 0.621371192, 0.277777778, 16.6666667, 1000], [1.46666667, 1.609344, 1, 0.44704, 26.8224, 1609.344], [3.2808399, 3.6, 2.23693629, 1, 60, 3600], [0.0546806649, 0.06, 0.0372822715, 0.0166666667, 1, 60], [0.000911344415, 0.001, 0.000621371192, 0.000277777778, 0.0166666667, 1]];

	function calculate() {
		if (fromTempRow != null && toTempRow != null) {
			result.setText(unitValues[fromUnit][toUnit] * Number(value.getValue()));
		}
	}


	convertButton.addEventListener('click', function(e) {
		calculate();
		indicator();
	});

	function indicator() {
		if (fromTempRow != null && toTempRow != null) {
			labelOfValue.setText('مقدار: ' + fromTempLabel.text);
			labelOfResult.setText('نتیجه: ' + toTempLabel.text);
		}
	}

	//-------------------------------------------------adding action bar

	var activity;
	window.addEventListener('open', function(e) {
		if (window.activity) {
			activity = window.activity;
			var actionBar = activity.actionBar;
			if (actionBar) {
				actionBar.displayHomeAsUp = true;
				actionBar.onHomeIconItemSelected = function() {
					window.close();
				};

			};
		}
	});

	//-------------------------------------------------adding to the window
	tablesContainer.add(titleLabel);
	tablesContainer.add(toTable);
	tablesContainer.add(fromTable);
	labelsContainer.add(labelOfValue);
	textContainer.add(value);
	labelsContainer.add(labelOfResult);
	textContainer.add(result);
	buttonContainer.add(convertButton);

	scrollView.add(tablesContainer);
	scrollView.add(labelsContainer);
	scrollView.add(textContainer);
	scrollView.add(buttonContainer);

	window.add(scrollView);
	//-------------------------------------------------returning the window
	return window;
}

exports.createSpeed = createWin; 