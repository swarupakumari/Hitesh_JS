// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


// Basically the summary of the video is : 

//  1) If you want that a method should be accessible or present in all objects in javascript (for ex: arrays, strings, functions,etc) then you can set your own method in the top level Object (because everything is an object in javascript) by using | Object.prototype.{method name} = function(){} | , after doing this you will have the access of your {method.name} from all objects for ex: every array that you declare, every string that you declare and so on. 

// 2) But lets say if you want a certain method that should be accessible only on a certain object ( for example : (this is used in the video) you want a trueLength(){this method returns the true length of an array by trimming all the whitespaces} method to accessed on all String declarations , then you can be like | String.prototype.trueLength = function(){ code that does trimming and return length } | and this will be accessible on all strings . 

// 3) this keyword in javascript refers to the current context of who is calling . matlab this boleto jisne bulaya . example: if you say  | "hemant   ".trueLength() | then how will the trueLength() method knows that on whom it have to perform . so we use this in the trueLength() function definition so it will automatically take the context of by whom the method is callled , boleto jisne bulaya uska kaam hoga.....

// if any one feels that i have included some wrong info in this comment then feel free to reply about the same.


///ccall.js

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //to hold the refernce of the execution we use call
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// Great effort sir. This is one of the tricky ones , which you explained very well. I was always wondering why we need call/apply/bind, as we can call a function directly with its name. The only difference is, via call/apply/bind we can set our current context (optionally can send our parameters) , which we cant do via normal function call. But, now i understood, under the hood its the function execution context which play a vital role when there is function inside another function.