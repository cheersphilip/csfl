// work out how big the screen is
var w=window.innerWidth;
var h=window.innerHeight;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
document.body.appendChild(canvas);


/////////////various variables///////////////////////

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
// var scene = 0; //scene reflects which 'level' you are on. 0=home, 1=1st level, etc.

var thingRadius = (h+w/2)/12;

//set the radius of all things
thing.prototype.rad = thingRadius;
for (i=0;i<this.length;i++) {
	if (things[i].description == "Other" || things[i].description == "Call Transfer"){
		things[i].rad = thingRadius*0.8;
	};
}

//set the coordinates of all things

coordinateArray = [[w*0.25, h*0.25],[w*0.5, h*0.225],[w*0.75, h*0.25],[w*0.125, h*0.525],[w*0.375, h*0.475],[w*0.625, h*0.5],[w*0.875, h*0.525],[w*0.25, h*0.75],[w*0.5, h*0.725],[w*0.75, h*0.75],[w*0.9, h*0.15]];

thing.prototype.posX = 0;
thing.prototype.posY = 0;
for (var i = 0; i < things.length; i++) {
	things[i].posX = coordinateArray[i][0];
	things[i].posY = coordinateArray[i][1];
}

//for drawing the text inside things
var textArray = [];
var margin = w*0.02;



////////////////// Event handling functions /////////////////////////

// click detection
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
				// scene -= 1;
				// if (scene == 0) {
				// 	department = 0;
				// }
				var url1 = 'csfl.asp?type=' + type;
				window.location.href = url1;
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
	for (var i = 0; i < things.length; i++) {
		var a = things[i].posX;
		var b = things[i].posY;

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

		if (Z < things[i].rad) {
			hit(i);
			return;
		} 
	};
};


//what to do when a thing is clicked

function hit(select) {
	
	//the one that was hit is things[select]
	scene += 1;

	if (scene==1) {
		/////////// call the function  that creates the new array of things /////
		this.sceneURI = encodeURIComponent(scene);
		this.deptURI = encodeURIComponent(things[select].dept);
		var url1 = 'csfl.asp?type=' + type + '&scene=' + this.sceneURI + '&dept=' + this.deptURI;
		window.location.href = url1;
	}

	if (scene==2) {
		
		//flicker the thing
		this.posX = things[select].posX;
		this.posY = things[select].posY;
		this.rad = things[select].rad;

		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.rad, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
		ctx.fill();

		//////// SEND THE CODE TO THE DATABASE /////////////
		this.cat = encodeURIComponent(things[select].catDesc);
		this.ID = encodeURIComponent(things[select].dept);
		this.description = encodeURIComponent(things[select].description);
		var url2 = 'csflwrite.asp?type=' + type + '&ID=' + this.ID + '&desc=' + this.description + '&cat=' + this.cat;
		setTimeout(function(){window.location.href = url2;}, 200);
	}
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

