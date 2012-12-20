//sort of include the other js file
var x = document.createElement('script');
x.src = 'csfl2.js';
document.getElementsByTagName("head")[0].appendChild(x);

// work out how big the screen is
var w=window.innerWidth;
var h=window.innerHeight;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
document.body.appendChild(canvas);


//various variables///////////////////////

var ratio = (0.3*h)/(0.2*w);

//maths for bottom left corner of screen, for instructions button
var A = Math.atan(ratio);
var z = 0.2 * w * Math.cos(A);
var p = z * Math.sin(A);
var P = h - p;
var Q = p * Math.tan(A);
var Q2 = Q/2;
var P2 = P+((h-P)/2);

var instructions = false;

var department = 0; //department is a selector for remembering which item you click on in the first screen
var scene = 0; //scene reflects which 'level' you are on. 0=home, 1=1st level, etc.

var thingRadius = (h+w/2)/12;

///////////////////////////////////////////



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


//work out what to do with a click
function clicked(e) {
	var thisPos = getCursorPosition(e);
	var X = thisPos.clickX;
	var Y = thisPos.clickY;
	var Z = 0;

	//detect click on back button
	if (scene != 0) {
		if ((X < thingRadius*1.4) && (Y < thingRadius*1.4)) {
			Z = Math.sqrt((X*X)+(Y*Y));
			if (Z < thingRadius*1.4) {
				scene -= 1;
				if (scene == 0) {
					department = 0;
				}
				drawEverythingFromScratch(department,scene);
				return;
			}
		};
	};

	//detect click on instructions box
	if (instructions == true) {
		instructions = false;
		drawEverythingFromScratch(department,scene);
		return;
	};

	//detect click on instructions button
	if (Q2 > X) {
		if (P2 > Y) {
			Z = Math.sqrt(((Q2 - X)*(Q2 - X))+((P2 - Y)*(P2 - Y)));
		} else {
			Z = Math.sqrt(((Q2 - X)*(Q2 - X))+((Y - P2)*(Y - P2)));
		};
	} else if (P2 > Y) {
		Z = Math.sqrt(((X - Q2)*(X - Q2))+((P2 - Y)*(P2 - Y)));
	} else {
		Z = Math.sqrt(((X - Q2)*(X - Q2))+((Y - P2)*(Y - P2)));
	};

	if (Z < 55) {
		showInstructions();
		return;
	}

	//detect click on 'things'
	for (var i = 0; i < arrayOfThings[department].length; i++) {
		var a = arrayOfThings[department][i].posx;
		var b = arrayOfThings[department][i].posy;

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

		if (Z < arrayOfThings[department][i].radius) {
			department = arrayOfThings[0][i].dept;
			hit(i);
			return;
		} 
	};
};


//draw the things

function drawThings (num) {

	for (var i = 0; i < arrayOfThings[num].length; i++) {

		this.posX = arrayOfThings[num][i].posx;
		this.posY = arrayOfThings[num][i].posy;
		this.rad = arrayOfThings[num][i].radius;
		this.col = arrayOfThings[num][i].colour;
		this.lineOne = arrayOfThings[num][i].line1;
		this.lineTwo = arrayOfThings[num][i].line2;
		this.lineThree = arrayOfThings[num][i].line3;

		// background colour & inner shadow

		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.rad, 0, Math.PI * 2, false);
		ctx.closePath();

		var thingGradient = ctx.createRadialGradient(this.posX-20, this.posY-20, (this.rad)*0.9, this.posX, this.posY, (this.rad)*1.2);
		thingGradient.addColorStop(0, this.col);
		thingGradient.addColorStop(1, "black");

		ctx.fillStyle = thingGradient;
		ctx.fill();

		// //text

		ctx.fillStyle = "#000";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		if (num == 0) {
			ctx.font = "bold 2em sans-serif";
			ctx.fillText(this.lineOne, this.posX, this.posY - 20);
			ctx.fillText(this.lineTwo, this.posX, this.posY + 20);
		} else {
			ctx.font = "bold 1.6em sans-serif";
			ctx.fillText(this.lineOne, this.posX, this.posY - 30);
			ctx.fillText(this.lineTwo, this.posX, this.posY);
			ctx.fillText(this.lineThree, this.posX, this.posY + 30);
		}
	};
}


//what to do when a thing is clicked

function hit(select) {
	
	scene += 1;

	if (scene==2) {
		alert("Your call to " 
			+ things[department-1].line1 
			+ " " 
			+ things[department-1].line2 
			+ ": " 
			+ arrayOfThings[department][select].line1 
			+ " " 
			+ arrayOfThings[department][select].line2  
			+ " " 
			+ arrayOfThings[department][select].line3 
			+ " " 
			+ " has been logged. Thank you.");
		// SEND THE CODE TO THE DATABASE!!!
		scene=0;
		department=0;
		canvas.width = canvas.width;
		drawEverythingFromScratch(department, scene);
	}
	drawEverythingFromScratch(department,scene);
};

// the main function that calls everything

function drawEverythingFromScratch(deptNum,sceneNum) {
	canvas.width = canvas.width;
	drawScreen(sceneNum);
	drawThings(deptNum);
	drawInstructionsButton();
	if (scene != 0) {
		drawBackButton();
	}
};

