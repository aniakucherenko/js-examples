// const start = 3;
// const end = 7;
// for (let i = 3; i <= 7; i += 1) {
//   console.log(i);
// }

// function includes(array, value) {
//     // Change code below this line
//   for (i=0; i<array.length; i+=1) {
//     if (array[i] = value) {
//       return "true";
//     }
//   }
//     // Change code above this line
//   }



  function filterArray(numbers, value) {
    // Change code below this line
   const newArray = [];
 for (let i=0; i <= numbers.length; i+=1) 
   if (numbers[i] > value) {
   newArray.push(numbers[i]);
  
   }
 
 return newArray;