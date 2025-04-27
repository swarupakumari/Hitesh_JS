
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ //rest operator to and band ke de do
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));




/////////////////////////////////////////////scope//////////////////////////////////


//var c = 300
let a = 300//global scope
if (true) {  //block scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh" //child can access parent 

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   yeh wala ni access kr payega qki bade chote se ice cream ni lenge

     two()

}

 one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // no error fxn declartion 2 syntax h isme kr skte h phle access declartion mai

function addone(num){
    return num + 1
}



//addTwo(5)  //here it is erroe fxn declarstion kia h or store kia h variable mai so phle call ni kr skte concept of hoisting
const addTwo = function(num){
    return num + ;
}


addTwo(5)



////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++????????????????????????????????

// this and arrow fxn js 
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


//browser ke andar ek global object h window object
//summary
// 1)when we console.log 'this ' , in node environment it simply print empty object =>{}
// 2)when we console.log 'this ' , in console environment it simply print windows  object 
// 3)this refer to current context .context means an variable current context means current value of an variable
// 4)this is work in object and function in object as key value but not work in function  it return undefined in node environment
// 5)syntax of arrow function
// a)explicit
// ()=>{
// return
// }
// b)implicit
// ()=>() not required return






// SUMMARY :

// 1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
// 2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
// 3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
// 4.We can use parameter inside first parentheses.
// 5. To write two or multiple IIFE one should be end with semicolon ;





// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')



