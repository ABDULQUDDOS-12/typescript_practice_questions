//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table. • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Define an array of guests
let guests: string[] = ['Alice', 'Bob', 'Charlie'];

// Print the original list of guests
console.log("Original list of guests: ", guests);

// Inform people that you found a bigger dinner table
console.log("Great news! We found a bigger dinner table.");

// Add a new guest to the beginning of the array
guests.unshift('Dave');

// Add a new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, 'Eve');

// Add a new guest to the end of the array using append()
guests.push('Frank');

// Print a new set of invitation messages
console.log("New set of invitation messages:");
for (let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]}, please join us for dinner at 7pm on Saturday.`);
}
