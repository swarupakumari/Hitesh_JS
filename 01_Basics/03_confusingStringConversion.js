
console.log(true); //true 
 
console.log(+true);   //1
console.log('1'+1+1); //111
console.log(1+2+'3');  //33  phle agr normal values hai toh plus hoga
let num1,num2,num3;
num1=num2=num3=2+2  // give output as 2 in alll the value but eventually bad practise


//comparsion
console.log('01'>0);   // true but confusing kv nan mai convert ho jyega kbhi number ki tarah treat krega
console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true

console.log(undefined>0); //false
console.log(undefined==0);//false
console.log(undefined>=0);//false

// strict comparison === check value as well as data type



// summary of datatype in js
 //primitive  ---> String number ,bigint,null,undefined,boolean,symbol
   const id = Symbol('123');
   const id2=Symbol('123');
   console.log(id===id2); //false qki same ni hota 
   
 //non primitive (refrence)  --->Array Object Function( maximum data type are functions)

  const myFunction =function(){
    console.log("Hello world");
    
  }
  console.log(typeof myFunction); //object function


//   Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  object function
//        Object  =>  object


// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//memory are of 2 type
//Stack (primitive )( here we get the copy of the value) ,Heap(Non-primitive) (here we get the refernce of original value)

// • Stake/primitive 
// • Call by value
// • No object here
// Stack mei aage copy pass hoti h, to agr koi bhi changes copy mei hote hain to main mei koi fark nhi padega.
// ----------
// • Heap/non-primitive 
// • Call by reference
// • Object here
// Heap mei reference pass hota h, to reference mei changes honge to main mei changes aa jayenge.

