
// function findMatches(numbers, ...args) {
//     const matches = []; 
//     for (const number of numbers) {
//       if (args.includes(number)) {
//         matches.push(number);
//       }
//     }
//     return matches;
//   }


  // function makePizza() {
  //   return "Your pizza is being prepared, please wait.";
  // }
  
  // const result = null;
  // const pointer = null;


// const doMath = function (a,b, callback); {
// }

// const calculateTotal = function (items) {
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
//   const result = calculateTotal([1,2,3]);
//   console.log (`total price of items ${result} `);


  

  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
  function makeMessage(pizzaName, callback) {
    return callback (pizzaName);
  }


  