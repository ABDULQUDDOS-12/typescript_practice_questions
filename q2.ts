/*Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let name2: string = "abdul Quddos";
console.log("Lowercase: " + name2.toLowerCase());
console.log("Uppercase: " + name2.toUpperCase());
console.log("Titlecase: " + name2.charAt(0).toUpperCase() + name2.slice(1).toLowerCase());