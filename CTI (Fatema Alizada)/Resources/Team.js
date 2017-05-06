var teamWin = Ti.UI.createWindow({
	title : "CTI",
	orientationModes: [Ti.UI.PORTRAIT]
});

var team=[
	{
		title:'Fereshteh Forough',
		leftImage:'images/FreshtaFrough.png',
		shortDescription:"Founder and CEO",
		description : "Fereshteh Forough is the Founder and President of Code to Inspire, the first coding school for girls in Afghanistan. Fereshteh was born as an Afghan refugee in Iran. One year after the fall of Taliban, She moved to Herat, Afghanistan with her family where she received her bachelor’s degree in computer science from Herat University and later a Master’s degree from Technical University of Berlin in Germany.She taught as a professor in the Computer Science Faculty of Herat University for three years. Fereshteh was a 2013 TED Talks speaker and a 2015 Clinton Global Initiative.Her passion is to empower young women from Afghanistan by improving their technical literacy. Her goal with Code To Inspire is educating Afghan women with in-demand programming skills, empower them to add unique value to their communities, and inspire them to strive for financial and social independence. Fereshteh is an advocate of using Bitcoin and the first to formally promote its use in Afghanistan.",
		img:"image/team/FereshtehForough.png",
	},
	{
		title:'John Lilic',
		leftImage:'images/JohnLilic.png',
		shortDescription:"Co-Founder, Treasurer",
		description : "John Lilic is the co-founder of Code to Inspire and serves as Treasurer. An educational background in economics and statistics and a professional background in software project origination, development and implementation, John considers it a privilege and an honor to work towards the goal of education and empowering women in Afghanistan.",
		img:"image/team/JohnLilic.png",
	},
	{
		title:'Elizabeth McCauley',
		leftImage:'images/ElizabethMcCauley.png',
		shortDescription:"Board Member",
		description : "Elizabeth works as Global Business Development Head for Coinsecure, the lead Indian Bitcoin exchange. She also serves on the Bitcoin Foundation Board of Directors. She previously handled non profit and political outreach at BitPay. Elizabeth also served as Director of Operations and Outreach for Bitcoin Magazine, the first international print publication dedicated to all things Bitcoin. Having previously served as the Scheduler and Policy Assistant for a US Member of Congress, she has a background in public policy, grassroots activism, and a keen desire to promote decentralization and individual liberties.",
		img:"image/team/ElizabethMcCauley.png",
	},
	{
		title:'Benjamin Dubow',
		leftImage:'images/BenjaminDubow.png',
		shortDescription:"Secretary",
		description : "Ben works at Google, where he leads expansion into international markets for select clients. Before assuming his current role, he led the largest ever reduction in support issues for Google’s fastest growing product, DoubleClick Bid Manager. Outside of work, Ben teaches coding at the Boys’ Club of New York, mentors first generation college students through America Needs You, and is the pressbox statistician for the Spanish broadcast of the New York Giants. Ben’s research on Afghan elections has been cited in the Asian Journal of Political Science and in the Journal of Political Studies.",
		img:"image/team/BenjaminDubow.png",
	},
	{
		title:'Azita Azimi',
		leftImage:'images/AzitaAzimi.png',
		shortDescription:"Mentors",
		description : "\" We try to train and guide female students to learn coding and empower them so that they can earn money by developing and designing websites, developing android application and making games from a safe environment.\"",
		img:"image/team/AzitaAzimi.png",
	},
	{
		title:'Ehsan Ehrari',
		leftImage:'images/EhsanEhrari.png',
		shortDescription:"Mentors",
		description : "\" This is an opportunity for afghan women to learn programing skills so they can become financially independent. Hopefully, they will empower other afghan females in the future. We also hope, they will build their relationships with students of other counties which again this is a good step for improvement. \"",
		img	:"image/team/EhsanEhrari.png",
	},
	{
		title:'Nahid Ahmadi',
		leftImage:'images/NahidAhmadi.png',
		shortDescription:"Mentors",
		description:"\" I love coding because programmers can solve problems. Coding can be a great empowering tool for Afghan girls to take part in solving the country's problems and challenges as well as participating in the local and global economy.\"",
		img:"image/team/NahidAhmadi.png",
	},
	{
		title:'Aalem Daneshyar',
		leftImage:'images/AalemDaneshyar.png',
		shortDescription:"Mentors",
		description : "\"With the hope to break down the barriers that stand between women and technology in Afghanistan, we put our efforts to inspire afghan girls to code and to prove that there should be no gender gap in the field of technology. \"",
		img:"image/team/AalemDaneshyar.png",
	},
	{
		title:'Hasib Rassa',
		leftImage:'images/HasibRassa.png',
		shortDescription:"Project Managers",
		img:"image/team/HasibRassa.png",
	},
	{
		title:'Mark D’Agostino',
		leftImage:'images/MarkAgostino.png',
		shortDescription:"Advisory Board",
		img:"image/team/MarkAgostino.png",
	},
	{
		title:'Bill Ottman',
		leftImage:'images/BillOttman.png',
		shortDescription:"Advisory Board",
		img:"image/team/BillOttman.png",
	},
	{
		title:'Shane Brauner',
		leftImage:'images/ShaneBrauner.png',
		shortDescription:"Advisory Board",
		img:"image/team/ShaneBrauner.png",
	},
	{
		title:'Jana Levene',
		leftImage:'images/JanaLevene.png',
		shortDescription:"Advisory Board",
		img:"image/team/JanaLevene.png",
	},
	{
		title:'Samuel Brylski',
		leftImage:'images/SamuelBrylski.png',
		shortDescription:"Advisory Board",
		img:"image/team/SamuelBrylski.png",
	},
	{
		title:'Hemant Ramachandra',
		leftImage:'images/HemantRamachandra.png',
		shortDescription:"Advisory Board",
		img:"image/team/HemantRamachandra.png",
	},
	{
		title:'Evanna Hu',
		leftImage:'images/EvannaHu.png',
		shortDescription:"Advisory Board",
		img:"image/team/EvannaHu.png",
	},
	{
		title:'Judd Bagley',
		leftImage:'images/JuddBagley.png',
		shortDescription:"Advisory Board",
		img:"image/team/JuddBagley.png",
	},
];
var tableData = [];
for(t in team) {
	var rows = Ti.UI.createTableViewRow({
		height : '60dp',
		width : Ti.UI.SIZE,
		className : 'Team',
	});
	var headerLabel = Ti.UI.createLabel({
		text : team[t].title,
		left : '100dp',
		top : '5dp',
		color : 'white',
		font : {
			fontSize : '16dp',
		},
		opacity : "0.8",
	});
	var leftImage = Ti.UI.createImageView({
		image : team[t].leftImage,
		width : '60dp',
		left : '20dp',
		borderWidth : "2dp",
		borderRadius : 100,
	});
	var shortDescription=Ti.UI.createLabel({
		text:team[t].shortDescription,
		left : '100dp',
		top:'25dp',
		height:Ti.UI.SIZE,
		font:{
			fontSize:'12dp'
		},
		color:'white',
		opacity:"0.7",
	});
	
	rows.add(headerLabel);
	rows.add(leftImage);
	rows.add(shortDescription);
	tableData.push(rows);
}
var tableView1 = Ti.UI.createTableView({
	data : tableData,
	backgroundColor : "#3d1a38",
});
var TeamMember= require('/teamWin');

tableView1.addEventListener('click', function(e) {
	var teamWin = TeamMember.createWin({
		currentTeam : team[e.index]
	});
	teamWin.open();
});

teamWin.add(tableView1);

module.exports = teamWin; 