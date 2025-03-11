function writeCards(names, event) {
    let messages = []; // Step 1: Create an empty array
  
    for (let i = 0; i < names.length; i++) { // Step 2: Loop through the array
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages; // Step 3: Return the new array
  }
  
  // Example usage
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));


  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrease number in each iteration
    }
  }
  
  // Example usage
  countDown(10);
  
  
  