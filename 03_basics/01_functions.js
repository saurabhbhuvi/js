

 function sayMyName() {
    console.log("S");
console.log("A");
console.log("U");
console.log("R");
console.log("A");
console.log("B");
console.log("H");
 }

 sayMyName // reference to function
  sayMyName(); //  Execution of function call



/// +++++++++++ addition of two numbers

function addTwoNumbers(num1, num2) {
   console.log(num1 + num2);
 
}
addTwoNumbers(2, 3); // 5

const sums = addTwoNumbers(2, 3);
console.log(typeof sums);




// ++++++++++++++ addition of two numbers with return statement

function addTwoNumbersWithReturn(num1, num2) {
    // let result = num1 + num2;
    // console.log("Maths");
    // return result; // return statement is used to return the value from the function


    // easiest and alternate way
    return num1 + num2 



}
const sum = addTwoNumbersWithReturn(2, 3); // 5
console.log("Result:", sum);

console.log(typeof sum);




function loginUserMessage(username){

    return ``

}