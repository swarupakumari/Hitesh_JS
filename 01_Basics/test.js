const id =12345;  // you cant reintialised const here
let ename="Swarupa";
//make sure you dont use var because it doesnot able block scope as well as functional scope so we prefer let
//anything in clury braces is called as scope
lastname="singh";//JavaScript will implicitly create a global variable.implicitly creates a global variable lastname,
//  attached to the window object (in browsers).
console.log(lastname);

console.table([id,ename,lastname]);

// note 
// unll is object  (typeof --> null)  object
//undefined is datatype
//use strict ----> code will be only use new sntax and standard ( new version)


// for conversion  to number
let x="ABC";   //NAN 
let y="33" ;   //number
let z= true; // 1
let converte = Number(x);
console.log(converte);
// to string
let xy="ABC";   //NAN 
let yz="33" ;   //number
let converted = String(x);
console.log(converted);


