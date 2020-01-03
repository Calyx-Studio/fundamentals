/*
* Conditionals, Functions, Scope, and Loops
 */

//Equals

let equals = 1 === 1;


//Greater than

let greaterThan = 5 > 1;

//Less than

let lessThan = 2 < 10;

//Greater than equals

let greaterThanEq = 5 >= 5;

//Less than equals

let lessThanEq = 4 <= 9;

//Not equals
let notEquals = 5 !== 2;

/*...*/

let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if (storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if( storeB < storeA ) {
	console.log("Store B has a lower price.")
	} else {
	console.log("Both stores have the same price.")
	}
}

//compareStorePrices(10, 5);
//compareStorePrices(9, 20);


function squareNum(number) {
	return number * number;
}

let squareNumber = squareNum(4);
console.log(squareNumber);

/*...SCOPE..*/
/*...SCOPE..*/
/*...SCOPE..*/
/*...SCOPE
* 3 levels of scope
* --global scope
* --function scope
* --block scope
..*/

let x = 10;

function addNumbers (n, m, x) {
	console.log(x);
	let b;
	if(1===1){
		let b = 8;
	}
	console.log(b);
	return n + m;
}

addNumbers(2, 3, 8);


/*...ARRAYS..*/
/*...ARRAYS..*/
/*...ARRAYS..*/
/*...ARRAYS
*
*
*
..*/
//               0  1  2  3  4  5  6  7
let ourArray = [ 1, 2, 3, 4, 1, 7];
let arrLen = ourArray.length

/*loop*/
/*loop
*--counter
*--comp
*--incrementer
 */
/*loop*/

/*
for( let i = 0; i<arrLen ; i ++){
	//console.log("i is equal to: " + i);
	console.log(ourArray[i]);
	for(let j = 0; j<10; j++){
		console.log("j is equal to: " + j);
	}

}
 */
let x=0;
while(x < 10){
	console.log('Ran');
	x= x + 1;

}
