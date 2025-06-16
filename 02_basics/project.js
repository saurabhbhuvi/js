// 🎯 Goal: Take a list of products (with price and quantity), calculate total bill, and print line-by-line.

// 🔹 Step-by-Step Tasks:
// Create an array of 2–3 product objects
// Each object should have:

// name
// price
// quantity

// Loop through the array using forEach()

// For each product, calculate: subtotal = price × quantity

// Add all subtotals to get the total bill

// Print nicely using template literals


const products = [
    {
        name: "maza",
        price: 69,
        quantity: 7
    },
    {
        name: "frooti",
        price: 80,
        quantity: 1
    },
    {
        name: "sprite",
        price: 10,
        quantity: 80
    }
];

// console.log(products);
 let totalBill = 0;
 let Savings = 0;
products.forEach((product,index) => {
    const subTotal = product.price * product.quantity;
    const discount = subTotal / 10;
 totalBill += subTotal - discount ;
Savings += discount;
 

console.log(`Item ${index+1}: ${product.name}`);
console.log(`Price: ${product.price}$`);
console.log(`Quantity: ${product.quantity}`);
console.log(`Discount 10%off: ${discount.toFixed(3)}$`);
console.log("-----------------------------");


});

console.log(`Total Bill: ${totalBill.toFixed(3)}$`);
console.log(`Total Savings: ${Savings.toFixed(2)}$`);
