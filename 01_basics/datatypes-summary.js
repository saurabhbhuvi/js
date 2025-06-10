// Primitive data type : call by value 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Saurabh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// typeof val	      Result
// Undefined	      "undefined"
// Null	              "object"
// Boolean	          "boolean"
// Number	          "number"
// String	           "string"
// Object (native and does not implement [[Call]])      "object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".






/// ++++++++++++++++++++++++++++++++++++++++++++

// stack Memory (primitive) issme copy milta hai variable ka.
//Heap Memory (Non-Primitive ) reference of original value.



//+++++++++++++++++++++  stack memory 
 

let myYoutubename = "saurabh"

let anothername = myYoutubename
anothername = "saurabhnew"

console.log(myYoutubename);   //saurabh
console.log(anothername);     //saurabhnew

// heap  memory

let userOne = {
    email: "saurabh@gmail.com",
    gpay: "user@ybl"

}

let userTwo = userOne

userTwo.email = " saurabhnew@google.com"

console.log(userOne.email);
console.log(userTwo.email);
