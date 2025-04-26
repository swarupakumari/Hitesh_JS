//array in js can be resizable
//array cannot be used directly index krna hai
//java script if copy an array to shallow copy banta h deep copy ni
//shallow share same refernce deeep doesnot

const arr =[1,2,3,4,5,6];
//push add pop last mai delete
//arr.unshift() will put in start we have to shift all the value of array
//shift reduce one element

//include check if it is include or not 
arr.includes(9) // return true or false

///// important note

const newarr= arr.join()  // issye array bant hai but string mai //1,2,3,4,5
//typeof newarr is string

//slice , splice interview question 
// difference is in slice it take value from start and doesnot include last value and doesnot modify the arr
// splice take first and last parametter also and chnge the original error

const x=arr.slice(1,3);
console.log(x); //[2,3]
console.log(arr);// [1,2,3,4,5]

const y=arr.splice(1,3) // 2,3,4
console.log(arr); //1,5,6



//+++++++++++++++++++++++++++=array part 2

// Lets create 2 arrays
let arr1 = ["Hi", "How", "are", "you"];
let arr2 = ["I", "am", "Fine"];
let arr3 = ["Hi", "How", "are", "you"];
arr1.push(arr2);
console.log(arr1);
// This basically pushes the complete array which proves array takes any type of the DataType
console.log(arr1[4][0]);
// we can concat the array method which add the two arrays and stores it in the new array
let arr4 = arr3.concat(arr2);
console.log(arr4);

// Spread operator
let arr5 = [...arr3, ...arr2];
console.log(arr5);

// This basially spreads the array and which works similarly to the concat which has syntax as ...
// we can concat multiple arrys at the same point

let arr6 = [1, 2, 3, [4, 5], 6, [7, 8]];
// flat converts multiple inside array into one array
let arr7 = arr6.flat(Infinity);
console.log(arr7);
// here we have to give the number like how many internal arrays we want to flat but we can alos give the infinity

// to check whether a give is array or not
console.log(Array.isArray(arr7));
console.log(Array.isArray("arr7")); //this is not the array now I want ot convert this inot the array
console.log(Array.from("arr7")); //This converts the give string into the array

//converting array into string ---just fun
a = ["a", "b", "v"];
b = String(a);
let c = b.replace(",", ""); //this will onlky replacce only first comma not all the comma to rplace all the comma we need to use regex global flag /,/g
console.log(c);
let d = b.replace(/,/g, "");
console.log(d);

let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1, s2, s3));
// TO convert the array from the varibles

