

//arrays for things
var things = [];
var communityThings = [];
var businessThings = [];
var streetsThings = [];
var internalThings = [];
var benefitsThings = [];
var environmentThings = [];
var planningThings = [];
var democraticThings = [];
var counciltaxThings = [];
var housingThings = [];
var arrayOfThings = [
  things, 
	communityThings, 
	businessThings, 
	streetsThings, 
	internalThings, 
	benefitsThings, 
	environmentThings, 
	planningThings, 
	democraticThings, 
	counciltaxThings, 
	housingThings
];



//thing constructor
function thing (dept, colour, line1, line2, line3, posx, posy, radius) {
	this.dept = dept;
	this.colour = colour;
	this.line1 = line1;
	this.line2 = line2;
	this.line3 = line3;
	this.posx = posx;
	this.posy = posy;
	this.radius = radius;
};


//main homepage things
community = new thing (1, "#006ab2", "Community", "& Wellbeing", "", w*0.25, h*0.25, thingRadius);
business = new thing (2, "#8721c2", "Business", "& Economy", "", w*0.5, h*0.225, thingRadius);
streets = new thing (3, "#fa89f6", "Streets &", "Transport", "", w*0.75, h*0.25, thingRadius);
internal = new thing (4, "#c2aeae", "Internal", "Services", "", w*0.125, h*0.525, thingRadius);
benefits = new thing (5, "#af0734", "Benefits", "", "", w*0.375, h*0.475, thingRadius);
environment = new thing (6, "#008734", "Environment", "& Waste", "", w*0.625, h*0.5, thingRadius);
planning = new thing (7, "#2dbdb8", "Planning", "& Design", "", w*0.875, h*0.525, thingRadius);
democratic = new thing (8, "#c4b27a", "Council &", "Democracy", "", w*0.25, h*0.75, thingRadius);
counciltax = new thing (9, "#da6329", "Council", "Tax", "", w*0.5, h*0.725, thingRadius);
housing = new thing (10, "#fcc203", "Housing", "", "", w*0.75, h*0.75, thingRadius);

things.push(community, business, streets, internal, benefits, environment, planning, democratic, counciltax, housing);


//communnity things
community1 = new thing (0, "#006ab2", "General", "health", "enquiry", w*0.25, h*0.25, thingRadius);
community2 = new thing (1, "#006ab2", "Disabled", "facilities", "grant", w*0.5, h*0.225, thingRadius);
community3 = new thing (2, "#006ab2", "North Norfolk", "older people's", "forum", w*0.75, h*0.25, thingRadius);
community4 = new thing (3, "#006ab2", "Beach", "huts &", "chalets", w*0.125, h*0.525, thingRadius);
community5 = new thing (4, "#006ab2", "Dogs on", "beaches", "", w*0.375, h*0.475, thingRadius);
community6 = new thing (5, "#006ab2", "Leisure", "centres", "", w*0.625, h*0.5, thingRadius);
community7 = new thing (6, "#006ab2", "Other", "", "", w*0.875, h*0.525, thingRadius);

communityThings.push(community1, community2, community3, community4, community5, community6, community7);

//business things
business1 = new thing (0, "#8721c2", "Alchohol &", "Entertainment", "licensing", w*0.25, h*0.25, thingRadius);
business2 = new thing (1, "#8721c2", "", "Taxis", "", w*0.5, h*0.225, thingRadius);
business3 = new thing (2, "#8721c2", "Small", "business", "rate relief", w*0.75, h*0.25, thingRadius);
business4 = new thing (3, "#8721c2", "licensing", "registers", "", w*0.125, h*0.525, thingRadius);
business5 = new thing (4, "#8721c2", "National", "Non Domestic", "Rates", w*0.375, h*0.475, thingRadius);
business6 = new thing (5, "#8721c2", "Economic", "Development", "", w*0.625, h*0.5, thingRadius);
business7 = new thing (6, "#8721c2", "Waste & ", "recycling", "", w*0.875, h*0.525, thingRadius);
business8 = new thing (7, "#8721c2", "Contracting", "& tender", "opportunities", w*0.25, h*0.75, thingRadius);
business9 = new thing (8, "#8721c2", "Business", "support", "", w*0.5, h*0.725, thingRadius);
business10 = new thing (9, "#8721c2", "", "Other", "", w*0.75, h*0.75, thingRadius);

businessThings.push(business1, business2, business3, business4, business5, business6, business7, business8, business9, business10);

//streets things
streets1 = new thing (0, "#fa89f6", "Car", "parking", "", w*0.25, h*0.25, thingRadius);
streets2 = new thing (1, "#fa89f6", "Bus", "passes", "", w*0.5, h*0.225, thingRadius);
streets3 = new thing (2, "#fa89f6", "Rail", "cards", "", w*0.75, h*0.25, thingRadius);
streets4 = new thing (3, "#fa89f6", "Highway", "drainage", "", w*0.125, h*0.525, thingRadius);
streets5 = new thing (4, "#fa89f6", "", "Licensing", "", w*0.375, h*0.475, thingRadius);
streets6 = new thing (5, "#fa89f6", "Parking", "enforcement", "", w*0.625, h*0.5, thingRadius);
streets7 = new thing (6, "#fa89f6", "Street", "lighting", "", w*0.875, h*0.525, thingRadius);
streets8 = new thing (7, "#fa89f6", "House", "naming &", "numbering", w*0.25, h*0.75, thingRadius);
streets9 = new thing (8, "#fa89f6", "", "Other", "", w*0.5, h*0.725, thingRadius);

streetsThings.push(streets1, streets2, streets3, streets4, streets5, streets6, streets7, streets8, streets9);

//internal things
internal1 = new thing (0, "#c2aeae", "Customer", "services", "", w*0.25, h*0.25, thingRadius);
internal2 = new thing (1, "#c2aeae", "Website", "feedback", "", w*0.5, h*0.225, thingRadius);
internal3 = new thing (2, "#c2aeae", "Opening", "times", "", w*0.75, h*0.25, thingRadius);
internal4 = new thing (3, "#c2aeae", "", "Complaint", "", w*0.125, h*0.525, thingRadius);
internal5 = new thing (4, "#c2aeae", "Data", "protection", "", w*0.375, h*0.475, thingRadius);
internal6 = new thing (5, "#c2aeae", "", "Other", "", w*0.625, h*0.5, thingRadius);

internalThings.push(internal1, internal2, internal3, internal4, internal5, internal6);

//benefits things
benefits1 = new thing (0, "#af0734", "How", "do I", "claim?", w*0.25, h*0.25, thingRadius);
benefits2 = new thing (1, "#af0734", "How much", "benefit will", "I get?", w*0.5, h*0.225, thingRadius);
benefits3 = new thing (2, "#af0734", "What is", "Housing", "Benefit?", w*0.75, h*0.25, thingRadius);
benefits4 = new thing (3, "#af0734", "Who can", "qualify for", "benefit?", w*0.125, h*0.525, thingRadius);
benefits5 = new thing (4, "#af0734", "What is", "Council Tax", "Benefit?", w*0.375, h*0.475, thingRadius);
benefits6 = new thing (5, "#af0734", "How much", "LHA will", "I get?", w*0.625, h*0.5, thingRadius);
benefits7 = new thing (6, "#af0734", "What is", "LHA?", "", w*0.875, h*0.525, thingRadius);
benefits8 = new thing (7, "#af0734", "Change", "of details", "", w*0.25, h*0.75, thingRadius);
benefits9 = new thing (8, "#af0734", "", "Other", "", w*0.5, h*0.725, thingRadius);

benefitsThings.push(benefits1, benefits2, benefits3, benefits4, benefits5, benefits6, benefits7, benefits8, benefits9);

//environment things
environment1 = new thing (0, "#008734", "Recycling", "& waste", "collections", w*0.25, h*0.25, thingRadius);
environment2 = new thing (1, "#008734", "Garden", "bins", "", w*0.5, h*0.225, thingRadius);
environment3 = new thing (2, "#008734", "Recycling", "centres", "", w*0.75, h*0.25, thingRadius);
environment4 = new thing (3, "#008734", "Bulky", "waste", "", w*0.125, h*0.525, thingRadius);
environment5 = new thing (4, "#008734", "Noise &", "nuisance", "", w*0.375, h*0.475, thingRadius);
environment6 = new thing (5, "#008734", "Pest", "control", "", w*0.625, h*0.5, thingRadius);
environment7 = new thing (6, "#008734", "Assisted", "Burial", "", w*0.875, h*0.525, thingRadius);
environment8 = new thing (7, "#008734", "Food", "safety &", "hygiene", w*0.25, h*0.75, thingRadius);
environment9 = new thing (8, "#008734", "", "Other", "", w*0.5, h*0.725, thingRadius);

environmentThings.push(environment1, environment2, environment3, environment4, environment5, environment6, environment7, environment8, environment9);

//planning things
planning1 = new thing (0, "#2dbdb8", "Planning", "Searches", "", w*0.25, h*0.25, thingRadius);
planning2 = new thing (1, "#2dbdb8", "Weekly", "Lists", "", w*0.5, h*0.225, thingRadius);
planning3 = new thing (2, "#2dbdb8", "Planning", "application", "info", w*0.75, h*0.25, thingRadius);
planning4 = new thing (3, "#2dbdb8", "Planning", "application", "advice", w*0.125, h*0.525, thingRadius);
planning5 = new thing (4, "#2dbdb8", "Planning", "application", "forms", w*0.375, h*0.475, thingRadius);
planning6 = new thing (5, "#2dbdb8", "Planning", "application", "fees", w*0.625, h*0.5, thingRadius);
planning7 = new thing (6, "#2dbdb8", "Planning", "committee", "", w*0.875, h*0.525, thingRadius);
planning8 = new thing (7, "#2dbdb8", "Do I need", "planning", "permission", w*0.25, h*0.75, thingRadius);
planning9 = new thing (8, "#2dbdb8", "", "Other", "", w*0.5, h*0.725, thingRadius);

planningThings.push(planning1, planning2, planning3, planning4, planning5, planning6, planning7, planning8, planning9);

//democratic things
democratic1 = new thing (0, "#c4b27a", "", "Committees", "", w*0.25, h*0.25, thingRadius);
democratic2 = new thing (1, "#c4b27a", "Find my", "Councillor", "", w*0.5, h*0.225, thingRadius);
democratic3 = new thing (2, "#c4b27a", "Corporate", "leadership", "team", w*0.75, h*0.25, thingRadius);
democratic4 = new thing (3, "#c4b27a", "Charges &", "banding", "", w*0.125, h*0.525, thingRadius);
democratic5 = new thing (4, "#c4b27a", "", "Youth voice", "", w*0.375, h*0.475, thingRadius);
democratic6 = new thing (5, "#c4b27a", "Cabinet", "membership &", "portfolios", w*0.625, h*0.5, thingRadius);
democratic7 = new thing (6, "#c4b27a", "Maps of", "wards &", "parishes", w*0.875, h*0.525, thingRadius);
democratic8 = new thing (7, "#c4b27a", "Decision", "making", "", w*0.25, h*0.75, thingRadius);
democratic9 = new thing (8, "#c4b27a", "", "Other", "", w*0.5, h*0.725, thingRadius);
democratic10 = new thing (9, "#c4b27a", "Housing", "", "", w*0.75, h*0.75, thingRadius);

democraticThings.push(democratic1, democratic2, democratic3, democratic4, democratic5, democratic6, democratic7, democratic8, democratic9);

//counciltax things
counciltax1 = new thing (0, "#da6329", "How", "to pay", "", w*0.25, h*0.25, thingRadius);
counciltax2 = new thing (1, "#da6329", "How much", "is my council", "tax?", w*0.5, h*0.225, thingRadius);
counciltax3 = new thing (2, "#da6329", "Charges &", "banding", "", w*0.75, h*0.25, thingRadius);
counciltax4 = new thing (3, "#da6329", "Internal", "Services", "", w*0.125, h*0.525, thingRadius);
counciltax5 = new thing (4, "#da6329", "Change", "of", "details", w*0.375, h*0.475, thingRadius);
counciltax6 = new thing (5, "#da6329", "Council", "tax", "discounts", w*0.625, h*0.5, thingRadius);
counciltax7 = new thing (6, "#da6329", "Paying", "by direct", "debit", w*0.875, h*0.525, thingRadius);
counciltax8 = new thing (7, "#da6329", "", "Other", "", w*0.25, h*0.75, thingRadius);

counciltaxThings.push(counciltax1, counciltax2, counciltax3, counciltax4, counciltax5, counciltax6, counciltax7, counciltax8);

//housing things
housing1 = new thing (0, "#fcc203", "Housing", "associations", "", w*0.25, h*0.25, thingRadius);
housing2 = new thing (1, "#fcc203", "Finding", "a home", "", w*0.5, h*0.225, thingRadius);
housing3 = new thing (2, "#fcc203", "Housing", "options", "", w*0.75, h*0.25, thingRadius);
housing4 = new thing (3, "#fcc203", "Info for", "private", "landlords", w*0.125, h*0.525, thingRadius);
housing5 = new thing (4, "#fcc203", "Help in", "finding a private", "rented home", w*0.375, h*0.475, thingRadius);
housing6 = new thing (5, "#fcc203", "What is", "supported", "housing?", w*0.625, h*0.5, thingRadius);
housing7 = new thing (6, "#fcc203", "Change", "of", "details", w*0.875, h*0.525, thingRadius);
housing8 = new thing (7, "#fcc203", "", "Other", "", w*0.25, h*0.75, thingRadius);

housingThings.push(housing1, housing2, housing3, housing4, housing5, housing6, housing7, housing8);



//instructions button graphics

function drawInstructionsButton() {

	ctx.beginPath();
	ctx.arc(Q2, P2, 50, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fillStyle = "SteelBlue";
	ctx.fill();
	ctx.beginPath();
	ctx.arc(Q2, P2, 55, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "SteelBlue";
	ctx.stroke();

	ctx.fillStyle = "#F9F6F4";
	ctx.textAlign = "center"
	ctx.textBaseline = "middle";
	ctx.font = "bold 5em serif";
	ctx.fillText("i", Q2, P2);
}

//back button graphics

function drawBackButton() {

	ctx.beginPath();
	ctx.arc(0, 0, thingRadius*1.4, 0, Math.PI * 2, false);
	ctx.closePath();

	var backButtonGradient = ctx.createRadialGradient(0, 0, thingRadius*1.3, 0, 0, thingRadius*1.5);
	backButtonGradient.addColorStop(0, "SteelBlue");
	backButtonGradient.addColorStop(1, "black");

	ctx.fillStyle = backButtonGradient;
	ctx.fill();

	ctx.fillStyle = "#F9F6F4";
	ctx.textAlign = "center"
	ctx.textBaseline = "middle";
	ctx.font = "bold 2.5em sans-serif";
	ctx.fillText("back", w*0.05, h*0.05);
	ctx.font = "bold 1em sans-serif";
	ctx.fillText("to home page", w*0.05, (h*0.05)+40);
}


//draw the whole screen

function drawScreen(scene) {
 
 //background 
 	ctx.beginPath();
 	ctx.moveTo(0,0);
 	ctx.lineTo(w/2,h/2);
 	ctx.lineTo(w, 0);
 	ctx.lineTo(0,0);
 	ctx.closePath();
 	ctx.fillStyle = "#DFD4CA";
 	ctx.fill();

	ctx.beginPath();
 	ctx.moveTo(0,0);
 	ctx.lineTo(w/2,h/2);
 	ctx.lineTo(0, h);
 	ctx.lineTo(0,0);
 	ctx.closePath();
 	ctx.fillStyle = "#E5DDD4";
 	ctx.fill();

	ctx.beginPath();
 	ctx.moveTo(w,0);
 	ctx.lineTo(w/2,h/2);
 	ctx.lineTo(w, h);
 	ctx.lineTo(w,0);
 	ctx.closePath();
 	ctx.fillStyle = "#ECE5DF";
 	ctx.fill();

	ctx.beginPath();
 	ctx.moveTo(0,h);
 	ctx.lineTo(w/2,h/2);
 	ctx.lineTo(w, h);
 	ctx.lineTo(0,h);
 	ctx.closePath();
 	ctx.fillStyle = "#F2EEEA";
 	ctx.fill();

 	ctx.fillStyle = "#F9F6F4";
	ctx.fillRect(w*0.06, h*0.06, w*0.88, h*0.88);

//title box
	//set shadow
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;
	ctx.shadowBlur = 5;
	ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

 	ctx.fillStyle = "#F9F6F4";
	ctx.fillRect(w*0.3, 0, w*0.4, h*0.06);

	//reset shadow
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.shadowColor = "rgba(0, 0, 0, 0)";


//title 
	ctx.fillStyle = "#000";
	ctx.textAlign = "center"
	ctx.textBaseline = "middle";
	ctx.font = "bold 1.2em sans-serif";
	ctx.fillText("Customer Services Call Frequency Log", w/2, 20);

	if (scene!=0) {
		ctx.font = "bold 2em sans-serif";
		ctx.fillText(arrayOfThings[0][department-1].line1 + " " + arrayOfThings[0][department-1].line2, w/2, 45);
	}
};

//instructions screen graphic

function showInstructions(){
	instructions = true;

	//set shadow
	ctx.shadowOffsetX = 20;
	ctx.shadowOffsetY = 20;
	ctx.shadowBlur = 2;
	ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

	ctx.fillStyle = "SteelBlue";
	ctx.fillRect(w*0.25, h*0.25, w*0.5, 500);

	//remove shadow
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.shadowColor = "rgba(0, 0, 0, 0)";

	ctx.lineWidth = 10;
	ctx.strokeStyle = "#F9F6F4";
	ctx.strokeRect((w*0.25)-5, (h*0.25)-5, (w*0.5)+5, 510);

	ctx.fillStyle = "#F9F6F4";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.font = "bold 2em sans-serif";
	ctx.fillText("INSTRUCTIONS:", w*0.5, (h*0.25)+25);
	ctx.textAlign = "left";
	ctx.font = "bold 1.2em sans-serif";
	ctx.fillText("When a call comes through, click on the appropriate circle to log the general area of the query.", (w*0.25)+25, (h*0.25)+75);
	ctx.fillText("This will take you to the next screen - click on the specific question the best fits the query.", (w*0.25)+25, (h*0.25)+125);
	ctx.fillText("The call has now been logged and you need do nothing further.", (w*0.25)+25, (h*0.25)+175);
	ctx.fillText("When the next call comes through you can click the 'back' button in the top-left corner of the screen,", (w*0.25)+25, (h*0.25)+225);
	ctx.fillText("refresh your browser or, if the new call relates to the same query as the previous one, simply click", (w*0.25)+25, (h*0.25)+250);
	ctx.fillText("on the same button again to log the new call.", (w*0.25)+25, (h*0.25)+275);
	ctx.fillText("There is no 'undo' button - every click that does not go to a new page is logged!", (w*0.25)+25, (h*0.25)+325);
	ctx.fillText("Please direct any further queries to the web team ~ thank you.", (w*0.25)+25, (h*0.25)+375);
	ctx.textAlign = "center";
	ctx.font = "bold 2em sans-serif";
	ctx.fillText("Click to close these instructions.", w*0.5, (h*0.25)+450);
}
