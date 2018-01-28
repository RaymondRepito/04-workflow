/* ES 6 */
class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;	
	}
	
	greet() {
		console.log("Hi, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}

/* 
	Let the exports object be literally be the Class 
	so that within scripts.js, we can use
	var john = new Person("Kitty Cat111X", "orange");
	'Person' in 'new Person' will be subsitituted by the exports below set = Person
*/
/* for pre-ES6 version of 'exports' */
/*module.exports = Person;*/

/* ES6 era version of 'exports'; JS native way */
export default Person;


/* ES 5 */
/*
function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("Hello my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}
*/

/*
var john = new Person("Kitty Cat45", "orange");
john.greet();

var jane = new Person("Scooby Dog56", "yellow");
jane.greet();*/

/* Before using module.exports */
/*
console.log("hellow from Person.js");
*/

/* explains exports */
/*
exports.exampleProperty = "myproperty";
exports.exampleFunction = function() {
	alert("This is an exampleFunction");
}
*/