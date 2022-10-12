
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


  

  // function deliverPizza(pizzaName) {
  //   return `Delivering ${pizzaName} pizza.`;
  // }
  
  // function makePizza(pizzaName) {
  //   return `Pizza ${pizzaName} is being prepared, please wait...`;
  // }
  
  // function makeMessage(pizzaName, callback) {
  //   return callback (pizzaName);
  // }




  // function repeatLog(n) {
  //   for (let i = 0; i < n; i += 1) {
  //     console.log(i);
  //   }
  // }
  // repeatLog(5);


  // const pizzaPalace = {
  //   pizzas: ["Ultracheese", "Smoked", "Four meats"],
  //   order(pizzaName, onSuccess, onError) {
  //   if (this.pizzas.includes(pizzaName)) {
  //     return onSuccess(pizzaName);
  //   }
  //     return onError (`There is no pizza with a name ${pizzaName} in the assortment.`);
  //   },
  // };
  
  // // Callback for onSuccess
  // function makePizza(pizzaName) {
  //   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  // }
  
  // // Callback for onError
  // function onOrderError(error) {
  //   return `Error! ${error}`;
  // }
  
  // // Method calls with callbacks
  // pizzaPalace.order("Smoked", makePizza, onOrderError);
  // pizzaPalace.order("Four meats", makePizza, onOrderError);
  // pizzaPalace.order("Big Mike", makePizza, onOrderError);
  // pizzaPalace.order("Vienna", makePizza, onOrderError);
  
  


  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
  orderedItems.forEach (item  => {
    
      totalPrice += item;
  });
    return totalPrice;
  }