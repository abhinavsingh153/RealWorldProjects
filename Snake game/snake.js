
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
	x:W/2,
	y:H/2,
	w:40,
	h:40,
	speed:5,}



}

function draw(){

	pen.clearRect(0,0, W,H);

	pen.fillStyle= "red";
	pen.fillRect(rect.x , rect.y , rect.w,rect.h);
		


	//console.log("we are in draw()");
}

function update(){
	rect.x +=rect.speed;
	rect.y+= rect.speed;


	if (rect.x>W-rect.w || rect.x<0) {
		rect.speed*=-1;
			console.log(rect.x);

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
var f =setInterval(gameloop , 100);

// if (game_over==true) {
// 	clearInterval(f);
// }