const name = "saurabh"  // String is a primitive data type in JavaScript
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// backticks `` are used 

const gameName = new String('saurabh-ss-com')  //  new String is an object in JavaScript

console.log(gameName[0]);
console.log(gameName.__proto__);
 console.log(typeof gameName); // object


console.log(gameName.substring(4));
//substring ka use agar half likhana h toh index value likha do wahi se output aayega


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));  // that value is not present so it will return -1

console.log(gameName.bold());

 

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);    // empty string because it is not in the range




const newStringOne = "  Saurabh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saurabh.com/saurabh%22gmail"
 

console.log(url.replace('%22', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));




