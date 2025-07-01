// Immediately Invoked Function Expressions (IIFE)

// IIFE is a function that runs as soon as it is defined
// It is a design pattern that helps to avoid polluting the global scope
// its like (function(){})() OR ()()


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('SAURABH'); // passing argument to IIFE i.e input to the function
