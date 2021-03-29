 console.log('Hello World');

    let a = 20;
    console.log(a);

    // let b= "Abhi";
    // console.log(b);

    let b = [1,2,3,4,5];
    console.log(b);

    //Javascript
    //variabkes, arrays , functions , loops , classes , objects

/*
    c=20; // global scope
    let d = 30; // block scope
    var e = 100; // function scope

    function fun(){

    	let a=5;

    	if (a===5) {
    		// let f = 10;
    		// var f = 10;
    		   f = 100;

    		console.log("Inside" , f);
    	} 

    	console.log("Outside " , f);


    }

     square_root(10);
     sqrt_n(10);

    fun();
     console.log( "Global ", f);

     function square_root(n){
     	console.log("In first sqrt fn");
     	// console.log(Math.sqrt(n));
     	return ;
     }


     //function hoisting
     var sqrt_n = function(){
     	console.log("In second sqrt fn");
     	return;
     }

     */


     arr = ["apple" , "guava" , "mango"];

     console.log(arr);

     arr.push("banana"); //insert at back
     arr.pop(); // remoc=ve mform back
     arr.shift(); // remove form front
     arr.unshift("kiwi"); // insert at front
     arr.indexOf("kiwi"); // finds the index

     if(arr[0] == "Orange") {
     	console.log(arr[0]);
     } else{
     	console.log("No it is " , arr[0]);
     }

     //Event Listeners

     canvas = document.getElementById("mycanvas");

     function f(){
        console.log("you clicked the document")
     }

     canvas.addEventListener('click' , f);


     function f2(e){
        console.log("A key got pressed",e.key );
     }
     document.addEventListener('keydown', f2);

    