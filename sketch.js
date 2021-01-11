var fixRect, movingRect;

function setup() {
     createCanvas(800,400);

	fixRect = createSprite(400,200,50,50);
	movingRect = createSprite(600,300,50,50);

	movingRect.shapeColor = "red";
	fixRect.shapeColor = "red";
}

function draw() {
	background(255,255,255);

	movingRect.x = World.mouseX;
	movingRect.y = World.mouseY;
	
	console.log(movingRect.x - fixRect.x);

	if(movingRect.x - fixRect.x < fixRect.width/2 + movingRect.width/2
		&& fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2 &&
		movingRect.y - fixRect.y < fixRect.width/2 + movingRect.width/2
		&& fixRect.y - movingRect.y < fixRect.width/2 + movingRect.width/2){
		movingRect.shapeColor = "yellow";
		fixRect.shapeColor = "yellow";
	}
	else{
		movingRect.shapeColor = "red";
		fixRect.shapeColor = "red";
	}
	
	drawSprites();
}



