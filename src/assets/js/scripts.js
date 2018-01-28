/************************/
/* jQUERY 				*/
/************************/
var $ = require("jquery");

$(function(){

	$("h2").remove();
    $("h6").text("Ola");
})

/*
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
*/
/*************************************************/
/*************************************************/



/* require is a part of node.js; not a part of the javascript language */
/* for pre-ES6, we can only use 'require' */
/*var Person = require('./modules/Person'); */

/* import = ES6 era version of 'require'; JS native way */
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}
}

var john = new Person("Kitty Cat", "blue");
john.greet();

var jane = new Adult("Scooby Dog", "pink");
jane.greet();
jane.payTaxes();



/* Test out what Person is without exports
console.log(Person);
*/

/*
alert("This is a test for our webpack automation win win win!");

window.onload = function() {
    if ($) {  
        // jQuery is loaded  
        alert("Yeah baXYZ!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/
