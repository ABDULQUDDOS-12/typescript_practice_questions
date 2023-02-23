//If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program
let arr = [1, 2, 3, 4, 5];

let index = 3; // trying to access an index outside the array bounds

if (index >= arr.length) {
  console.log("Index out of bounds! Please enter a valid index.");
} else {
  console.log(`The value at index ${index} is ${arr[index]}`);
}