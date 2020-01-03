/*
* Variables, Data Types, and Typing
 */


/*
* Variables
 */
let wordData;

wordData = "Word list";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

/*
* Data Types: Describes the kind of data in our code
* 6 major types:
* -Boolean,
* -Null,
* -Undefined,
* -Number (all #s with math can be performed)
* -Strings
* 5 primitive types (comprised of several other types
*
* 1 composite type - Basic Building tupes
 */

let obj={
	key1:"value",
	key2: 4,
	boolean: true,
	obj2: {
		obj2key1: "Internal Object Value",
	}
};

console.log(obj.obj2.obj2key1);


/*
* Typing Systems: 2 primary characteristics of typing systems a language can have
* - evaluation: Static or Dynamic
* - comparison
 */

let var1 = "2";
let var2 = "5";
let result = var1 + var2;

console.log(result);

let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division =4 / 2;
let mod = 5 % 2;

let string = "string 1 " + "string 2";

console.log(string);
