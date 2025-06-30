function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("U");
  console.log("R");
  console.log("A");
  console.log("B");
  console.log("H");
}

sayMyName; // reference to function
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
  return num1 + num2;
}
const sum = addTwoNumbersWithReturn(2, 3); // 5
console.log("Result:", sum);

console.log(typeof sum);

function loginUserMessage(username) {
  if (!username) {
    return "Please enter a valid username";
  } // if username is falsy (null, undefined, empty string, etc.)  // if username is truthy, then return the message
  //if(username ===  undefined) {
  // return "Please enter a valid username";
  // }
  return `${username} just logged in`;
}
console.log(loginUserMessage("Saurabh"));
console.log(loginUserMessage());  // Please enter a valid username



// we can set the default name if undefined value is passed on 

function loginUserMessageWithDefault(username = "Guest") {
  return `${username} just logged in as bypasssed default value`;
}

console.log(loginUserMessageWithDefault("Saurabh"));




// rest operator is used to collect all the arguments passed to the function into an array and is represented by three dots (...)


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // [500, 2000] - rest operator collects all the arguments passed to the function into an array :
// val1 and val2 are the first two arguments passed to the function, and num1 is an array of the rest of the arguments passed to the function


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));