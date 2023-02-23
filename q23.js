/*: You don’t have to limit the number of tests you create to
10. If you want to try more comparisons, write more tests. Have at least one True
and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater
than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
var str1 = 'hello';
var str2 = 'world';
// Tests for equality and inequality with strings
console.log("Is str1 == 'hello'? I predict True.");
if (str1 == 'hello') {
    console.log(true);
}
else {
    console.log(false);
}
console.log("Is str1 != str2? I predict True.");
if (str1 != str2) {
    console.log(true);
}
else {
    console.log(false);
}
// Tests using the lower case function
console.log("Is str1.toLowerCase() == 'hello'? I predict True.");
if (str1.toLowerCase() == 'hello') {
    console.log(true);
}
else {
    console.log(false);
}
console.log("Is str2.toLowerCase() == 'WORLD'? I predict False.");
if (str2.toLowerCase() == 'WORLD') {
    console.log(true);
}
else {
    console.log(false);
}
var num1 = 5;
var num2 = 10;
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is num1 == 5? I predict True.");
if (num1 == 5) {
    console.log(true);
}
else {
    console.log(false);
}
console.log("Is num1 != num2? I predict True.");
if (num1 != num2) {
    console.log(true);
}
else {
    console.log(false);
}
console.log("Is num2 > num1? I predict True.");
if (num2 > num1) {
    console.log(true);
}
else {
    console.log(false);
}
console.log("Is num1 <= 5? I predict True.");
if (num1 <= 5) {
    console.log(true);
}
else {
    console.log(false);
}
var bool1 = true;
var bool2 = false;
// Tests using "and" and "or" operators
console.log("Is bool1 && bool2 == false? I predict True.");
if (bool1 && bool2 == false) {
    console.log(true);
}
else {
    console.log(false);
}
var arr = [1, 2, 3, 4, 5];
// Test whether an item is in an array
console.log("Is 3 in arr? I predict True.");
if (arr.includes(3)) {
    console.log(true);
}
else {
    console.log(false);
}
// Test whether an item is not in an array
console.log("Is 6 not in arr? I predict True.");
if (!arr.includes(6)) {
    console.log(true);
}
else {
    console.log(false);
}
