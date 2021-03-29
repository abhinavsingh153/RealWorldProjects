
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

			var varX = this.cells[0].x + 1;
			var varY = this.cells[0].y;

			this.cells.unshift({x:varX , y : varY});



			console.log("Updating snake");
		},


	}

	snake.createSnake();

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