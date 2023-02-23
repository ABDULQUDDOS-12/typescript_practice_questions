//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Define a TypeScript interface to describe the object structure
interface Item {
    name: string;
    price: number;
    quantity: number;
  }
  
  // Create an array of objects
  const items: Item[] = [
    { name: 'apple', price: 0.5, quantity: 10 },
    { name: 'banana', price: 0.25, quantity: 20 },
    { name: 'orange', price: 0.75, quantity: 5 },
  ];
  
  // Log the objects to the console
  console.log(items);
  