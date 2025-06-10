const a = "6";
const b = "6";

let no = Number(a)
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
console.log(typeof a);
console.log(typeof no);
console.log(`print the value of ${no}`);
