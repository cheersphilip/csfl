
///////////text wrapping functions ////////////////////


// calculate the width of the text and split it into lines
function textSpacing(index, textToSpace, xnum, ynum) {

	this.index = index;
	this.textToSpace = textToSpace;
	var tempString = "";
	var r = things[this.index].rad*2 - margin;

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

////////////// functions that draw stuff ////////////////////////

//draw the things

function drawThings (num) {

	for (var i = 0; i < things.length; i++) {
		//set the variables for each thing
		this.posX = things[i].posX;
		this.posY = things[i].posY;
		this.description = things[i].description;
		this.rad = things[i].rad;
		this.col = things[i].colour;

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
	ctx.fillText("back", w*0.06, h*0.05);
	ctx.font = "bold 100% sans-serif";
	ctx.fillText("to home page", w*0.06, (h*0.05)+40);
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
	ctx.fillRect(w*0.3, 0, w*0.4, 45);

	//reset shadow
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.shadowColor = "rgba(0, 0, 0, 0)";


//title 
	ctx.fillStyle = "#000";
	ctx.textAlign = "center"
	ctx.textBaseline = "middle";
	ctx.font = "bold 1em sans-serif";
	ctx.fillText("Customer Services Call Frequency Log", w/2, 10);

	if (scene!=0) {
		ctx.font = "bold 1.2em sans-serif";
		ctx.fillText(things[0].catDesc, w/2, 30);
	}
};

//instructions screen graphic

function showInstructions(){
	instructions = true;

	ctx.font = "bold 1.2em sans-serif";
	var iWidth = ctx.measureText("When a call comes through, click on the appropriate circle to log the general area of the query.").width + 50;

	//set shadow
	ctx.shadowOffsetX = 20;
	ctx.shadowOffsetY = 20;
	ctx.shadowBlur = 10;
	ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

	ctx.fillStyle = "SteelBlue";
	ctx.fillRect((w-iWidth)*0.5, h*0.25, iWidth, 400);

	//remove shadow
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 0;
	ctx.shadowColor = "rgba(0, 0, 0, 0)";

	ctx.lineWidth = 10;
	ctx.strokeStyle = "#F9F6F4";
	ctx.strokeRect(((w-iWidth)*0.5)-5, (h*0.25)-5, iWidth+5, 400);

	ctx.fillStyle = "#F9F6F4";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.font = "bold 2em sans-serif";
	ctx.fillText("INSTRUCTIONS:", w*0.5, (h*0.25)+35);
	ctx.textAlign = "center";
	ctx.font = "bold 1.2em sans-serif";
	ctx.fillText("When a call comes through, click on the appropriate circle to log the general area of the query.", w*0.5, (h*0.25)+85);
	ctx.fillText("This will take you to the next screen - click on the circle that best describes the query.", w*0.5, (h*0.25)+135);
	ctx.fillText("The call has now been logged and you need do nothing further.", w*0.5, (h*0.25)+185);
	ctx.fillText("There is no 'undo' button, but there is a 'back' button in the top left corner of every sub-screen.", w*0.5, (h*0.25)+235);
	ctx.fillText("Please direct any further queries to the web team ~ thank you.", w*0.5, (h*0.25)+285);
	ctx.textAlign = "center";
	ctx.font = "bold 2em sans-serif";
	ctx.fillText("Click to close these instructions.", w*0.5, (h*0.25)+350);
}
