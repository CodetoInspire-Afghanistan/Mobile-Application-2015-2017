// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var data = Alloy.Globals.db.execute('select * from ' + args.category_name + ' where province_id = ? and id = ?', args.province_id, args.id);
var imageQuery = Alloy.Globals.db.execute('select * from images where category_name = ? and province_id = ? and place_id = ?', args.category, args.province_id, args.id);
var viewsOfScroll = [];

$.title.text = data.fieldByName('name');
$.description.text = data.fieldByName('description');

//adding images from database to scrollableView
while(imageQuery.isValidRow()){
	
	var container = Ti.UI.createView({
		height: Ti.UI.FILL,
		width: Ti.UI.FILL
	});
	
	var img = Ti.UI.createImageView({
		image: '/images/photos/' + imageQuery.fieldByName('name'),
		height: Ti.UI.FILL,
		width: Ti.UI.FILL
	});
	
	container.add(img);
	
	viewsOfScroll.push(container);
	
	imageQuery.next();
}

$.scrollableView.views = viewsOfScroll;

//functions for next and previous arrows
function goForward(){
	var currentPage = $.scrollableView.getCurrentPage();
	next = currentPage + 1;
	if(next < viewsOfScroll.length){
		$.scrollableView.scrollToView(next);	
	}else{
		next = 0;
		$.scrollableView.scrollToView(next);
	}
}

function goBack(){
	var currentPage = $.scrollableView.getCurrentPage();
	var previous;
	if(currentPage < 1){
		previous = viewsOfScroll.length - 1;
	}else{
		previous = currentPage - 1;
	}
	$.scrollableView.scrollToView(previous);
}

//To back to previous page
function closeWin(e){
	$.detailsWindow.close();
} 