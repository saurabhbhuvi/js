const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);     // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  array me array aa rha hai 
// console.log(marvel_heros[3][1]);  // flash


// concat method   // marvel_heros.push(dc_heros) // this will add dc_heros to marvel_heros
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);       //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// spread operator ... use karke bhi kar sakte hain
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// array ke andar array hai, isliye flat(infinity) method use karte hain flat ka depth specify karne ke liye
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]




console.log(Array.isArray("saurabh"))  // false, string is not an array
console.log(Array.from("saurabh"))  // [ 's', 'a', 'u', 'r', 'a', 'b', 'h' ]  // string ko array me convert kar diya
console.log(Array.from({name: "saurabh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

