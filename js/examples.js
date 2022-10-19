
// // function findMatches(numbers, ...args) {
// //     const matches = []; 
// //     for (const number of numbers) {
// //       if (args.includes(number)) {
// //         matches.push(number);
// //       }
// //     }
// //     return matches;
// //   }


//   // function makePizza() {
//   //   return "Your pizza is being prepared, please wait.";
//   // }
  
//   // const result = null;
//   // const pointer = null;


// // const doMath = function (a,b, callback); {
// // }

// // const calculateTotal = function (items) {
// //   for (const item of items) {
// //     total += item;
// //   }
// //   return total;
// // };
// //   const result = calculateTotal([1,2,3]);
// //   console.log (`total price of items ${result} `);


  

//   // function deliverPizza(pizzaName) {
//   //   return `Delivering ${pizzaName} pizza.`;
//   // }
  
//   // function makePizza(pizzaName) {
//   //   return `Pizza ${pizzaName} is being prepared, please wait...`;
//   // }
  
//   // function makeMessage(pizzaName, callback) {
//   //   return callback (pizzaName);
//   // }




//   // function repeatLog(n) {
//   //   for (let i = 0; i < n; i += 1) {
//   //     console.log(i);
//   //   }
//   // }
//   // repeatLog(5);


//   // const pizzaPalace = {
//   //   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   //   order(pizzaName, onSuccess, onError) {
//   //   if (this.pizzas.includes(pizzaName)) {
//   //     return onSuccess(pizzaName);
//   //   }
//   //     return onError (`There is no pizza with a name ${pizzaName} in the assortment.`);
//   //   },
//   // };
  
//   // // Callback for onSuccess
//   // function makePizza(pizzaName) {
//   //   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   // }
  
//   // // Callback for onError
//   // function onOrderError(error) {
//   //   return `Error! ${error}`;
//   // }
  
//   // // Method calls with callbacks
//   // pizzaPalace.order("Smoked", makePizza, onOrderError);
//   // pizzaPalace.order("Four meats", makePizza, onOrderError);
//   // pizzaPalace.order("Big Mike", makePizza, onOrderError);
//   // pizzaPalace.order("Vienna", makePizza, onOrderError);
  
  


//   function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//   orderedItems.forEach (item  => {
    
//       totalPrice += item;
//   });
//     return totalPrice;
//   }




//   // function changeEven(numbers, value) {
//   //   const newArray = [];
//   //   numbers.forEach ( element => {
//   //     if (element % 2 === 0) {
//   //     newArray.push(element + value)
        
//   //     } else newArray.push(element)
      
//   //   // for (let i = 0; i < numbers.length; i += 1) {
//   //   //   if (numbers[i] % 2 === 0) {
//   //   //     numbers[i] = numbers[i] + value;
//   //   //   }
      
//   //     });
//   //   return newArray;
//   // }




//   const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
  




// const calculateTotalBalance = (users) => { users.reduce((total, user) => {
  
//   console.log(total + user.balance);
// },0);
// };

// calculateTotalBalance ( 

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// );



// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
  
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log (pizzaPalace);

// console.log (pizzas.includes(pizzaName));

// console.log (this.pizzas);






// class StringBuilder {
//   constructor (initialValue) {
//    this.value = initialValue;
//   }
//    getValue(){
//    return this.value; 
//    }
//    padEnd(str){
//    this.value = this.value + str;
//    }
//    padStart(str){
//    this.value = str + this.value;
//    }
//    padBoth(str){
//     this.value = str + this.value + str; 
//    }
//  }
 
 
//  // Change code above this line
//  const builder = new StringBuilder(".");
//  console.log(builder.getValue()); // "."
//  builder.padStart("^");
//  console.log(builder.getValue()); // "^."
//  builder.padEnd("^");
//  console.log(builder.getValue()); // "^.^"
//  builder.padBoth("=");
//  console.log(builder.getValue()); // "=^.^="
 

 class Car {
  // Change code below this line
  static MAX_PRICE = 50000;
  
  #price;
  
  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= MAX_PRICE) {
       this.#price = newPrice;
    }
  }
  
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

