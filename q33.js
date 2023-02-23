/*Think of at least three kinds of your favorite pizza. Store these pizza names
in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of
printing just the name of the pizza. For each pizza you should have one line of output
containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you
like pizza. The output should consist of three or more lines about the kinds of pizza you
like and then an additional sentence, such as I really love pizza!
*/
var pizzas = ["Pepperoni", "Mushroom", "Hawaiian"];
// Printing just the name of each pizza
console.log("Pizza names:");
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// Printing a sentence using the name of each pizza
console.log("\nPizza preferences:");
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
// Printing a sentence about how much you like pizza
console.log("\nPizza love:");
console.log("I really love pizza!");
