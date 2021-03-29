//Object oriented programming in js

//allows to create obejtcs without defining the class


//on eway of creating obejects in js 
//also known as JSON (Javascript obejct Notation)
/*
var bird={
	x:100,
	y:20,
	color:"blue",
	eggs:["one", "two" , "three "],
	fly: function(){
		console.log("bird is flying" , this.x , this.y);
	}
};


//for loop
for(i = 0 ; i <bird.eggs.length ; i++){
	console.log(bird.eggs[i]);
}

//for each loop

bird.eggs.forEach(function(idx , val){
	console.log(idx , val);
}) ;

*/


//Another approach
//1st approach
function Fruit(taste , color){
	this.taste = taste;
	this.color = color;
}

let mango  = new Fruit("sweet" , "yellow"); 
let orange = new Fruit("sour" , "sapphron");

//JSON
//2nd approach
let apple = {
	taste:"sweet",
	color:"red",
};

//Another approach
//using class
//3rd approacj
//ECMAScript 2015 

//class declaration (not Hoisted)
class FruitClass{

	constructor(taste , color){
		this.taste=taste;
		this.color = color;
	}
}

let kiwi = new FruitClass("sour" , "green");
let kiwi2 = new FruitClass("sour" , "greenKiwi ");


//Functions - declaration , functions expression 

//class expression (not hoisted)

let fruitClass2 = class{

	constructor(taste , color){
		this.taste=taste;
		this.color = color;
	}
};

let canvas = document.getElementById('mycanvas')
console.log(canvas)
