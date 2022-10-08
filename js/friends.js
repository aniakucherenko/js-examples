// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Polly', online: true },
//     { name: 'Kiwi', online: true },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);
// }



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
  
//   for (const key in apartment) {
//     keys.push(key)
//     values.push(apartment[key])
//   }

//   console.log(values);
//   console.log(keys);


function countProps(object) {
    // Change code below this line
    let propCount = 0;
    
  const objectKey = Object.keys(object);
    
    console.log (objectKey);
    
    if (object.hasOwnProperty(objectKey)) {
        propCount += 1;
    }
}