// {} ------>  if its with if-else,function,for loop,while loop etc then its called block scope

// block scope ke andar wali values bahar nhi jaani chahiye print hone ke liye

// ---------------------------------------------------
//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log("OUTER: ", a);  // 300

function one() {
  const username = "saurabh";

  function two() {
    const password = "1234swqw";
    const website = "youtube.com";
    console.log("Username is:", username); // this will work as it is inside the function one
    console.log(
      `Most Popular Website is ${website} that is watched by ${username} and password is ${password}`
    ); // this will work as it is inside the function two
  }
  // function two is like a kid inside function one, so it can access the parent function's variables

  // console.log("Password is: ", password); // this will not work as it is outside the function two

  two();
  // console
}
one();



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);      // this will not work as it is outside the if block where website is defined

    console.log(username);  // this will work as it is inside the if block where username is defined
}

// console.log(username);             this will not work as it is outside the if block where username is defined


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // 6

function addone(num){
    return num + 1
}



addTwo(5)    // cannot acess before initialization
//  this not work and throw an error as addTwo is defined after this line as a variable is used to store the function
const addTwo = function(num){
    return num + 2
}
