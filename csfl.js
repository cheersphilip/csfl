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
var P2 = P+((h-P)/2)-40;

var instructions = false;

var department = 0; //department is a selector for remembering which item you click on in the first screen
var scene = 0; //scene reflects which 'level' you are on. 0=home, 1=1st level, etc.

var thingRadius = (h+w/2)/12;

//for drawing the text inside things
var textArray = [];
var margin = w*0.02;

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
			if (scene==0) {
				department = arrayOfThings[0][i].dept;
			}
			hit(i);
			return;
		} 
	};
};

//what to do when a thing is clicked

function hit(select) {
	
	scene += 1;

	if (scene==2) {
		///// Use this alert if you don't have the database set up
		// alert(
		// 	things[department-1].description 
		// 	+ " - " 
		// 	+ arrayOfThings[department][select].description
		// 	);
		
		//flicker the thing
		this.posX = arrayOfThings[department][select].posx;
		this.posY = arrayOfThings[department][select].posy;
		this.rad = arrayOfThings[department][select].radius;

		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.rad, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
		ctx.fill();

		// SEND THE CODE TO THE DATABASE
		this.category = encodeURIComponent(things[department-1].description);
		this.description = encodeURIComponent(arrayOfThings[department][select].description);
		var url = 'csflwrite.asp?cat=' + this.category + '&desc=' + this.description;
		alert(url);
		window.location.href = url;

		//////start again - Use this if you don't have the database set up
		// scene=0;
		// department=0;
		// setTimeout(function(){drawEverythingFromScratch(department, scene)}, 200);

	} else {
		drawEverythingFromScratch(department,scene);
	}
};


//draw the things

function drawThings (num) {

	for (var i = 0; i < arrayOfThings[num].length; i++) {

		this.posX = arrayOfThings[num][i].posx;
		this.posY = arrayOfThings[num][i].posy;
		this.rad = arrayOfThings[num][i].radius;
		this.col = arrayOfThings[num][i].colour;
		this.description = arrayOfThings[num][i].description;

		// background colour
		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.rad, 0, Math.PI * 2, false);
		ctx.closePath();

		//inner shadow
		var thingGradient = ctx.createRadialGradient(this.posX-20, this.posY-20, (this.rad)*0.9, this.posX, this.posY, (this.rad)*1.2);
		thingGradient.addColorStop(0, this.col);
		thingGradient.addColorStop(1, "black");

		ctx.fillStyle = thingGradient;
		ctx.fill();

		////text
		ctx.fillStyle = "#000";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		if (num == 0) {
			ctx.font = "bold 1.6em sans-serif";
			textSpacing(i, this.description, this.posX, this.posY);
		} else {
			ctx.font = "bold 1.4em sans-serif";
			textSpacing(i, this.description, this.posX, this.posY);
		}
	};
}


// calculate the width of the text and split it into lines
function textSpacing(index, textToSpace, xnum, ynum) {

	this.index = index;
	this.textToSpace = textToSpace;
	var tempString = "";
	var r = arrayOfThings[department][this.index].radius*2 - margin;

	var wordArray = this.textToSpace.split(" ");

	for (var i = 0; i < wordArray.length; i++) {
		var word = wordArray[i];
		var metric = ctx.measureText(word);
		var wordLength = metric.width;
		var stringMetric = ctx.measureText(tempString + " ");
		var stringLength = stringMetric.width;

		if ((wordLength + stringLength) < r) {
			if (i == 0) {
				tempString = word;
			} else {
				tempString += (" " + word);
			}
		} else {
			textArray.push(tempString);
			tempString = word;
		}

		if (i== (wordArray.length)-1) {
			textArray.push(tempString);
		}

	};	
 	
	displayText(xnum, ynum);

}


//detect how many lines there are and display them

function displayText(x,y) {

	this.posX = x;
	this.posY = y;

	var lines = textArray.length;

	switch (lines) {
		case 0:
		ctx.fillText("Error: no text", this.posX, this.posY);
		break;

		case 1:
		ctx.fillText(textArray[0], this.posX, this.posY);
		break;

		case 2:
		ctx.fillText(textArray[0], this.posX, this.posY-15);
		ctx.fillText(textArray[1], this.posX, this.posY+15);
		break;

		case 3:
		ctx.fillText(textArray[0], this.posX, this.posY-25);
		ctx.fillText(textArray[1], this.posX, this.posY);
		ctx.fillText(textArray[2], this.posX, this.posY+25);
		break;

		case 4:
		ctx.fillText(textArray[0], this.posX, this.posY-40);
		ctx.fillText(textArray[1], this.posX, this.posY-15);
		ctx.fillText(textArray[2], this.posX, this.posY+15);
		ctx.fillText(textArray[3], this.posX, this.posY+40);
		break;

		case 5:
		ctx.fillText(textArray[0], this.posX, this.posY-45);
		ctx.fillText(textArray[1], this.posX, this.posY-25);
		ctx.fillText(textArray[2], this.posX, this.posY);
		ctx.fillText(textArray[3], this.posX, this.posY+25);
		ctx.fillText(textArray[4], this.posX, this.posY+45);
		break;

		default:
		ctx.fillText("Error: too much text!", this.posX, this.posY);
	}

	textArray = [];
}




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

