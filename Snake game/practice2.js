
// canvas = document.getElementById('mycanvas');
// canvas.width = 500;
// canvas.height = 500;


//canvas id=s used to draw graphics
//pen = canvas.getContext('2d')

//pen.fillStyle= "aqua";
//pen.fillRect(rect.x , rect.y , rect.w,rect.h);


function init(){

	console.log("we are inn Init()");
	canvas = document.getElementById('mycanvas');
	W = canvas.width = 500;
	H = canvas.height = 500;
	game_over = false;


	pen = canvas.getContext('2d');

	// pen.fillRect(rect.x , rect.y , rect.w,rect.h);

	rect={
	x:20,
	y:20,
	w:40,
	h:40,
	speed:5,}

}

keyPressed = 0;

function moveBox(e){

	if (e.key == "ArrowUp") {
		keyPressed=1;
	}

	else if (e.key == "ArrowDown") {
		keyPressed=2;

	}

	else if (e.key == "ArrowRight") {
		keyPressed=3;
	}

	else if (e.key == "ArrowLeft") {
		keyPressed=4;
	}

	console.log("KeyPressed value" , keyPressed);


	//update

	console.log("Key pressed = " , e.key);
}

// event listeners 
document.addEventListener('keydown' , moveBox)

function draw(){

	pen.clearRect(0,0, W,H);

	pen.fillStyle= "red";
	pen.fillRect(rect.x , rect.y , rect.w,rect.h);
		


	//console.log("we are in draw()");
}

function update(){
	// rect.x +=rect.speed;
	if (moveBox() == 2) {
		rect.y+= rect.speed;
	}
	


	// if (rect.x>W-rect.w || rect.x<0) {
	// 	rect.speed*=-1;
	// 		console.log(rect.x);

	// }

	if ( (rect.y>H-rect.h|| rect.y <0)) {
		rect.speed*=-1;
		console.log(rect.y);
	}
	//console.log("We are in update()");
}

function gameloop(){

	if (game_over==true) {
	clearInterval(f);
}

	console.log("We are in gameloop()");
	draw();
	update();
}

init();

//gameloop();
var f =setInterval(gameloop , 25);

// if (game_over==true) {
// 	clearInterval(f);
// }