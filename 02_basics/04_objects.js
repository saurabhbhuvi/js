// const tinderUser = new Object()  // +++++ singleton object create kiya

const tinderUser = {}    // non-singleton object create kiya

// ye dono {} he output dene  bas difference ye hai ki pehla singleton object hai aur dusra non-singleton object hai

tinderUser.id = "12345";                 // id ko set kiya
tinderUser.name = "Saurabh"; 
tinderUser.isLoggedIn = true; 
tinderUser.lastActive = "2023-10-01";


console.log(tinderUser); // {}  // empty object
// console.log(`${tinderUser.id} ${tinderUser.name} ${tinderUser.isLoggedIn}`);
console.log(tinderUser.id, tinderUser.name, tinderUser.isLoggedIn);   // "12345 Saurabh true"  // id, name and isLoggedIn ko access kiya

// +++++ object literal syntax

const regularUser ={
    email: "saurabh@gmail.com",
    password: "12345",
    fullname:{
        userfullname:{
            firstname: "Saurabh",
            lastname:"S"
        }
    }

}

console.log(regularUser.fullname.userfullname);


// +++++ combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }   
// const obj4 = Object.assign({}, obj1, obj2, obj4)

const obj4 = {...obj1, ...obj2}  // spread operator se combine kiya   mostly yahi use karte hai for combining and joining objects
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   // Object.keys() returns an array of keys from the object
console.log(Object.values(tinderUser));  // Object.values() returns an array of values from the object
console.log(Object.entries(tinderUser)); // Object.entries() returns an array of key-value pairs from the object

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true, isLoggedIn property exists in tinderUser

