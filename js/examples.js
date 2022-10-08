
function findMatches(numbers, ...args) {
    const matches = []; 
    for (const number of numbers) {
      if (args.includes(number)) {
        matches.push(number);
      }
    }
    return matches;
  }