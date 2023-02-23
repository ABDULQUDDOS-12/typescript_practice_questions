/*You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. • Print a message to each of the two people still on your list, letting them know they’re still invited. • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
// Define an array of guests
var guests = ['Musutufa', 'Abdullah', 'qazi', 'farooque', 'ahmed', 'Faraz'];
// Print the original list of guests
console.log("Original list of guests: ", guests);
// Inform people that you can invite only two people for dinner
console.log("Sorry folks, I can invite only two people for dinner.");
// Remove guests from the list until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Print a message to the remaining two guests
console.log("Dear ".concat(guests[0], " and ").concat(guests[1], ", you're still invited to dinner."));
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the final list of guests
console.log("Final list of guests: ", guests);
