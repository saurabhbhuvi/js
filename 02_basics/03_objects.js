// singleton  form hota h jab constructor ko call kiya jata hai bina new keyword ke 




//  object literal syntax se object create karte hain

const mySym = Symbol("key1"); // symbol create kiya


const person = {
    name: "saurabh",
    age: 22,
    [mySym]: "myKey1", // symbol ko key ke roop me use karna hai to square brackets me likhna padta hai
    "full name": "saurabh S", // space hai to quotes me likhna padta hai
    isActive: true,
    email: "saurabh@gmail.com",
    isLoggedIn: false,
    hobbies: ["reading", "cricket", "coding", "gaming"],
    address: {
        city: "Delhi",
        state: "Delhi"
    },    
};
 



// dot and bracket notation se access karte hain

console.log(person.name); // "saurabh"  // dot notation se access kiya
console.log(person["age"]); // 22  // bracket notation se access kiya

console.log(person.email); // "saurabh@gmail.com"  // dot notation se access kiya
console.log(person["email"]); // "saurabh@gmail.com"  // bracket notation se access kiya


console.log(person[mySym]); // "Symbol(key1)"  // symbol ko key ke roop me use kiya : // square brackets me likha hai
console.log(person["full name"]); // "saurabh S"  // space hai to quotes me likhna padta hai and sqare brackets me likha hai 


// object me key ko update karte hain

 person.email = "saurabh@yahoo.com" // email ko update kiya
console.log(person.email); // "saurabh@yahoo.com"  // dot notation se access kiya

Object.freeze(person) // object ko freeze kar diya, ab isme koi changes nahi kar sakte

// lets try to change the email again after freezing the object
 
person.email = "saurabh@chatgpt.com" 
console.log(person.email);

// no changes will be made, it will still print "saurabh@yahoo.com"




person.greeting = function(){
    console.log("Hello JS user");
}
person.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(person.greeting());
console.log(person.greetingTwo());