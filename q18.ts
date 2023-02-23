//Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Define an array of guests
let guests: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Print a message indicating the number of people being invited to dinner
console.log(`You are inviting ${guests.length} people to dinner.`);

// Print the list of guests
console.log("Guests:", guests);

// Print a message indicating that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, so only two people can be invited.");

// Loop through the guests array and remove guests until only two names remain
while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, you're no longer invited to dinner.`);
}

// Print a message to each of the two people still on your list, letting them know they’re still invited
console.log(`Dear ${guests[0]} and ${guests[1]}, you are still invited to dinner.`);

// Remove the last two names from the list to make it empty and print it to show it's empty
guests.splice(0, guests.length);
console.log("Guests:", guests);
