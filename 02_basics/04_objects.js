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


// combining objects

