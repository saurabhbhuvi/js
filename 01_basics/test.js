// const a = "6";
// const b = "6";

// let no = Number(a)
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }
// console.log(typeof a);
// console.log(typeof no);
// console.log(`print the value of ${no}`);


// const str1 = "saurabh"

// const repoCountt = 34

// console.log(`THE VALUE OF THE STRING IS ${str1} and the count of that value is ${repoCountt}`);


// const gameName = new String('hitesh-hc-com'); // or simply 'hitesh-hc-com'

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);






/// +++++++++++ date and time 


 
let myDate = new Date()

console.log(myDate);  // 2025-06-10T19:47:15.675Z
console.log(myDate.toDateString());  // Tue Jun 10 2025
console.log(myDate.toISOString());  // 2025-06-10T19:47:15.675Z
console.log(myDate.toJSON()); // 2025-06-10T19:47:15.675Z
console.log(myDate.toLocaleDateString()); // 6/10/2025

console.log("Indian Time:", myDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));     // Indian Time: 11/6/2025, 1:20:44 am
 
console.log(myDate.toString()); //  Tue Jun 10 2025 19:47:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString()); // 19:47:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getTimezoneOffset()); //  0


