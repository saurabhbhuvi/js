// array

const myArray = [ 264, 209, 208, 151]
const heros = ["RDJ","Captain America","Hulk" ]

const myArray2 = new Array(1,2,3,4,5,6)

console.log(myArray);
console.log(myArray[2]);
console.log(myArray2);
console.log(myArray2[1]);


const random = ["tree", 795, [0, 1, 2]];  //arrays can have strings,numbers, and even a array inside it called MULTIDIMENSIONAL Array
// random[2][2];

console.log(random[1][2]);  // undefined //its like 795[2] 795 ka index[2] jo ki defined he nhi h
console.log(random[2][2]); // 2


////// ++++++++++ Array Methods


// push, pop
myArray.push(6);
console.log(myArray); //  [264, 209, 208, 151, 6]

myArray.push(7);
myArray.pop(7);   // here it removed 7 
console.log(myArray); //  [264, 209, 208, 151, 6]

myArray.pop();    // if no values is specified it will remove the last value/index i.e.6
console.log(myArray); //  [264, 209, 208, 151]



// shift,unshift
myArray2.unshift(9)         // no.9 gets added in the 0th index by using unshift
console.log(myArray2,myArray); 
//[9, 1, 2, 3, 4, 5, 6] [ 264, 209, 208, 151 ]

myArray2.shift()         //To remove the first item from an array, use shift():
console.log(myArray2);    // [ 2, 3, 4, 5, 6 ]



// include(), indexOf()

console.log(myArray.includes(9));  // to verify if that number is present or not // output is boolean:False
console.log(myArray.indexOf(9));  // -1 if not present , exact index if present 


// join()
const newRandom = random.join() // .join() = converts everything to string 
console.log(newRandom);  // tree,795,0,1,2
console.log(typeof newRandom); //  string


// slice, splice
