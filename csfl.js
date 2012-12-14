// work out how big the screen is
var w=window.innerWidth;
var h=window.innerHeight;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
document.body.appendChild(canvas);

//click detection
canvas.addEventListener("click", clicked, false);

function clickPos(clickX, clickY){
  this.clickX = clickX;
	this.clickY = clickY;
}
//code for returning coordinates in any browser
function getCursorPosition(e) {
    var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
		x = e.pageX;
		y = e.pageY;
    }
    else {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	var thisPos = new clickPos(x, y);
	return thisPos;
};

function hit(aThing) {
	alert(aThing);
};

function clicked(e) {
	var thisPos = getCursorPosition(e);
	var X = thisPos.clickX;
	var Y = thisPos.clickY;
	var Z = 0;

	// alert(thisPos.clickX);

	for (var i = 0; i < things.length; i++) {
		var a = things[i].posx;
		var b = things[i].posy;

		if (a > X) {
			if (b > Y) {
				Z = Math.sqrt(((a - X)*(a - X))+((b - Y)*(b - Y)));
			} else {
				Z = Math.sqrt(((a - X)*(a - X))+((Y - b)*(Y - b)));
			};
		} else if (b > Y) {
			Z = Math.sqrt(((X - a)*(X - a))+((b - Y)*(b - Y)));
		} else {
			Z = Math.sqrt(((X - a)*(X - a))+((Y - b)*(Y - b)));
		};

		if (Z < things[i].radius) {
			alert(things[i].line1 + " " + things[i].line2);
			// hit(things[i]);
		} 
	};
};




//draw some shapes




var things = [];
var thingRadius = (h+w/2)/12;



function drawThings() {

	for (var i = 0; i < things.length; i++) {

		this.posX = things[i].posx;
		this.posY = things[i].posy;
		this.rad = things[i].radius;
		this.col = things[i].colour;
		this.lineOne = things[i].line1;
		this.lineTwo = things[i].line2;

		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.rad, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fillStyle = this.col;
		ctx.fill();

		ctx.fillStyle = "#000";
		ctx.textAlign = "center"
		ctx.textBaseline = "middle";
		ctx.font = "bold 2em sans-serif";
		ctx.fillText(this.lineOne, this.posX, this.posY - 20);
		ctx.fillText(this.lineTwo, this.posX, this.posY + 20);

	};
};

function thing (colour, line1, line2, posx, posy, radius) {
	this.colour = colour;
	this.line1 = line1;
	this.line2 = line2;
	this.posx = posx;
	this.posy = posy;
	this.radius = radius;
};

community = new thing ("#006ab2", "Community", "& Wellbeing", w*0.25, h*0.25, thingRadius);
business = new thing ("#8721c2", "Business", "& Economy", w*0.5, h*0.225, thingRadius);
streets = new thing ("#fa89f6", "Streets &", "Transport", w*0.75, h*0.25, thingRadius);
internal = new thing ("#c2aeae", "Internal", "Services", w*0.125, h*0.525, thingRadius);
benefits = new thing ("#af0734", "Benefits", "", w*0.375, h*0.475, thingRadius);
environment = new thing ("#008734", "Environment", "& Waste", w*0.625, h*0.5, thingRadius);
planning = new thing ("#2dbdb8", "Planning", "& Design", w*0.875, h*0.525, thingRadius);
democratic = new thing ("#c4b27a", "Council &", "Democracy", w*0.25, h*0.75, thingRadius);
counciltax = new thing ("#da6329", "Council", "Tax", w*0.5, h*0.725, thingRadius);
housing = new thing ("#fcc203", "Housing", "", w*0.75, h*0.75, thingRadius);

things.push(community, business, streets, internal, benefits, environment, planning, democratic, counciltax, housing);

document.onLoad(drawThings());
