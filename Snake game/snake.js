
cs = 68; // cell size of snake

function init(){

	canvas = document.getElementById('mycanvas');
	W= H = canvas.width = canvas.height = 1000;

	pen = canvas.getContext('2d');

	snake = {
		init_len:5,
		color:"blue",
		cells:[],
		direction:"right",
		speed:1,


		createSnake:function(){

			for(var i  = this.init_len ; i >0 ; i--){
				this.cells.push({x:i, y:0});
			}
		},

		drawSnake:function(){

			for(var i = 0 ; i <this.cells.length ; i++){
				pen.fillStyle=this.color;
				pen.fillRect(this.cells[i].x*cs  , this.cells[i].y*cs , cs-3 , cs-3);}
		},

		updateSnake:function(){

			this.cells.pop();

			var headX = this.cells[0].x;
			var headY = this.cells[0].y;

			var nextX , nextY;

			if (this.direction == "right") {
				nextX = headX +1;
				nextY = headY;
			}
			else if (this.direction == "left") {
				nextX = headX - 1;
				nextY = headY;
			}
			else if (this.direction == "down") {
				nextX = headX;
				nextY = headY + 1;
			}
			else{
				nextX = headX;
				nextY = headY -1;
			}

			this.cells.unshift({x:nextX, y:nextY});

			console.log("Updating snake with directions");
		},


	}

	snake.createSnake();

	//add event listener

	function keyPressed(e){

		if (e.key == "ArrowRight") {
			snake.direction = "right";
		}
		else if(e.key == "ArrowLeft"){
			snake.direction = "left";
		}
		else if(e.key == "ArrowDown"){
			snake.direction = "down";
		}
		else 
		{
			snake.direction = "up";
		}

		console.log("Key pressed" , e.key);
		console.log("current direction" , snake.direction);
	}

	document.addEventListener('keydown' , keyPressed);

}

function draw(){

	pen.clearRect(0,0,W,H);
	snake.drawSnake();

}

function update(){

	snake.updateSnake();
}

function gameLoop(){
	draw();
	update();
}

init();

var f = setInterval(gameLoop , 100);