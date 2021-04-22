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
		text : 'تبدیل حرارت\nاز:                                        به:',
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
		className : 'tableTemp',
		name : 'celsius',
		title : 'سانتی گراد',
	}), createRow({
		className : 'tableTemp',
		name : 'kelvin',
		title : 'کالوین'
	}), createRow({
		className : 'tableTemp',
		name : 'fahrenheit',
		title : 'فارنهایت'
	})];

	var tableDataTo = [createRow({
		className : 'tableTemp',
		name : 'celsius',
		title : 'سانتی گراد',
	}), createRow({
		className : 'tableTemp',
		name : 'kelvin',
		title : 'کالوین'
	}), createRow({
		className : 'tableTemp',
		name : 'fahrenheit',
		title : 'فارنهایت'
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

	var unitValues = [[1, 273.15, 33.8], [-273.15, 1, -457.87], [-17.2222222, 255.927778, 1]];

	function calculate(){
			if(fromUnit == 0 && toUnit == 1){
				result.setText(unitValues[fromUnit][toUnit]+Number(value.getValue()));
			}
			else if(fromUnit == 0 && toUnit == 0){
				result.setText(value.getValue());
			}
			else if(fromUnit == 0 && toUnit == 2){
				result.setText((Number(value.getValue()) * 1.8) + 32);
			}
			else if(fromUnit == 1 && toUnit == 0){
				result.setText(unitValues[fromUnit][toUnit]+Number(value.getValue()));
			}
			else if(fromUnit == 1 && toUnit == 1){
				result.setText(value.getValue());
			}
			else if(fromUnit == 1 && toUnit == 2){
				result.setText((Number(value.getValue()) * 1.8) - 459.67);
			}
			else if(fromUnit == 2 && toUnit == 0){
				result.setText(Number(value.getValue() - 32)/1.8);
			}
			else if(fromUnit == 2 && toUnit == 1){
				result.setText((Number(value.getValue()) + 459.67)*(5/9));
			}
			else if(fromUnit == 2 && toUnit == 2){
				result.setText(value.getValue());
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

exports.createTemp = createWin; 