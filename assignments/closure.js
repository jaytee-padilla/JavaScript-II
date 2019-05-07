// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const outer = () => {
  const outerVar = "I'm a variable defined in the outer() function";

  const inner = () => {
    const innerVar = "I'm a variable defined in the inner() function";
    
    console.log(innerVar);
    console.log(outerVar);
  }

  // console.log(innerVar); >> throws an error, 'innerVar is not defined' due to closure. innerVar only exists within inner() function
  return inner();
}

outer();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
let counter = (function() {
  let count = 1;
  
  return function() {
    console.log(count++);
    return count;
  }
})();

counter();
counter();
counter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};