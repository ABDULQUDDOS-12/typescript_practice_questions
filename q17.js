var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Think of at least five places in the world you’d like to visit. • Store the locations in a array. Make sure the array is not in alphabetical order. • Print your array in its original order. • Print your array in alphabetical order without modifying the actual list. • Show that your array is still in its original order by printing it. • Print your array in reverse alphabetical order without changing the order of the original list. • Show that your array is still in its original order by printing it again. • Reverse the order of your list. Print the array to show that its order has changed. • Reverse the order of your list again. Print the list to show it’s back to its original order. • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed. • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Define an array of locations
var locations = ['Tokyo', 'New York', 'Rio de Janeiro', 'Paris', 'Sydney'];
// Print the original list of locations
console.log("Original order: ", locations);
// Print the sorted list of locations without modifying the actual list
console.log("Alphabetical order: ", __spreadArray([], locations, true).sort());
// Show that the original list is still in its original order
console.log("Original order: ", locations);
// Print the reverse sorted list of locations without modifying the actual list
console.log("Reverse alphabetical order: ", __spreadArray([], locations, true).sort().reverse());
// Show that the original list is still in its original order
console.log("Original order: ", locations);
// Reverse the order of the list and print it
locations.reverse();
console.log("Reversed order: ", locations);
// Reverse the order of the list again to get back the original order and print it
locations.reverse();
console.log("Original order: ", locations);
// Sort the list in alphabetical order and print it
locations.sort();
console.log("Alphabetical order: ", locations);
// Sort the list in reverse alphabetical order and print it
locations.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse alphabetical order: ", locations);
